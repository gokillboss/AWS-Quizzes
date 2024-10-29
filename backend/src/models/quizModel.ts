import mongoose, { Document, Schema } from 'mongoose';

interface IQuiz extends Document {
  title: string;
  description?: string;
  questions: mongoose.Types.ObjectId[];
  price?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const quizSchema = new Schema<IQuiz>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
    },
    description: {
      type: String,
      default: '',
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    price: {
      type: Number,
      default: 0,
      min: [0, 'Price must be a positive number'],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model<IQuiz>('Quiz', quizSchema);

export default Quiz;
