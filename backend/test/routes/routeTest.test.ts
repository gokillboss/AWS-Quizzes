// tests/routes/routeTest.test.ts

import request from 'supertest';
import app from '../../src/app'; 
import mongoose from 'mongoose';
import User from '../../src/models/userModel';
import Quiz from '../../src/models/quizModel';
import dotenv from 'dotenv';

dotenv.config();

// Kết nối tới database kiểm thử
beforeAll(async () => {
  const dbUri = process.env.TEST_DB_URI || 'mongodb://127.0.0.1:27017/AWS_Quiz';
  await mongoose.connect(dbUri);
});

// Xóa dữ liệu sau mỗi bài kiểm thử
afterEach(async () => {
  await User.deleteMany({});
  await Quiz.deleteMany({});
});

// Ngắt kết nối sau khi hoàn thành kiểm thử
afterAll(async () => {
  await mongoose.disconnect();
});

describe('API Routes', () => {
  describe('Auth Routes', () => {
    it('POST /api/v1/auth/signup - should register a new user', async () => {
      const response = await request(app).post('/api/v1/auth/signup').send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        phoneNumber: '1234567890',
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('message', 'User created successfully. Please check your email to verify your account.');
    });
  });

  let token: string;

  beforeEach(async () => {
    // Tạo và đăng nhập người dùng để lấy token
    await request(app).post('/api/v1/auth/signup').send({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
    });

    const loginResponse = await request(app).post('/api/v1/auth/login').send({
      email: 'janedoe@example.com',
      password: 'password123',
    });

    token = loginResponse.body.token;
  });

  describe('Quiz Routes', () => {

    it('POST /api/v1/quiz - should create a new quiz', async () => {
      const response = await request(app)
        .post('/api/v1/quiz')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Sample Quiz',
          description: 'This is a sample quiz',
          questions: [],
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('title', 'Sample Quiz');
    });

    it('GET /api/v1/quiz - should retrieve all quizzes', async () => {
      // Tạo một quiz để kiểm thử
      await new Quiz({ title: 'Sample Quiz', description: 'Sample Quiz Description' }).save();

      const response = await request(app)
        .get('/api/v1/quiz')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it('GET /api/v1/quiz/:id - should retrieve a single quiz by ID', async () => {
      const quiz = await new Quiz({ title: 'Sample Quiz', description: 'Sample Quiz Description' }).save();

      const response = await request(app)
        .get(`/api/v1/quiz/${quiz._id}`)
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('title', 'Sample Quiz');
    });
  });

  describe('Payment Routes', () => {
    it('POST /api/v1/payment/create-checkout-session - should create a checkout session', async () => {
      const quiz = await new Quiz({ title: 'Paid Quiz', description: 'A quiz with a price', price: 100 }).save();

      const response = await request(app)
        .post('/api/v1/payment/create-checkout-session')
        .set('Authorization', `Bearer ${token}`)
        .send({ quizId: quiz._id });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('sessionId');
    });
  });
});
