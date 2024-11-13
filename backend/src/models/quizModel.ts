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
    questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    }],
    price: {
      type: Number,
      default: 0,
      min: [0, 'Price must be a positive number'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Thêm virtual populate để tối ưu hóa việc lấy questions
quizSchema.virtual('questionDetails', {
  ref: 'Question',
  localField: 'questions',
  foreignField: '_id',
});

const Quiz = mongoose.model<IQuiz>('Quiz', quizSchema);

export default Quiz;