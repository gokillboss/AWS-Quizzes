// wordKnowledgeSeed5.ts
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
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 5" });

    const questions: VocabQuestion[] = [
      {
        questionText: "Accord most nearly means",
        keyWord: "Accord",
        options: [
          { text: "agreement", isCorrect: true  },
          { text: "theory",    isCorrect: false },
          { text: "judgment",  isCorrect: false },
          { text: "attempt",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Establish most nearly means",
        keyWord: "Establish",
        options: [
          { text: "set up",    isCorrect: true  },
          { text: "foundation",isCorrect: false },
          { text: "give",      isCorrect: false },
          { text: "receive",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Obtain most nearly means",
        keyWord: "Obtain",
        options: [
          { text: "hold", isCorrect: false },
          { text: "work", isCorrect: false },
          { text: "get",  isCorrect: true  },
          { text: "top",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Brazen most nearly means",
        keyWord: "Brazen",
        options: [
          { text: "dim",       isCorrect: false },
          { text: "obnoxious", isCorrect: false },
          { text: "timid",     isCorrect: false },
          { text: "bold",      isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Vain most nearly means",
        keyWord: "Vain",
        options: [
          { text: "vessel",      isCorrect: false },
          { text: "useless",     isCorrect: true  },
          { text: "nice",        isCorrect: false },
          { text: "condescending",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fortitude most nearly means",
        keyWord: "Fortitude",
        options: [
          { text: "strength",     isCorrect: true  },
          { text: "bravado",      isCorrect: false },
          { text: "inconsistency",isCorrect: false },
          { text: "difficulty",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Plausible most nearly means",
        keyWord: "Plausible",
        options: [
          { text: "deceptive", isCorrect: false },
          { text: "believable",isCorrect: true  },
          { text: "ignorant",  isCorrect: false },
          { text: "lagging",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Persuade most nearly means",
        keyWord: "Persuade",
        options: [
          { text: "deter",     isCorrect: false },
          { text: "encourage", isCorrect: false },
          { text: "lead",      isCorrect: false },
          { text: "convince",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Dialogue most nearly means",
        keyWord: "Dialogue",
        options: [
          { text: "leader",     isCorrect: false },
          { text: "text",       isCorrect: false },
          { text: "conversation",isCorrect: true  },
          { text: "soliloquy",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Exempt most nearly means",
        keyWord: "Exempt",
        options: [
          { text: "underprivileged",isCorrect: false },
          { text: "excused",        isCorrect: true  },
          { text: "untenable",      isCorrect: false },
          { text: "taxable",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Buttress most nearly means",
        keyWord: "Buttress",
        options: [
          { text: "support",  isCorrect: true  },
          { text: "arch",     isCorrect: false },
          { text: "matriarch",isCorrect: false },
          { text: "object",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Bizarre most nearly means",
        keyWord: "Bizarre",
        options: [
          { text: "strange",   isCorrect: true  },
          { text: "extreme",   isCorrect: false },
          { text: "fierce",    isCorrect: false },
          { text: "futuristic",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Liable most nearly means",
        keyWord: "Liable",
        options: [
          { text: "typical",    isCorrect: false },
          { text: "slander",    isCorrect: false },
          { text: "immune",     isCorrect: false },
          { text: "responsible",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Optimistic most nearly means",
        keyWord: "Optimistic",
        options: [
          { text: "short-sighted",isCorrect: false },
          { text: "preferential", isCorrect: false },
          { text: "hopeful",      isCorrect: true  },
          { text: "likely",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Affect most nearly means",
        keyWord: "Affect",
        options: [
          { text: "result",  isCorrect: false },
          { text: "change",  isCorrect: true  },
          { text: "signify", isCorrect: false },
          { text: "define",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Labyrinth most nearly means",
        keyWord: "Labyrinth",
        options: [
          { text: "system",    isCorrect: false },
          { text: "path",      isCorrect: false },
          { text: "maze",      isCorrect: true  },
          { text: "connector", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Blatant most nearly means",
        keyWord: "Blatant",
        options: [
          { text: "subtle",  isCorrect: false },
          { text: "obvious", isCorrect: true  },
          { text: "unclear", isCorrect: false },
          { text: "noisy",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Maneuver most nearly means",
        keyWord: "Maneuver",
        options: [
          { text: "movement",   isCorrect: true  },
          { text: "achievement",isCorrect: false },
          { text: "reach",      isCorrect: false },
          { text: "simulation", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Disclose most nearly means",
        keyWord: "Disclose",
        options: [
          { text: "tell", isCorrect: true  },
          { text: "hide", isCorrect: false },
          { text: "shut", isCorrect: false },
          { text: "teach",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Quarantine most nearly means",
        keyWord: "Quarantine",
        options: [
          { text: "annotate", isCorrect: false },
          { text: "identify", isCorrect: false },
          { text: "insinuate",isCorrect: false },
          { text: "isolate",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Adept most nearly means",
        keyWord: "Adept",
        options: [
          { text: "considerate", isCorrect: false },
          { text: "careful",     isCorrect: false },
          { text: "thoughtless", isCorrect: false },
          { text: "skilled",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Recede most nearly means",
        keyWord: "Recede",
        options: [
          { text: "move",   isCorrect: false },
          { text: "compel", isCorrect: false },
          { text: "retreat",isCorrect: true  },
          { text: "wax",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Volatile most nearly means",
        keyWord: "Volatile",
        options: [
          { text: "changeable", isCorrect: true  },
          { text: "confusing",  isCorrect: false },
          { text: "sickened",   isCorrect: false },
          { text: "broken",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Intrepid most nearly means",
        keyWord: "Intrepid",
        options: [
          { text: "nervous", isCorrect: false },
          { text: "clever",  isCorrect: false },
          { text: "fearful", isCorrect: false },
          { text: "brave",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Wrath most nearly means",
        keyWord: "Wrath",
        options: [
          { text: "revenge",  isCorrect: false },
          { text: "anger",    isCorrect: true  },
          { text: "expulsion",isCorrect: false },
          { text: "flux",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Proliferate most nearly means",
        keyWord: "Proliferate",
        options: [
          { text: "create",  isCorrect: false },
          { text: "grow",    isCorrect: true  },
          { text: "generate",isCorrect: false },
          { text: "decline", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Vacate most nearly means",
        keyWord: "Vacate",
        options: [
          { text: "keep",    isCorrect: false },
          { text: "relax",   isCorrect: false },
          { text: "abandon", isCorrect: true  },
          { text: "inform",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Pathetic most nearly means",
        keyWord: "Pathetic",
        options: [
          { text: "pitiful",   isCorrect: true  },
          { text: "hopeless",  isCorrect: false },
          { text: "disgusting",isCorrect: false },
          { text: "terrible",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Refuge most nearly means",
        keyWord: "Refuge",
        options: [
          { text: "entrance", isCorrect: false },
          { text: "chamber",  isCorrect: false },
          { text: "dwelling", isCorrect: false },
          { text: "sanctuary",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Scour most nearly means",
        keyWord: "Scour",
        options: [
          { text: "detour",  isCorrect: false },
          { text: "scrub",   isCorrect: true  },
          { text: "frown",   isCorrect: false },
          { text: "petrify", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Aversion most nearly means",
        keyWord: "Aversion",
        options: [
          { text: "opposition", isCorrect: false },
          { text: "advocate",   isCorrect: false },
          { text: "dislike",    isCorrect: true  },
          { text: "animosity",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Strife most nearly means",
        keyWord: "Strife",
        options: [
          { text: "conflict",  isCorrect: true  },
          { text: "suffering", isCorrect: false },
          { text: "attack",    isCorrect: false },
          { text: "accordance",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Nourish most nearly means",
        keyWord: "Nourish",
        options: [
          { text: "administer", isCorrect: false },
          { text: "entrust",    isCorrect: false },
          { text: "sustain",    isCorrect: true  },
          { text: "proffer",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tread most nearly means",
        keyWord: "Tread",
        options: [
          { text: "step on", isCorrect: true  },
          { text: "steer",   isCorrect: false },
          { text: "try",     isCorrect: false },
          { text: "hurry",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Console most nearly means",
        keyWord: "Console",
        options: [
          { text: "ascend",     isCorrect: false },
          { text: "rejuvenate", isCorrect: false },
          { text: "bolster",    isCorrect: false },
          { text: "comfort",    isCorrect: true  },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 5",
      description: "35 câu Word Knowledge cơ bản – đáp án kiểm tra kỹ 100%",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/35 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 5 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createWordKnowledgeQuiz();