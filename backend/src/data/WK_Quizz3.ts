// wordKnowledgeSeed3.ts
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
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 3" });

    const questions: VocabQuestion[] = [
      {
        questionText: "The abhorrent smell from the lake overpowered the picnickers gathered on the shore.",
        keyWord: "abhorrent",
        options: [
          { text: "strong",      isCorrect: false },
          { text: "pleasant",    isCorrect: false },
          { text: "offensive",   isCorrect: true  },
          { text: "tantalizing", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Belie most nearly means",
        keyWord: "Belie",
        options: [
          { text: "pleasure",     isCorrect: false },
          { text: "rule",         isCorrect: false },
          { text: "pretend",      isCorrect: false },
          { text: "misrepresent", isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "The water was calm that day with detritus slowly moving in the small eddies.",
        keyWord: "detritus",
        options: [
          { text: "fish",     isCorrect: false },
          { text: "lily pads",isCorrect: false },
          { text: "plants",   isCorrect: false },
          { text: "debris",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "The prime minister was always cautious about leaving his redoubt in Belgrade.",
        keyWord: "redoubt",
        options: [
          { text: "city",       isCorrect: false },
          { text: "stronghold", isCorrect: true  },
          { text: "house",      isCorrect: false },
          { text: "country",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mike was afraid he might be ostracized for stepping out of line.",
        keyWord: "ostracized",
        options: [
          { text: "banished",  isCorrect: true  },
          { text: "scolded",   isCorrect: false },
          { text: "assaulted", isCorrect: false },
          { text: "arrested",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The hotel was specifically designed for the wayworn traveler.",
        keyWord: "wayworn",
        options: [
          { text: "lost",      isCorrect: false },
          { text: "weary",     isCorrect: true  },
          { text: "demanding", isCorrect: false },
          { text: "happy",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The park has no showers and no potable water.",
        keyWord: "potable",
        options: [
          { text: "usable",    isCorrect: false },
          { text: "clear",     isCorrect: false },
          { text: "drinkable", isCorrect: true  },
          { text: "tasty",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Decamp most nearly means",
        keyWord: "Decamp",
        options: [
          { text: "to backpack",         isCorrect: false },
          { text: "to leave",            isCorrect: true  },
          { text: "to doubt",            isCorrect: false },
          { text: "to act with abandon", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Glorious most nearly means",
        keyWord: "Glorious",
        options: [
          { text: "splendid",    isCorrect: true  },
          { text: "particular",  isCorrect: false },
          { text: "delayed",     isCorrect: false },
          { text: "contentious", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Duplicity most nearly means",
        keyWord: "Duplicity",
        options: [
          { text: "hyperactivity", isCorrect: false },
          { text: "godlike",       isCorrect: false },
          { text: "deception",     isCorrect: true  },
          { text: "criticalness",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mallet most nearly means",
        keyWord: "Mallet",
        options: [
          { text: "sermon",     isCorrect: false },
          { text: "participate",isCorrect: false },
          { text: "hammer",     isCorrect: true  },
          { text: "fish",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hosiery most nearly means",
        keyWord: "Hosiery",
        options: [
          { text: "dangerous", isCorrect: false },
          { text: "illegal",  isCorrect: false },
          { text: "stocking",  isCorrect: true  },
          { text: "automatic", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hale most nearly means",
        keyWord: "Hale",
        options: [
          { text: "old",        isCorrect: false },
          { text: "healthy",    isCorrect: true  },
          { text: "customary",  isCorrect: false },
          { text: "uninformed", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Magnitude most nearly means",
        keyWord: "Magnitude",
        options: [
          { text: "importance", isCorrect: true  },
          { text: "peculiar",   isCorrect: false },
          { text: "alone",      isCorrect: false },
          { text: "tantamount", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "His vapid presentation earned him a C in the class.",
        keyWord: "vapid",
        options: [
          { text: "difficult",   isCorrect: false },
          { text: "plagiarized", isCorrect: false },
          { text: "dull",        isCorrect: true  },
          { text: "polished",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Percival was unpopular at the meeting because he imparted so much extraneous data.",
        keyWord: "extraneous",
        options: [
          { text: "extensive",   isCorrect: false },
          { text: "unwelcome",   isCorrect: false },
          { text: "superfluous", isCorrect: true  },
          { text: "radical",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "She was often solicitous of her father’s feelings.",
        keyWord: "solicitous",
        options: [
          { text: "careful",   isCorrect: true  },
          { text: "ignorant",  isCorrect: false },
          { text: "forgetful", isCorrect: false },
          { text: "abusive",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "I could never get over her liquid blue, limpid eyes.",
        keyWord: "limpid",
        options: [
          { text: "bright",    isCorrect: false },
          { text: "clear",     isCorrect: true  },
          { text: "attentive", isCorrect: false },
          { text: "dull",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The goal of the treaty is to develop international amity and reciprocal trade.",
        keyWord: "amity",
        options: [
          { text: "agreement",   isCorrect: false },
          { text: "friendship",  isCorrect: true  },
          { text: "standards",   isCorrect: false },
          { text: "understanding", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He often bragged about the bravery of his favorite cohort.",
        keyWord: "cohort",
        options: [
          { text: "person",    isCorrect: false },
          { text: "teacher",   isCorrect: false },
          { text: "companion", isCorrect: true  },
          { text: "employee",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Speechless most nearly means",
        keyWord: "Speechless",
        options: [
          { text: "well-spoken", isCorrect: false },
          { text: "silent",      isCorrect: true  },
          { text: "restless",    isCorrect: false },
          { text: "talkative",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Indigenous most nearly means",
        keyWord: "Indigenous",
        options: [
          { text: "poor",      isCorrect: false },
          { text: "rich",      isCorrect: false },
          { text: "immigrant", isCorrect: false },
          { text: "native",    isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Illusive most nearly means",
        keyWord: "Illusive",
        options: [
          { text: "insignificant", isCorrect: false },
          { text: "deceptive",     isCorrect: true  },
          { text: "useful",        isCorrect: false },
          { text: "hidden",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hesitate most nearly means",
        keyWord: "Hesitate",
        options: [
          { text: "slam",        isCorrect: false },
          { text: "slow to act", isCorrect: true  },
          { text: "foreclose",   isCorrect: false },
          { text: "end",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Gravity most nearly means",
        keyWord: "Gravity",
        options: [
          { text: "planet",      isCorrect: false },
          { text: "relationship",isCorrect: false },
          { text: "earn",        isCorrect: false },
          { text: "seriousness", isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Fondle most nearly means",
        keyWord: "Fondle",
        options: [
          { text: "stir",   isCorrect: false },
          { text: "handle", isCorrect: true  },
          { text: "ogle",   isCorrect: false },
          { text: "radiate",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fete most nearly means",
        keyWord: "Fete",
        options: [
          { text: "festival",  isCorrect: true  },
          { text: "criticize", isCorrect: false },
          { text: "approve",   isCorrect: false },
          { text: "eat",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Encore most nearly means",
        keyWord: "Encore",
        options: [
          { text: "play",      isCorrect: false },
          { text: "applause",  isCorrect: false },
          { text: "repetition",isCorrect: true  },
          { text: "excite",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Diverse most nearly means",
        keyWord: "Diverse",
        options: [
          { text: "various", isCorrect: true  },
          { text: "hidden",  isCorrect: false },
          { text: "nestled", isCorrect: false },
          { text: "pastime", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Detest most nearly means",
        keyWord: "Detest",
        options: [
          { text: "anger",   isCorrect: false },
          { text: "hate",    isCorrect: true  },
          { text: "surprise",isCorrect: false },
          { text: "excite",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mike was known as a smart aleck, able to deliver acerbic one-liners with no effort.",
        keyWord: "acerbic",
        options: [
          { text: "funny",  isCorrect: false },
          { text: "cheap",  isCorrect: false },
          { text: "sharp",  isCorrect: true  },
          { text: "poetic", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It took a great degree of inexorable force to break into the cavern.",
        keyWord: "inexorable",
        options: [
          { text: "strong",     isCorrect: false },
          { text: "unyielding", isCorrect: true  },
          { text: "acute",      isCorrect: false },
          { text: "powerful",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Attendants were stationed at intervals, with the obvious intent to hector those who moved too slowly.",
        keyWord: "hector",
        options: [
          { text: "hurry",     isCorrect: false },
          { text: "harass",    isCorrect: true  },
          { text: "encourage", isCorrect: false },
          { text: "note",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Reggie was as gauche in this group of polite company as he always had been.",
        keyWord: "gauche",
        options: [
          { text: "funny",        isCorrect: false },
          { text: "entertaining", isCorrect: false },
          { text: "tactless",     isCorrect: true  },
          { text: "embarrassed",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Confident most nearly means",
        keyWord: "Confident",
        options: [
          { text: "assured",    isCorrect: true  },
          { text: "positive",   isCorrect: false },
          { text: "intelligent",isCorrect: false },
          { text: "educated",   isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 3",
      description: "35 câu Word Knowledge nâng cao",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/35 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 3 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createWordKnowledgeQuiz();