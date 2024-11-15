import mongoose from 'mongoose';
import Quiz from '../models/quizModel';
import Question from '../models/questionModel';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface AWSQuestion {
  questionText: string;
  options: Option[];
  category: number;
  quizId?: mongoose.Types.ObjectId;
}

const connectDB = async () => {
  const uri = 'mongodb://127.0.0.1:27017/AWS_Quiz';
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createAWSExam = async () => {
  await connectDB();

  try {
    const awsQuestions: AWSQuestion[] = [
      {
        questionText: 'What is the primary service in AWS for hosting static websites?',
        options: [
          { text: 'AWS S3', isCorrect: true },
          { text: 'AWS Lambda', isCorrect: false },
          { text: 'AWS EC2', isCorrect: false },
          { text: 'AWS CloudWatch', isCorrect: false }
        ],
        category: 2,
      },
      // Add more questions here
      {
        questionText: 'There is a requirement to host a set of servers in the Cloud for a short period of 6 months. Which of the following types of instances should be chosen to be cost-effective?',
        options: [
          { text: 'On-demand', isCorrect: true },
          { text: 'Spot Instances', isCorrect: false },
          { text: 'No upfront cost reserved', isCorrect: false },
          { text: 'Partial upfront costs reserved', isCorrect: false }
        ],
        category: 2,
      }
    ];

    // Delete any existing quiz with the same title
    await Quiz.deleteMany({ title: 'Comprehensive AWS Exam' });

    // Create new quiz
    const awsExamQuiz = await Quiz.create({
      title: 'Comprehensive AWS Exam',
      description: 'A set of questions to review essential knowledge for AWS certification.',
      price: 0,
    });

    // Add `quizId` to each question in `awsQuestions`
    const questionsWithQuizId = awsQuestions.map((question) => ({
      ...question,
      quizId: awsExamQuiz._id,
    }));

    // Insert questions
    const insertedQuestions = await Question.insertMany(questionsWithQuizId);
    console.log('Inserted AWS Exam questions:', insertedQuestions);

    // Update Quiz with questions
    await Quiz.findByIdAndUpdate(awsExamQuiz._id, {
      $push: { questions: { $each: insertedQuestions.map(q => q._id) } }
    });

    console.log('AWS Exam quiz created successfully.');
  } catch (err) {
    console.error('Error creating AWS Exam quiz:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Database disconnected');
  }
};

createAWSExam();
