import mongoose from "mongoose";
import Quiz from "../models/quizModel";
import Question from "../models/questionModel";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface VocabQuestion {
  questionText: string;
  keyWord: string;  // Thêm trường keyWord để hỗ trợ bold từ khóa trong UI
  options: Option[];
  category: number;
  quizId?: mongoose.Types.ObjectId;
}

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/AWS_Quiz";  // Có thể đổi DB name nếu cần (e.g., Vocab_Quiz)
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createVocabExam = async () => {
  await connectDB();  // Kết nối một lần duy nhất

  try {
    // Xóa quiz cũ nếu tồn tại (đổi tên phù hợp)
    await Quiz.deleteMany({ title: "Word Knowleague 1" });

    const vocabQuestions: VocabQuestion[] = [
      {
        questionText: "Tim promised to meet us at the apex.",
        keyWord: "apex",
        options: [
          { text: "top", isCorrect: true },
          { text: "bottom", isCorrect: false },
          { text: "canyon", isCorrect: false },
          { text: "river", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Assimilate most nearly means",
        keyWord: "Assimilate",
        options: [
          { text: "absorb", isCorrect: true },
          { text: "react", isCorrect: false },
          { text: "pretend", isCorrect: false },
          { text: "lie", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Brittle most nearly means",
        keyWord: "Brittle",
        options: [
          { text: "soft", isCorrect: false },
          { text: "fragile", isCorrect: true },
          { text: "study", isCorrect: false },
          { text: "hard", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Datum most nearly means",
        keyWord: "Datum",
        options: [
          { text: "fiscal year date", isCorrect: false },
          { text: "congruence", isCorrect: false },
          { text: "fact", isCorrect: true },
          { text: "positive result", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText:
          "The exchange student was proficient in French, German, and English.",
        keyWord: "proficient",
        options: [
          { text: "poor", isCorrect: false },
          { text: "knowledgeable", isCorrect: false },
          { text: "adept", isCorrect: true },
          { text: "exacting", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText:
          "The judge imposed a severe penalty due to Tom's actions.",
        keyWord: "imposed",
        options: [
          { text: "scheduled", isCorrect: false },
          { text: "made an example of", isCorrect: false },
          { text: "levied", isCorrect: true },
          { text: "questioned", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mary went to the store and bought peanuts galore.",
        keyWord: "galore",
        options: [
          { text: "abundant", isCorrect: true },
          { text: "on sale", isCorrect: false },
          { text: "roasted", isCorrect: false },
          { text: "unshelled", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He ran headlong into the fight.",
        keyWord: "headlong",
        options: [
          { text: "headfirst", isCorrect: false },
          { text: "happily", isCorrect: false },
          { text: "reluctantly", isCorrect: false },
          { text: "recklessly", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Frugal most nearly means",
        keyWord: "Frugal",
        options: [
          { text: "quiet", isCorrect: false },
          { text: "amazing", isCorrect: false },
          { text: "economical", isCorrect: true },
          { text: "denounced", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The word most opposite in meaning to stimulate is",
        keyWord: "stimulate",
        options: [
          { text: "support", isCorrect: false },
          { text: "arrest", isCorrect: true },
          { text: "travel", isCorrect: false },
          { text: "dislike", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Illicit most nearly means",
        keyWord: "Illicit",
        options: [
          { text: "historical", isCorrect: false },
          { text: "unlawful", isCorrect: true },
          { text: "storied", isCorrect: false },
          { text: "willfully", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Vacate most nearly means",
        keyWord: "Vacate",
        options: [
          { text: "crawl", isCorrect: false },
          { text: "impel", isCorrect: false },
          { text: "exhume", isCorrect: false },
          { text: "leave", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The sergeant gave his reasoned opinion.",
        keyWord: "reasoned",
        options: [
          { text: "irate", isCorrect: false },
          { text: "logical", isCorrect: true },
          { text: "impressive", isCorrect: false },
          { text: "uninformed", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tacit most nearly means",
        keyWord: "Tacit",
        options: [
          { text: "loud", isCorrect: false },
          { text: "understandable", isCorrect: true },
          { text: "commendable", isCorrect: false },
          { text: "implied", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The brass was not burnished.",
        keyWord: "burnished",
        options: [
          { text: "yellow", isCorrect: false },
          { text: "dull", isCorrect: false },
          { text: "expensive", isCorrect: false },
          { text: "polished", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The commodity was sold.",
        keyWord: "commodity",
        options: [
          { text: "product", isCorrect: true },
          { text: "stock", isCorrect: false },
          { text: "idea", isCorrect: false },
          { text: "table", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her motives were contrived.",
        keyWord: "contrived",
        options: [
          { text: "emotional", isCorrect: false },
          { text: "premeditated", isCorrect: true },
          { text: "obscure", isCorrect: false },
          { text: "amazing", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Supplicate most nearly means",
        keyWord: "Supplicate",
        options: [
          { text: "to make superior", isCorrect: false },
          { text: "to be unnecessary", isCorrect: false },
          { text: "to beg", isCorrect: true },
          { text: "to be expensive", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The word most opposite in meaning to hypocrisy is",
        keyWord: "hypocrisy",
        options: [
          { text: "honesty", isCorrect: true },
          { text: "happy", isCorrect: false },
          { text: "angry", isCorrect: false },
          { text: "hypocrisy", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Bob found the peaches to be extremely succulent.",
        keyWord: "succulent",
        options: [
          { text: "large", isCorrect: false },
          { text: "tasteless", isCorrect: false },
          { text: "old", isCorrect: false },
          { text: "juicy", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText:
          "The Army soldiers were ordered to immediate garrison duty.",
        keyWord: "garrison",
        options: [
          { text: "field", isCorrect: false },
          { text: "combat", isCorrect: false },
          { text: "latrine", isCorrect: false },
          { text: "fort", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Furtherance most nearly means",
        keyWord: "Furtherance",
        options: [
          { text: "advancement", isCorrect: true },
          { text: "finance", isCorrect: false },
          { text: "practicality", isCorrect: false },
          { text: "destruction", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Grocery most nearly means",
        keyWord: "Grocery",
        options: [
          { text: "bride", isCorrect: false },
          { text: "shopping", isCorrect: true },
          { text: "home", isCorrect: false },
          { text: "ad", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Abrogate most nearly means",
        keyWord: "Abrogate",
        options: [
          { text: "recover", isCorrect: false },
          { text: "ad", isCorrect: false },
          { text: "boathouse", isCorrect: false },
          { text: "foreclose", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Compensation most nearly means",
        keyWord: "Compensation",
        options: [
          { text: "religion", isCorrect: false },
          { text: "boathouse", isCorrect: false },
          { text: "shower", isCorrect: false },
          { text: "reimbursement", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "He gave a brusque account of the events.",
        keyWord: "brusque",
        options: [
          { text: "lengthy", isCorrect: false },
          { text: "legible", isCorrect: false },
          { text: "uncensored", isCorrect: false },
          { text: "abrupt", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText:
          "The vote resulted in the demise of the proposed new law.",
        keyWord: "demise",
        options: [
          { text: "passage", isCorrect: false },
          { text: "postponement", isCorrect: false },
          { text: "death", isCorrect: true },
          { text: "abatement", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "We commemorated our veterans during the ceremony.",
        keyWord: "commemorated",
        options: [
          { text: "denigrated", isCorrect: false },
          { text: "remembered", isCorrect: true },
          { text: "thanked", isCorrect: false },
          { text: "took pictures of", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Bore most nearly means",
        keyWord: "Bore",
        options: [
          { text: "deepen", isCorrect: false },
          { text: "depen", isCorrect: false },
          { text: "dig", isCorrect: true },
          { text: "jump", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "That custom still prevails.",
        keyWord: "prevails",
        options: [
          { text: "angers", isCorrect: false },
          { text: "persists", isCorrect: true },
          { text: "excites", isCorrect: false },
          { text: "surprises", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Defray most nearly means",
        keyWord: "Defray",
        options: [
          { text: "invade", isCorrect: false },
          { text: "obstruct", isCorrect: false },
          { text: "pay", isCorrect: true },
          { text: "reverse", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Chasm most nearly means",
        keyWord: "Chasm",
        options: [
          { text: "abyss", isCorrect: true },
          { text: "mountain", isCorrect: false },
          { text: "valley", isCorrect: false },
          { text: "plain", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fundamental most nearly means",
        keyWord: "Fundamental",
        options: [
          { text: "radical", isCorrect: false },
          { text: "basic", isCorrect: true },
          { text: "excessive", isCorrect: false },
          { text: "superficial", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Susceptible most nearly means",
        keyWord: "Susceptible",
        options: [
          { text: "travel", isCorrect: false },
          { text: "resistant", isCorrect: false },
          { text: "limited", isCorrect: false },
          { text: "vulnerable", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Emblem most nearly means",
        keyWord: "Emblem",
        options: [
          { text: "symbol", isCorrect: true },
          { text: "statue", isCorrect: false },
          { text: "religion", isCorrect: false },
          { text: "image", isCorrect: false },
        ],
        category: 2,
      },
    ];

    // Create new quiz
    const vocabExamQuiz = await Quiz.create({
      title: "Word Knowleague 1",
      description:
        "A set of questions to review word knowledge for ASVAB test.",
      price: 0,
    });

    // Add `quizId` to each question in `vocabQuestions`
    const questionsWithQuizId = vocabQuestions.map((question) => ({
      ...question,
      quizId: vocabExamQuiz._id,
    }));

    // Insert questions
    const insertedQuestions = await Question.insertMany(questionsWithQuizId);
    console.log("Inserted Vocab Exam questions:", insertedQuestions.length);

    // Update Quiz with questions (giả sử Quiz model có field 'questions' là array ObjectId)
    await Quiz.findByIdAndUpdate(vocabExamQuiz._id, {
      $push: { questions: { $each: insertedQuestions.map((q) => q._id) } },
    });

    console.log("Vocab Exam quiz created successfully.");
  } catch (err) {
    console.error("Error creating Vocab Exam quiz:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Database disconnected");
  }
};

createVocabExam();