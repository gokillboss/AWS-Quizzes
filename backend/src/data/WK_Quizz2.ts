// wordKnowledgeSeed2-final.ts
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
    // Xóa quiz cũ nếu có
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 2" });

    const questions: VocabQuestion[] = [
      {
        questionText: "Lackadaisical most nearly means",
        keyWord: "Lackadaisical",
        options: [
          { text: "flowerless", isCorrect: false },
          { text: "listless",     isCorrect: true  },
          { text: "promiscuous", isCorrect: false },
          { text: "suitable",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The fruit was edible.",
        keyWord: "edible",
        options: [
          { text: "waxy",       isCorrect: false },
          { text: "expensive",  isCorrect: false },
          { text: "foreign",   isCorrect: false },
          { text: "digestible", isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Universities and colleges should be designed to cater to the philomaths.",
        keyWord: "philomaths",
        options: [
          { text: "athletes", isCorrect: false },
          { text: "scholars", isCorrect: true  },
          { text: "teachers", isCorrect: false },
          { text: "faculty",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Pretense most nearly means",
        keyWord: "Pretense",
        options: [
          { text: "politeness",  isCorrect: false },
          { text: "dishonesty",  isCorrect: true  },
          { text: "stress",      isCorrect: false },
          { text: "appearance",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "At an early age Jane showed a proclivity for music and dancing.",
        keyWord: "proclivity",
        options: [
          { text: "predisposition", isCorrect: true  },
          { text: "interest",       isCorrect: false },
          { text: "dislike",        isCorrect: false },
          { text: "fever",          isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her conversation was incoherent.",
        keyWord: "incoherent",
        options: [
          { text: "eloquent",      isCorrect: false },
          { text: "succinct",      isCorrect: false },
          { text: "unintelligible",isCorrect: true  },
          { text: "amusing",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The week following Joe DiMaggio’s death was filled with often mawkish eulogies.",
        keyWord: "mawkish",
        options: [
          { text: "long",       isCorrect: false },
          { text: "sentimental",isCorrect: true  },
          { text: "boring",     isCorrect: false },
          { text: "detailed",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "She established proof.",
        keyWord: "established",
        options: [
          { text: "offered",     isCorrect: false },
          { text: "invented",    isCorrect: false },
          { text: "demanded",    isCorrect: false },
          { text: "demonstrated",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Ephemeral most nearly means",
        keyWord: "Ephemeral",
        options: [
          { text: "short-lived", isCorrect: true  },
          { text: "mythical",    isCorrect: false },
          { text: "dead",        isCorrect: false },
          { text: "exceptional", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Avocation most nearly means",
        keyWord: "Avocation",
        options: [
          { text: "hobby",      isCorrect: true  },
          { text: "occupation", isCorrect: false },
          { text: "vacation",   isCorrect: false },
          { text: "education",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Kvetch most nearly means",
        keyWord: "Kvetch",
        options: [
          { text: "assert",   isCorrect: false },
          { text: "yell",     isCorrect: false },
          { text: "complain", isCorrect: true  },
          { text: "argue",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her eyesight was acute.",
        keyWord: "acute",
        options: [
          { text: "sharp",    isCorrect: true  },
          { text: "poor",     isCorrect: false },
          { text: "unusual",  isCorrect: false },
          { text: "tested",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Inamorata most nearly means",
        keyWord: "Inamorata",
        options: [
          { text: "boyfriend",   isCorrect: false },
          { text: "mistress",    isCorrect: true  },
          { text: "best friend", isCorrect: false },
          { text: "acquaintance",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her thoughts on the matter were inconsequential.",
        keyWord: "inconsequential",
        options: [
          { text: "profound",   isCorrect: false },
          { text: "disturbing", isCorrect: false },
          { text: "irrelevant", isCorrect: true  },
          { text: "confused",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Debouch most nearly means",
        keyWord: "Debouch",
        options: [
          { text: "emerge",  isCorrect: true  },
          { text: "fight",   isCorrect: false },
          { text: "relax",   isCorrect: false },
          { text: "capture", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He was an amateur astronomer.",
        keyWord: "amateur",
        options: [
          { text: "veteran",   isCorrect: false },
          { text: "novice",    isCorrect: true  },
          { text: "interested",isCorrect: false },
          { text: "pleased",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "She had no idea how to react to her ludic boyfriend.",
        keyWord: "ludic",
        options: [
          { text: "playful",  isCorrect: true  },
          { text: "cheating", isCorrect: false },
          { text: "crazy",    isCorrect: false },
          { text: "lazy",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The rose was crimson.",
        keyWord: "crimson",
        options: [
          { text: "blooming", isCorrect: false },
          { text: "colorful", isCorrect: false },
          { text: "fragrant", isCorrect: false },
          { text: "red",      isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "The word most opposite in meaning to benison is",
        keyWord: "benison",
        options: [
          { text: "theft",       isCorrect: false },
          { text: "replaceable", isCorrect: false },
          { text: "curse",       isCorrect: true  },
          { text: "heavy",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "She was exempt from gym class.",
        keyWord: "exempt",
        options: [
          { text: "banned",    isCorrect: false },
          { text: "excused",   isCorrect: true  },
          { text: "tired",     isCorrect: false },
          { text: "refreshed", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The eldritch light of the desert can play tricks on your eyes.",
        keyWord: "eldritch",
        options: [
          { text: "bright",   isCorrect: false },
          { text: "wavering", isCorrect: false },
          { text: "strange",  isCorrect: true  },
          { text: "yellow",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Defective most nearly means",
        keyWord: "Defective",
        options: [
          { text: "flawed",     isCorrect: true  },
          { text: "noticeable", isCorrect: false },
          { text: "rare",       isCorrect: false },
          { text: "durable",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Allot most nearly means",
        keyWord: "Allot",
        options: [
          { text: "plow",     isCorrect: false },
          { text: "assign",   isCorrect: true  },
          { text: "property", isCorrect: false },
          { text: "test",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The doctor gave the patient a cursory examination.",
        keyWord: "cursory",
        options: [
          { text: "in-depth",     isCorrect: false },
          { text: "painful",      isCorrect: false },
          { text: "unnecessary",  isCorrect: false },
          { text: "superficial",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Arcanum most nearly means",
        keyWord: "Arcanum",
        options: [
          { text: "rare",     isCorrect: false },
          { text: "secret",   isCorrect: true  },
          { text: "tangible", isCorrect: false },
          { text: "false",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Her answer was terse.",
        keyWord: "terse",
        options: [
          { text: "defensive", isCorrect: false },
          { text: "angry",     isCorrect: false },
          { text: "lengthy",   isCorrect: false },
          { text: "brief",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "The dulcet songs of the band got the attention of the audience.",
        keyWord: "dulcet",
        options: [
          { text: "harmonious", isCorrect: false },
          { text: "love",       isCorrect: false },
          { text: "jazzy",      isCorrect: false },
          { text: "pleasant",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "He was arrested on a misdemeanor charge.",
        keyWord: "misdemeanor",
        options: [
          { text: "theft",       isCorrect: false },
          { text: "serious",     isCorrect: false },
          { text: "petty crime", isCorrect: true  },
          { text: "bogus",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Embonpoint most nearly means",
        keyWord: "Embonpoint",
        options: [
          { text: "plumpness", isCorrect: true  },
          { text: "height",    isCorrect: false },
          { text: "quickness", isCorrect: false },
          { text: "cold",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He concocted a story about me.",
        keyWord: "concocted",
        options: [
          { text: "told",       isCorrect: false },
          { text: "rehearsed",  isCorrect: false },
          { text: "invented",   isCorrect: true  },
          { text: "remembered", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "He spent his days searching fruitlessly for that chimera, his true self.",
        keyWord: "chimera",
        options: [
          { text: "personality", isCorrect: false },
          { text: "enigma",      isCorrect: false },
          { text: "talent",      isCorrect: false },
          { text: "illusion",    isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Her former home was in Colorado.",
        keyWord: "former",
        options: [
          { text: "previous",  isCorrect: true  },
          { text: "current",   isCorrect: false },
          { text: "second",    isCorrect: false },
          { text: "abandoned", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mulct most nearly means",
        keyWord: "Mulct",
        options: [
          { text: "complain", isCorrect: false },
          { text: "play",     isCorrect: false },
          { text: "work",     isCorrect: false },
          { text: "fleece",    isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "My voice is strident.",
        keyWord: "strident",
        options: [
          { text: "soft",      isCorrect: false },
          { text: "melodious", isCorrect: false },
          { text: "harsh",     isCorrect: true  },
          { text: "baritone",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Raffish most nearly means",
        keyWord: "Raffish",
        options: [
          { text: "clean",   isCorrect: false },
          { text: "serene",  isCorrect: false },
          { text: "tawdry",  isCorrect: true  },
          { text: "expensive", isCorrect: false },
        ],
        category: 2,
      },
    ];

    // Tạo quiz
    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 2",
      description: "35 câu Word Knowledge 2",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn thành công ${inserted.length}/35 câu`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 2 created successfully!");

  } catch (err) {
    console.error("Lỗi khi tạo quiz:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối MongoDB");
  }
};

createWordKnowledgeQuiz();