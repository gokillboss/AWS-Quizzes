// wordKnowledgeSeed4.ts
import mongoose from "mongoose";
import Quiz from "../models/quizModel";
import Question from "../models/questionModel";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface VocabQuestion {
  questionText: string;
  keyWord?: string;
  options: Option[];
  category: number;
  quizId?: mongoose.Types.ObjectId;
}

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/AWS_Quiz";
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createWordKnowledgeQuiz = async () => {
  await connectDB();

  try {
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 4" });

    const questions: VocabQuestion[] = [
      {
        questionText: "Impose most nearly means",
        keyWord: "Impose",
        options: [
          { text: "create", isCorrect: false },
          { text: "force",  isCorrect: true  },
          { text: "damage", isCorrect: false },
          { text: "trade",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Stunted most nearly means",
        keyWord: "Stunted",
        options: [
          { text: "halted",     isCorrect: true  },
          { text: "frightened", isCorrect: false },
          { text: "aged",       isCorrect: false },
          { text: "overstated", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "A sturdy home can withstand nearly any disaster.",
        keyWord: "sturdy",
        options: [
          { text: "huge",     isCorrect: false },
          { text: "strong",   isCorrect: true  },
          { text: "cold",     isCorrect: false },
          { text: "cautious", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He was undeterred in his quest to find her.",
        keyWord: "undeterred",
        options: [
          { text: "surprised", isCorrect: false },
          { text: "persistent",isCorrect: true  },
          { text: "careless",  isCorrect: false },
          { text: "brazen",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ennui most nearly means",
        keyWord: "Ennui",
        options: [
          { text: "patient",  isCorrect: false },
          { text: "gloating", isCorrect: false },
          { text: "boredom",  isCorrect: true  },
          { text: "tasteful", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mutable most nearly means",
        keyWord: "Mutable",
        options: [
          { text: "changeable", isCorrect: true  },
          { text: "silent",     isCorrect: false },
          { text: "big-hearted",isCorrect: false },
          { text: "calm",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The way they squandered the money was shameful.",
        keyWord: "squandered",
        options: [
          { text: "gathered", isCorrect: false },
          { text: "stole",    isCorrect: false },
          { text: "wasted",   isCorrect: true  },
          { text: "owned",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The handwriting was nearly illegible.",
        keyWord: "illegible",
        options: [
          { text: "unreadable", isCorrect: true  },
          { text: "unethical",  isCorrect: false },
          { text: "creative",   isCorrect: false },
          { text: "dangerous",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Infinite most nearly means",
        keyWord: "Infinite",
        options: [
          { text: "costly",   isCorrect: false },
          { text: "unending", isCorrect: true  },
          { text: "babyish",  isCorrect: false },
          { text: "daily",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Longevity most nearly means",
        keyWord: "Longevity",
        options: [
          { text: "training", isCorrect: false },
          { text: "duration", isCorrect: true  },
          { text: "girth",    isCorrect: false },
          { text: "lifestyle",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tourists always fall for that ruse.",
        keyWord: "ruse",
        options: [
          { text: "trick",     isCorrect: true  },
          { text: "display",   isCorrect: false },
          { text: "itinerary", isCorrect: false },
          { text: "backtalk",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The president proclaimed it a national holiday.",
        keyWord: "proclaimed",
        options: [
          { text: "suggested", isCorrect: false },
          { text: "renamed",   isCorrect: false },
          { text: "announced", isCorrect: true  },
          { text: "unmade",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Even the most rudimentary details are crucial to understanding this problem.",
        keyWord: "rudimentary",
        options: [
          { text: "basic",    isCorrect: true  },
          { text: "ecstatic", isCorrect: false },
          { text: "illogical",isCorrect: false },
          { text: "fancy",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Rout most nearly means",
        keyWord: "Rout",
        options: [
          { text: "careful", isCorrect: false },
          { text: "defeat",  isCorrect: true  },
          { text: "blatant", isCorrect: false },
          { text: "open",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "His rogue attitude didn’t fit the “team” concept.",
        keyWord: "rogue",
        options: [
          { text: "aggressive", isCorrect: false },
          { text: "sad",        isCorrect: false },
          { text: "rebellious", isCorrect: true  },
          { text: "low-brow",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her point of view didn’t resonate with everyone on the committee.",
        keyWord: "resonate",
        options: [
          { text: "create irritation",   isCorrect: false },
          { text: "display clarity",     isCorrect: false },
          { text: "evoke agreement",     isCorrect: true  },
          { text: "generate discussion", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Duplicating steps is far too redundant at this late stage.",
        keyWord: "redundant",
        options: [
          { text: "repetitive",  isCorrect: true  },
          { text: "upsetting",   isCorrect: false },
          { text: "colorful",    isCorrect: false },
          { text: "wishy-washy", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Far be it from me to prescribe how to raise one’s own children.",
        keyWord: "prescribe",
        options: [
          { text: "predict", isCorrect: false },
          { text: "dictate", isCorrect: true  },
          { text: "judge",   isCorrect: false },
          { text: "decide",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Logical most nearly means",
        keyWord: "Logical",
        options: [
          { text: "cognizant", isCorrect: false },
          { text: "easy",      isCorrect: false },
          { text: "rowdy",     isCorrect: false },
          { text: "sensible",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Prerequisite most nearly means",
        keyWord: "Prerequisite",
        options: [
          { text: "requirement", isCorrect: true  },
          { text: "evaluation",  isCorrect: false },
          { text: "glee",        isCorrect: false },
          { text: "good taste",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It seems that loud people tend to gravitate toward other loud people.",
        keyWord: "gravitate",
        options: [
          { text: "be drawn",      isCorrect: true  },
          { text: "be hostile",    isCorrect: false },
          { text: "be inquisitive",isCorrect: false },
          { text: "be competitive",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The police felt it was best to be cautious when approaching the house.",
        keyWord: "cautious",
        options: [
          { text: "excited",  isCorrect: false },
          { text: "apathetic",isCorrect: false },
          { text: "dodgy",    isCorrect: false },
          { text: "careful",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Braggart most nearly means",
        keyWord: "Braggart",
        options: [
          { text: "clown",   isCorrect: false },
          { text: "leader",  isCorrect: false },
          { text: "boaster", isCorrect: true  },
          { text: "deputy",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Basing his opinions on hearsay doomed the case.",
        keyWord: "hearsay",
        options: [
          { text: "rumor",   isCorrect: true  },
          { text: "samples", isCorrect: false },
          { text: "truth",   isCorrect: false },
          { text: "belief",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Taunt most nearly means",
        keyWord: "Taunt",
        options: [
          { text: "grade",   isCorrect: false },
          { text: "relate",  isCorrect: false },
          { text: "ridicule",isCorrect: true  },
          { text: "party",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Most of our employees respond well to constructive criticism.",
        keyWord: "constructive",
        options: [
          { text: "damaging",   isCorrect: false },
          { text: "productive", isCorrect: true  },
          { text: "gentle",     isCorrect: false },
          { text: "flattering", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Quantifiable most nearly means",
        keyWord: "Quantifiable",
        options: [
          { text: "laughable", isCorrect: false },
          { text: "standard",  isCorrect: false },
          { text: "countable", isCorrect: true  },
          { text: "breakable", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The least effective way of dealing with children is yelling.",
        keyWord: "effective",
        options: [
          { text: "tantalizing", isCorrect: false },
          { text: "creative",    isCorrect: false },
          { text: "useful",      isCorrect: true  },
          { text: "positive",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Apathy most nearly means",
        keyWord: "Apathy",
        options: [
          { text: "greatness", isCorrect: false },
          { text: "laziness",  isCorrect: false },
          { text: "disinterest",isCorrect: true  },
          { text: "boredom",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It left a glaring blemish on his permanent record.",
        keyWord: "blemish",
        options: [
          { text: "impact",      isCorrect: false },
          { text: "defect",      isCorrect: true  },
          { text: "commendation",isCorrect: false },
          { text: "compliment",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It will take a consensus to get this measure passed.",
        keyWord: "consensus",
        options: [
          { text: "agreement", isCorrect: true  },
          { text: "discussion",isCorrect: false },
          { text: "infighting",isCorrect: false },
          { text: "reprimand", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "No coach can handle insubordination from his players for long.",
        keyWord: "insubordination",
        options: [
          { text: "discussion", isCorrect: false },
          { text: "laughter",   isCorrect: false },
          { text: "laziness",   isCorrect: false },
          { text: "dissent",    isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Tempo most nearly means",
        keyWord: "Tempo",
        options: [
          { text: "heartbeat", isCorrect: false },
          { text: "safety",    isCorrect: false },
          { text: "modernity", isCorrect: false },
          { text: "speed",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "She can take solace in the fact that it couldn’t get much worse.",
        keyWord: "solace",
        options: [
          { text: "protection", isCorrect: false },
          { text: "comfort",    isCorrect: true  },
          { text: "glee",       isCorrect: false },
          { text: "depth",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Many pitfalls await the inexperienced climber.",
        keyWord: "pitfalls",
        options: [
          { text: "joys",   isCorrect: false },
          { text: "traps",  isCorrect: true  },
          { text: "ropes",  isCorrect: false },
          { text: "talents",isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 4",
      description: "35 câu Word Knowledge mới",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/35 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 4 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createWordKnowledgeQuiz();