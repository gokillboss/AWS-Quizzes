import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/userModel';

interface UserRequest extends Request {
  user?: {
    id: string;
  };
}

interface AuthRequest extends Request {
  user?: { id: string };
}

// Lấy tất cả người dùng
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error instanceof Error ? error.message : error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Lấy người dùng theo ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error instanceof Error ? error.message : error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Xóa người dùng
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error instanceof Error ? error.message : error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Lấy thông tin hồ sơ người dùng
export const getUserProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    console.log("Fetching profile for user ID:", req.user?.id); // Log user ID to verify
    const user = await User.findById(req.user?.id).select('-password');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user profile:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Cập nhật hồ sơ người dùng
export const updateUserProfile = async (req: UserRequest, res: Response): Promise<void> => {
  const { firstName, lastName, phone } = req.body;

  try {
    let user = await User.findById(req.user?.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.phoneNumber = phone || user.phoneNumber;

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.error('Error updating user profile:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Cập nhật mật khẩu
export const updatePassword = async (req: UserRequest, res: Response): Promise<void> => {
  const { currentPassword, newPassword } = req.body;

  try {
    let user = await User.findById(req.user?.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Kiểm tra mật khẩu hiện tại
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Password Wrong' });
      return;
    }

    // Cập nhật mật khẩu mới
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error('Error updating password:', err instanceof Error ? err.message : err);
    res.status(500).json({ message: 'Server Error' });
  }
};
