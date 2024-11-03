// questionModel.ts
import mongoose, { Document, Schema, Types } from 'mongoose';

interface IOption {
  text: string;
  isCorrect: boolean;
}

interface IQuestion extends Document {
  quizId: Types.ObjectId;
  questionText: string;
  options: IOption[];
  category: 1 | 2 | 3 | 4;
  createdAt?: Date;
  updatedAt?: Date;
}

const optionSchema = new Schema<IOption>({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true, default: false },
});

const questionSchema = new Schema<IQuestion>(
  {
    quizId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Quiz', 
      required: true,
      index: true // Thêm index để tối ưu queries
    },
    questionText: { 
      type: String, 
      required: true 
    },
    options: [optionSchema],
    category: { 
      type: Number, 
      required: true, 
      enum: [1, 2, 3, 4] 
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Question = mongoose.model<IQuestion>('Question', questionSchema);

export default Question;
