import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber?: string;
  isVerified?: boolean;
  isPremium?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    phoneNumber: { type: String, default: '' },
    isVerified: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
