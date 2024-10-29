import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './configs/database';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';


// Tạo ứng dụng Express
const app: Application = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));

// Kết nối MongoDB
connectDB();

// Đọc web hook trước khi đọc JSON (nếu cần sử dụng lại)
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));

// Parse JSON body
app.use(bodyParser.json());


import apiRoutes from './routes/index';
app.use('/api/v1', apiRoutes);

// Middleware xử lý lỗi
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
