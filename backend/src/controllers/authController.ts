import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import transporter from '../configs/email';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';
const CLIENT_URL = process.env.CLIENT_URL || '';

// Utility function to send email
async function sendEmail(to: string, subject: string, html: string) {
  return transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, html });
}

// Signup handler
export const signup = async (req: Request, res: Response): Promise<void> => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const emailToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    const url = `${CLIENT_URL}/confirm/${emailToken}`;

    // Send confirmation email
    try {
      await sendEmail(
        email,
        "Xác nhận đăng ký tài khoản - Thi Nail",
        `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #007BFF;">Chào ${firstName} ${lastName},</h2>
              <p>Cảm ơn bạn đã đăng ký tài khoản tại <strong>Thi Nail</strong>!</p>
              <p>Vui lòng nhấp vào nút bên dưới để xác nhận địa chỉ email của bạn và hoàn tất quá trình đăng ký.</p>
              <div style="text-align: center; margin: 20px 0;">
                  <a href="${url}" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Xác nhận Email</a>
              </div>
              <p>Nếu bạn không thực hiện yêu cầu này, bạn có thể bỏ qua email này.</p>
              <p>Nếu bạn gặp bất kỳ vấn đề gì, hãy liên hệ với đội ngũ hỗ trợ của chúng tôi qua email <a href="mailto:support.thinail@gmail.com">support.thinail@gmail.com</a>.</p>
              <br>
              <p>Trân trọng,</p>
              <p><strong>Đội ngũ Thi Nail</strong></p>
          </div>
        `
      );
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      res.status(500).json({ message: "Error sending confirmation email" });
      return;
    }

    // Save user
    user = new User({ firstName, lastName, email, password: hashedPassword, phoneNumber, isVerified: false });
    await user.save();
    res.status(201).json({ message: "User created successfully. Please check your email to verify your account." });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Confirm email handler
export const confirmEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      res.status(400).json({ message: "Invalid token" });
      return;
    }

    user.isVerified = true;
    await user.save();
    res.status(200).json({ message: "Email has been verified. You can now log in." });
  } catch (error) {
    console.error("Error confirming email:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Login handler
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.isVerified) {
      res.status(400).json({ message: user ? "Please verify your email to log in." : "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "3h" });
    res.json({ token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Find password handler
export const findPassword = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Không tìm thấy tài khoản với email đã cung cấp." });
      return;
    }

    const resetToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    const resetUrl = `${CLIENT_URL}/resetPassword/${resetToken}`;
    const message = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1>Yêu cầu đặt lại mật khẩu</h1>
            <p>Nhấn vào liên kết bên dưới để đặt lại mật khẩu:</p>
            <p><a href="${resetUrl}" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Đặt lại mật khẩu</a></p>
            <p>Liên kết sẽ hết hạn trong 1 giờ.</p>
            <p>Trân trọng,</p>
            <p>Đội ngũ hỗ trợ - Thi Nail</p>
        </div>
    `;

    await sendEmail(user.email, "Yêu cầu đặt lại mật khẩu - Thi Nail", message);
    res.status(200).json({ message: "Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư." });
  } catch (error) {
    console.error("Error in findPassword:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi. Vui lòng thử lại." });
  }
};

// Reset password handler
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(400).json({ message: "Token không hợp lệ hoặc đã hết hạn" });
      return;
    }

    user.password = await bcrypt.hash(password, 12);
    await user.save();
    res.status(200).json({ message: "Mật khẩu đã được cập nhật thành công." });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.name === "TokenExpiredError") {
        res.status(400).json({ message: "Token đã hết hạn." });
      } else {
        console.error("Error resetting password:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi. Vui lòng thử lại." });
      }
    } else {
      console.error("An unknown error occurred:", error);
      res.status(500).json({ message: "Đã xảy ra lỗi. Vui lòng thử lại." });
    }
  }
};

