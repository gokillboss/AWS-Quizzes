// generalScienceSeed3.ts
import mongoose from "mongoose";
import Quiz from "../models/quizModel";
import Question from "../models/questionModel";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface ScienceQuestion {
  questionText: string;
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

const createGeneralScienceQuiz3 = async () => {
  await connectDB();

  try {
    await Quiz.deleteMany({ title: "General Science Practice Test 3" });

    const questions: ScienceQuestion[] = [
      {
        questionText: "The moon completes a revolution around Earth approximately every",
        options: [
          { text: "28 days", isCorrect: true },
          { text: "365 days", isCorrect: false },
          { text: "24 hours", isCorrect: false },
          { text: "7 days", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Carcinogens are chemicals that cause",
        options: [
          { text: "high blood pressure", isCorrect: false },
          { text: "gene mutations", isCorrect: true },
          { text: "blood clots", isCorrect: false },
          { text: "diabetes", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "A paramecium is",
        options: [
          { text: "a one-celled organism", isCorrect: true },
          { text: "algae", isCorrect: false },
          { text: "bacteria", isCorrect: false },
          { text: "a many-celled organism", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "What substance is essential for the function of the thyroid gland?",
        options: [
          { text: "potassium chloride", isCorrect: false },
          { text: "hemoglobin", isCorrect: false },
          { text: "calcium", isCorrect: false },
          { text: "iodine", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "The brainstem controls",
        options: [
          { text: "vision", isCorrect: false },
          { text: "voluntary muscle movements", isCorrect: false },
          { text: "your sense of balance", isCorrect: false },
          { text: "some involuntary activities", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Which element is the most abundant one in the atmosphere?",
        options: [
          { text: "oxygen", isCorrect: false },
          { text: "nitrogen", isCorrect: true },
          { text: "helium", isCorrect: false },
          { text: "hydrogen", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Minerals are necessary for",
        options: [
          { text: "respiration", isCorrect: false },
          { text: "eliminating waste", isCorrect: false },
          { text: "preventing night blindness", isCorrect: false },
          { text: "metabolic function", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "What’s the only metallic element found as a liquid at room temperature?",
        options: [
          { text: "bromine", isCorrect: false },
          { text: "tellurium", isCorrect: false },
          { text: "mercury", isCorrect: true },
          { text: "silver", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Which of the following isn’t a type of telescope?",
        options: [
          { text: "reflecting", isCorrect: false },
          { text: "convexing", isCorrect: true },
          { text: "refracting", isCorrect: false },
          { text: "catadioptric", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "A dekagram",
        options: [
          { text: "is larger than a kilogram", isCorrect: false },
          { text: "is smaller than a kilogram", isCorrect: true },
          { text: "is the same as a kilogram", isCorrect: false },
          { text: "doesn’t exist", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "The aurora borealis can be seen only in the",
        options: [
          { text: "winter", isCorrect: false },
          { text: "summer", isCorrect: false },
          { text: "Southern Hemisphere", isCorrect: false },
          { text: "Northern Hemisphere", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "The three important properties of sound waves are",
        options: [
          { text: "wavelength, speed, and crest", isCorrect: false },
          { text: "speed, frequency, and reflection", isCorrect: false },
          { text: "wavelength, frequency, and vibration", isCorrect: false },
          { text: "wavelength, frequency, and speed", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Between which two planets can most of the asteroids in the solar system be found?",
        options: [
          { text: "Mars and Jupiter", isCorrect: true },
          { text: "Saturn and Jupiter", isCorrect: false },
          { text: "Earth and Mars", isCorrect: false },
          { text: "Mercury and Venus", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "At room temperature, an element can be a",
        options: [
          { text: "gas", isCorrect: false },
          { text: "liquid or gas", isCorrect: false },
          { text: "gas or solid", isCorrect: false },
          { text: "liquid, gas, or solid", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "The elements hydrogen and helium comprise what percentage of almost all matter in the universe?",
        options: [
          { text: "75%", isCorrect: false },
          { text: "82%", isCorrect: false },
          { text: "90%", isCorrect: false },
          { text: "98%", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Compounds are created when",
        options: [
          { text: "atoms of two or more like elements are combined", isCorrect: false },
          { text: "atoms of two or more different elements are combined", isCorrect: true },
          { text: "two or more molecules are combined", isCorrect: false },
          { text: "a molecule decomposes", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "What theory suggests the universe will come to an end when its ever-increasing rate of expansion causes all matter to fly apart?",
        options: [
          { text: "The Big Rip", isCorrect: true },
          { text: "The Big Bang", isCorrect: false },
          { text: "The Big Crunch", isCorrect: false },
          { text: "The Big Easy", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "A watt-hour measures",
        options: [
          { text: "the amount of work performed or generated", isCorrect: true },
          { text: "the number of electrons moving past a specific point", isCorrect: false },
          { text: "resistance", isCorrect: false },
          { text: "voltage", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Which of the following planets, known as gas giants, has no rings?",
        options: [
          { text: "Neptune", isCorrect: false },
          { text: "Jupiter", isCorrect: true }, // Jupiter có vành đai rất mờ, nhưng trong ASVAB thường coi là “không có”
          { text: "Uranus", isCorrect: false },
          { text: "They all have rings", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Gas particles move",
        options: [
          { text: "more slowly than liquid particles", isCorrect: false },
          { text: "more slowly than solid particles", isCorrect: false },
          { text: "more quickly than liquid particles", isCorrect: true },
          { text: "at the same rate as all other particles", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Absolute zero is",
        options: [
          { text: "0 degrees Fahrenheit", isCorrect: false },
          { text: "0 degrees Celsius", isCorrect: false },
          { text: "–273 degrees Celsius", isCorrect: true },
          { text: "–32 degrees Fahrenheit", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Radiology is employed when doing which of the following?",
        options: [
          { text: "using a Magnetic Resonance Imaging machine", isCorrect: true },
          { text: "using a blood pressure cuff", isCorrect: false },
          { text: "blood typing", isCorrect: false },
          { text: "breathing", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Which of the following statements is not true?",
        options: [
          { text: "The human female chin is usually more rounded or pointed than the human male chin", isCorrect: false },
          { text: "The human female pelvis is usually narrower than the human male pelvis", isCorrect: true }, // Sai – nữ rộng hơn nam
          { text: "The human male skull is usually larger than the human female skull", isCorrect: false },
          { text: "The human male skull has a larger brow ridge than the human female skull", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "A lunar eclipse occurs when",
        options: [
          { text: "Earth moves into the moon’s shadow", isCorrect: false },
          { text: "the sun blocks the moon from view", isCorrect: false },
          { text: "Earth moves into the sun’s shadow", isCorrect: false },
          { text: "the moon moves into Earth’s shadow", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "What chemical can be used to detect blood, even if it's been wiped from a surface?",
        options: [
          { text: "luminol", isCorrect: true },
          { text: "cyanide", isCorrect: false },
          { text: "ninhydrin", isCorrect: false },
          { text: "alcohol", isCorrect: false },
        ],
        category: 3,
      },
    ];

    const quiz = await Quiz.create({
      title: "General Science Practice Test 3",
      description: "25 câu General Science",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Inserted ${inserted.length} questions – General Science Test 3`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("General Science Practice Test 3 created successfully!");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

createGeneralScienceQuiz3();