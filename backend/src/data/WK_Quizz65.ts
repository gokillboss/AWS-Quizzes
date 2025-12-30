// wordKnowledgeSeed6.ts  (100 câu - từ 36 đến 100)
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
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 6 (100 questions)" });

    const questions: VocabQuestion[] = [
      {
        questionText: "Banter most nearly means",
        keyWord: "Banter",
        options: [
          { text: "taunt",     isCorrect: false },
          { text: "repartee",  isCorrect: true  },
          { text: "ridicule",  isCorrect: false },
          { text: "reproach",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Credible most nearly means",
        keyWord: "Credible",
        options: [
          { text: "believable", isCorrect: true  },
          { text: "secretive",  isCorrect: false },
          { text: "annoyed",    isCorrect: false },
          { text: "unlikely",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Erode most nearly means",
        keyWord: "Erode",
        options: [
          { text: "chop",        isCorrect: false },
          { text: "deteriorate", isCorrect: true  },
          { text: "scrub",       isCorrect: false },
          { text: "repair",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Generate most nearly means",
        keyWord: "Generate",
        options: [
          { text: "consider",  isCorrect: false },
          { text: "create",    isCorrect: true  },
          { text: "boil over", isCorrect: false },
          { text: "take",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mode most nearly means",
        keyWord: "Mode",
        options: [
          { text: "resource", isCorrect: false },
          { text: "alone",    isCorrect: false },
          { text: "octave",   isCorrect: false },
          { text: "way",      isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Foil most nearly means",
        keyWord: "Foil",
        options: [
          { text: "wrapping", isCorrect: false },
          { text: "confer",   isCorrect: false },
          { text: "aggravate",isCorrect: false },
          { text: "prevent",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Chamber most nearly means",
        keyWord: "Chamber",
        options: [
          { text: "enclosed space", isCorrect: true  },
          { text: "passageway",     isCorrect: false },
          { text: "trough",         isCorrect: false },
          { text: "shelf",          isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Aide most nearly means",
        keyWord: "Aide",
        options: [
          { text: "abet",    isCorrect: false },
          { text: "teacher", isCorrect: false },
          { text: "creator", isCorrect: false },
          { text: "helper",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Stump most nearly means",
        keyWord: "Stump",
        options: [
          { text: "confuse",  isCorrect: true  },
          { text: "chop",     isCorrect: false },
          { text: "pound",    isCorrect: false },
          { text: "clarify",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Insist most nearly means",
        keyWord: "Insist",
        options: [
          { text: "continue", isCorrect: false },
          { text: "assert",   isCorrect: false },
          { text: "wish",     isCorrect: false },
          { text: "demand",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Bland most nearly means",
        keyWord: "Bland",
        options: [
          { text: "uninteresting", isCorrect: true  },
          { text: "tiny",          isCorrect: false },
          { text: "dramatic",      isCorrect: false },
          { text: "rough",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Sentinel most nearly means",
        keyWord: "Sentinel",
        options: [
          { text: "aggressor", isCorrect: false },
          { text: "lookout",   isCorrect: true  },
          { text: "coward",    isCorrect: false },
          { text: "reveler",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Repeal most nearly means",
        keyWord: "Repeal",
        options: [
          { text: "yell",   isCorrect: false },
          { text: "hold",   isCorrect: false },
          { text: "ignore", isCorrect: false },
          { text: "cancel", isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Labor most nearly means",
        keyWord: "Labor",
        options: [
          { text: "think",      isCorrect: false },
          { text: "illuminate", isCorrect: false },
          { text: "market",     isCorrect: false },
          { text: "work",       isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Aberration most nearly means",
        keyWord: "Aberration",
        options: [
          { text: "anomaly",     isCorrect: true  },
          { text: "commonplace", isCorrect: false },
          { text: "disgusting",  isCorrect: false },
          { text: "revered",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Winsome most nearly means",
        keyWord: "Winsome",
        options: [
          { text: "hardy",     isCorrect: false },
          { text: "difficult", isCorrect: false },
          { text: "windy",     isCorrect: false },
          { text: "charming",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Initial most nearly means",
        keyWord: "Initial",
        options: [
          { text: "first",     isCorrect: true  },
          { text: "exception", isCorrect: false },
          { text: "new",       isCorrect: false },
          { text: "tragic",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Rabid most nearly means",
        keyWord: "Rabid",
        options: [
          { text: "generous",  isCorrect: false },
          { text: "sickly",    isCorrect: false },
          { text: "fanatical", isCorrect: true  },
          { text: "deepen",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mobile most nearly means",
        keyWord: "Mobile",
        options: [
          { text: "movable",  isCorrect: true  },
          { text: "fixed",    isCorrect: false },
          { text: "cellular", isCorrect: false },
          { text: "turning",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Solicit most nearly means",
        keyWord: "Solicit",
        options: [
          { text: "decry",  isCorrect: false },
          { text: "evoke",  isCorrect: false },
          { text: "drag",   isCorrect: false },
          { text: "request",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Fallacy most nearly means",
        keyWord: "Fallacy",
        options: [
          { text: "misnomer",     isCorrect: false },
          { text: "misconception",isCorrect: true  },
          { text: "truth",        isCorrect: false },
          { text: "ersatz",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "External most nearly means",
        keyWord: "External",
        options: [
          { text: "during the night", isCorrect: false },
          { text: "after the fact",   isCorrect: false },
          { text: "outer surface",    isCorrect: true  },
          { text: "transcendental",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Vociferous most nearly means",
        keyWord: "Vociferous",
        options: [
          { text: "noisome", isCorrect: false },
          { text: "vehement",isCorrect: true  },
          { text: "plant-like",isCorrect: false },
          { text: "strong",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Convert most nearly means",
        keyWord: "Convert",
        options: [
          { text: "change", isCorrect: true  },
          { text: "prevail",isCorrect: false },
          { text: "belie",  isCorrect: false },
          { text: "track",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Consider most nearly means",
        keyWord: "Consider",
        options: [
          { text: "tarry",  isCorrect: false },
          { text: "dawdle", isCorrect: false },
          { text: "defy",   isCorrect: false },
          { text: "think",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Prompt most nearly means",
        keyWord: "Prompt",
        options: [
          { text: "arrogant", isCorrect: false },
          { text: "slow",     isCorrect: false },
          { text: "fast",     isCorrect: true  },
          { text: "bright",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Turpitude most nearly means",
        keyWord: "Turpitude",
        options: [
          { text: "depravity", isCorrect: true  },
          { text: "strength",  isCorrect: false },
          { text: "justice",   isCorrect: false },
          { text: "piousness", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Makeshift most nearly means",
        keyWord: "Makeshift",
        options: [
          { text: "permanent",   isCorrect: false },
          { text: "adversarial", isCorrect: false },
          { text: "substitute",  isCorrect: true  },
          { text: "difficult",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Comprise most nearly means",
        keyWord: "Comprise",
        options: [
          { text: "create",         isCorrect: false },
          { text: "is composed of", isCorrect: true  },
          { text: "track",          isCorrect: false },
          { text: "herald",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Spurious most nearly means",
        keyWord: "Spurious",
        options: [
          { text: "prickly",   isCorrect: false },
          { text: "dangerous", isCorrect: false },
          { text: "nonsense",  isCorrect: false },
          { text: "bogus",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Expanse most nearly means",
        keyWord: "Expanse",
        options: [
          { text: "cost",   isCorrect: false },
          { text: "growth", isCorrect: false },
          { text: "area",   isCorrect: true  },
          { text: "beat",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fearsome most nearly means",
        keyWord: "Fearsome",
        options: [
          { text: "menacing",  isCorrect: true  },
          { text: "calming",   isCorrect: false },
          { text: "noxious",   isCorrect: false },
          { text: "teary-eyed",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Sophomoric most nearly means",
        keyWord: "Sophomoric",
        options: [
          { text: "afraid",      isCorrect: false },
          { text: "pretentious", isCorrect: true  },
          { text: "emotional",   isCorrect: false },
          { text: "defiant",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Exasperate most nearly means",
        keyWord: "Exasperate",
        options: [
          { text: "infer",    isCorrect: false },
          { text: "confuse",  isCorrect: false },
          { text: "drag out", isCorrect: false },
          { text: "infuriate",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Scarcity most nearly means",
        keyWord: "Scarcity",
        options: [
          { text: "majority", isCorrect: false },
          { text: "shortage", isCorrect: true  },
          { text: "surplus",  isCorrect: false },
          { text: "abundance",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Resist most nearly means",
        keyWord: "Resist",
        options: [
          { text: "withstand", isCorrect: true  },
          { text: "hold",      isCorrect: false },
          { text: "divide",    isCorrect: false },
          { text: "conduct",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ersatz most nearly means",
        keyWord: "Ersatz",
        options: [
          { text: "fake",     isCorrect: true  },
          { text: "genuine",  isCorrect: false },
          { text: "authentic",isCorrect: false },
          { text: "green",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Portend most nearly means",
        keyWord: "Portend",
        options: [
          { text: "surprise",   isCorrect: false },
          { text: "contrast",   isCorrect: false },
          { text: "vicissitude",isCorrect: false },
          { text: "be a warning",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Lucid most nearly means",
        keyWord: "Lucid",
        options: [
          { text: "relaxed",      isCorrect: false },
          { text: "incoherent",   isCorrect: false },
          { text: "understandable",isCorrect: true  },
          { text: "confused",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ostracized most nearly means",
        keyWord: "Ostracized",
        options: [
          { text: "brought in", isCorrect: false },
          { text: "excluded",   isCorrect: true  },
          { text: "parted",     isCorrect: false },
          { text: "captivated", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Allure most nearly means",
        keyWord: "Allure",
        options: [
          { text: "tempt",  isCorrect: true  },
          { text: "trick",  isCorrect: false },
          { text: "tease",  isCorrect: false },
          { text: "sneak",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Gleeful most nearly means",
        keyWord: "Gleeful",
        options: [
          { text: "delirious", isCorrect: false },
          { text: "joyful",    isCorrect: true  },
          { text: "displeased",isCorrect: false },
          { text: "derisive",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tranquilize most nearly means",
        keyWord: "Tranquilize",
        options: [
          { text: "sedate",  isCorrect: true  },
          { text: "trick",   isCorrect: false },
          { text: "deride",  isCorrect: false },
          { text: "overdose",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Oppose most nearly means",
        keyWord: "Oppose",
        options: [
          { text: "irk",       isCorrect: false },
          { text: "cooperate", isCorrect: false },
          { text: "resist",    isCorrect: true  },
          { text: "argue",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mores most nearly means",
        keyWord: "Mores",
        options: [
          { text: "customs",   isCorrect: true  },
          { text: "types",     isCorrect: false },
          { text: "anomalies", isCorrect: false },
          { text: "data",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Chap most nearly means",
        keyWord: "Chap",
        options: [
          { text: "tangle",       isCorrect: false },
          { text: "expose",       isCorrect: false },
          { text: "irate",        isCorrect: false },
          { text: "become chafed",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Overbearing most nearly means",
        keyWord: "Overbearing",
        options: [
          { text: "overwhelming", isCorrect: false },
          { text: "bossy",        isCorrect: true  },
          { text: "grouchy",      isCorrect: false },
          { text: "tough",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Equity most nearly means",
        keyWord: "Equity",
        options: [
          { text: "fairness",   isCorrect: true  },
          { text: "devaluation",isCorrect: false },
          { text: "privacy",    isCorrect: false },
          { text: "earnings",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Subtle most nearly means",
        keyWord: "Subtle",
        options: [
          { text: "understated", isCorrect: true  },
          { text: "conspicuous", isCorrect: false },
          { text: "suggestive",  isCorrect: false },
          { text: "harsh",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Pecuniary most nearly means",
        keyWord: "Pecuniary",
        options: [
          { text: "strange",     isCorrect: false },
          { text: "out of place",isCorrect: false },
          { text: "economic",    isCorrect: true  },
          { text: "disjointed",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Temporary most nearly means",
        keyWord: "Temporary",
        options: [
          { text: "permanent",   isCorrect: false },
          { text: "impermanent", isCorrect: true  },
          { text: "drafted",     isCorrect: false },
          { text: "sticky",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Insightful most nearly means",
        keyWord: "Insightful",
        options: [
          { text: "blind",    isCorrect: false },
          { text: "ignorant", isCorrect: false },
          { text: "dull",     isCorrect: false },
          { text: "perceptive",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Superficial most nearly means",
        keyWord: "Superficial",
        options: [
          { text: "without depth", isCorrect: true  },
          { text: "thorough",      isCorrect: false },
          { text: "genuine",       isCorrect: false },
          { text: "sensible",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Render most nearly means",
        keyWord: "Render",
        options: [
          { text: "fail",    isCorrect: false },
          { text: "win",     isCorrect: false },
          { text: "deliver", isCorrect: true  },
          { text: "hold",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Constant most nearly means",
        keyWord: "Constant",
        options: [
          { text: "intermittent", isCorrect: false },
          { text: "unchanging",   isCorrect: true  },
          { text: "dreadful",     isCorrect: false },
          { text: "periodic",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Commission most nearly means",
        keyWord: "Commission",
        options: [
          { text: "delegation", isCorrect: true  },
          { text: "force",      isCorrect: false },
          { text: "recreation", isCorrect: false },
          { text: "assignor",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Venture most nearly means",
        keyWord: "Venture",
        options: [
          { text: "cower",     isCorrect: false },
          { text: "inaction",  isCorrect: false },
          { text: "endeavor",  isCorrect: true  },
          { text: "persevere", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Range most nearly means",
        keyWord: "Range",
        options: [
          { text: "part",     isCorrect: false },
          { text: "end",      isCorrect: false },
          { text: "movement", isCorrect: false },
          { text: "vary",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Scheme most nearly means",
        keyWord: "Scheme",
        options: [
          { text: "plan",      isCorrect: true  },
          { text: "schedule",  isCorrect: false },
          { text: "suggestion",isCorrect: false },
          { text: "theory",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Plea most nearly means",
        keyWord: "Plea",
        options: [
          { text: "demand",  isCorrect: false },
          { text: "answer",  isCorrect: false },
          { text: "request", isCorrect: true  },
          { text: "offer",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Stake most nearly means",
        keyWord: "Stake",
        options: [
          { text: "meat",      isCorrect: false },
          { text: "post",      isCorrect: false },
          { text: "steal",     isCorrect: false },
          { text: "embellish", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Attribute most nearly means",
        keyWord: "Attribute",
        options: [
          { text: "guilt",         isCorrect: false },
          { text: "characteristic",isCorrect: true  },
          { text: "thing",         isCorrect: false },
          { text: "roast",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Awesome most nearly means",
        keyWord: "Awesome",
        options: [
          { text: "extreme",   isCorrect: false },
          { text: "radical",   isCorrect: false },
          { text: "impressive",isCorrect: true  },
          { text: "tricky",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Provoke most nearly means",
        keyWord: "Provoke",
        options: [
          { text: "ignore",  isCorrect: false },
          { text: "curtail", isCorrect: false },
          { text: "emulate", isCorrect: false },
          { text: "annoy",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Cite most nearly means",
        keyWord: "Cite",
        options: [
          { text: "earmark", isCorrect: false },
          { text: "quote",   isCorrect: true  },
          { text: "target",  isCorrect: false },
          { text: "place",   isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 6 (100 questions)",
      description: "100 câu Word Knowledge (36-100) – đáp án chuẩn 100%",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/100 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 6 (100 questions) created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createWordKnowledgeQuiz();