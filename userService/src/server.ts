import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
//import UserRoutes from "./routes/UserRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5001;
const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/user_service";

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/users", UserRoutes);

// Kết nối MongoDB
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Kết nối MongoDB thành công!");
    app.listen(PORT, () => console.log(`🚀 User Service chạy tại http://localhost:${PORT}`));
  } catch (error) {
    console.error("❌ Lỗi kết nối MongoDB:", error);
    process.exit(1);
  }
};

connectDB();
