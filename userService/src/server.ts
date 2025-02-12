import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import UserRoutes from "./routes/UserRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/user_service";

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/users", UserRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Kết nối MongoDB thành công!");
    app.listen(PORT, () => console.log(`🚀 User Service chạy tại http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));
