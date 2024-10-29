import mongoose, { Document, Schema, Types } from 'mongoose';

interface ITransaction extends Document {
  userId: Types.ObjectId;
  quizId: Types.ObjectId;
  amount: number;
  transactionDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const transactionSchema = new Schema<ITransaction>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
    amount: { type: Number, required: true },
    transactionDate: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;
