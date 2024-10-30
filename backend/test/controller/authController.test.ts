// tests/controllers/authController.test.ts
import request from 'supertest';
import app from '../../src/app';
import User from '../../src/models/userModel';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { beforeAll, afterEach, afterAll, describe, it, expect } from '@jest/globals';

dotenv.config({ path: '.env.test' });

// Kết nối đến cơ sở dữ liệu kiểm thử
beforeAll(async () => {
  const dbUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/AWS_Quiz';
  await mongoose.connect(dbUri);
});

// Xóa dữ liệu người dùng sau mỗi kiểm thử
afterEach(async () => {
  await User.deleteMany({});
});

// Ngắt kết nối sau khi hoàn thành các kiểm thử
afterAll(async () => {
  await mongoose.disconnect();
});

describe('Auth Controller', () => {
  // Kiểm thử đăng ký người dùng thành công
  it('should register a new user successfully', async () => {
    const response = await request(app).post('/api/v1/auth/signup').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'User created successfully. Please check your email to verify your account.');

    const user = await User.findOne({ email: 'johndoe@example.com' });
    expect(user).not.toBeNull();
    expect(user?.isVerified).toBe(false);
  });

  // Kiểm thử đăng ký người dùng với email đã tồn tại
  it('should not register user with existing email', async () => {
    // Tạo người dùng trước khi thử đăng ký với email trùng
    await new User({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      password: await bcrypt.hash('password123', 10),
      phoneNumber: '1234567890',
      isVerified: true,
    }).save();

    const response = await request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'User already exists');
  });

  // Kiểm thử đăng nhập người dùng
  it('should log in the user with valid credentials', async () => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = new User({
      firstName: 'Sam',
      lastName: 'Smith',
      email: 'samsmith@example.com',
      password: hashedPassword,
      phoneNumber: '1234567890',
      isVerified: true,
    });
    await user.save();

    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'samsmith@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  // Kiểm thử đăng nhập với tài khoản chưa xác thực
  it('should not log in the user if email is not verified', async () => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = new User({
      firstName: 'Sam',
      lastName: 'Smith',
      email: 'unverified@example.com',
      password: hashedPassword,
      phoneNumber: '1234567890',
      isVerified: false,
    });
    await user.save();

    const response = await request(app).post('/api/v1/auth/login').send({
      email: 'unverified@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Please verify your email to log in.');
  });

  // Kiểm thử gửi yêu cầu tìm lại mật khẩu
  it('should send a password reset email', async () => {
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'resetpassword@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      isVerified: true,
    });
    await user.save();

    const response = await request(app).post('/api/v1/auth/findPassword').send({
      email: 'resetpassword@example.com',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư.');
  });

  // Kiểm thử đặt lại mật khẩu với token hợp lệ
  it('should reset the password with a valid token', async () => {
    const user = new User({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'resetpasswordvalid@example.com',
      password: 'oldpassword123',
      phoneNumber: '1234567890',
      isVerified: true,
    });
    await user.save();

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    const response = await request(app).post(`/api/v1/auth/resetPassword/${resetToken}`).send({
      password: 'newpassword123',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Mật khẩu đã được cập nhật thành công.');

    const updatedUser = await User.findOne({ email: 'resetpasswordvalid@example.com' });
    const isMatch = await bcrypt.compare('newpassword123', updatedUser?.password || '');
    expect(isMatch).toBe(true);
  });
});
