// generalScienceSeed2.ts
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
    console.log("General Science 2");
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createGeneralScienceQuiz2 = async () => {
  await connectDB();

  try {
    // Xóa quiz cũ nếu đã tồn tại
    await Quiz.deleteMany({ title: "General Science Practice Test 2" });

    const questions: ScienceQuestion[] = [
      {
        questionText: "A genus classification contains several related",
        options: [
          { text: "species", isCorrect: true },
          { text: "families", isCorrect: false },
          { text: "orders", isCorrect: false },
          { text: "phyla", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Particles that orbit the nucleus of an atom are",
        options: [
          { text: "anions", isCorrect: false },
          { text: "electrons", isCorrect: true },
          { text: "positrons", isCorrect: false },
          { text: "photons", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "As a human breathes, air is first warmed and filtered in the",
        options: [
          { text: "trachea", isCorrect: false },
          { text: "pharynx", isCorrect: false },
          { text: "oral cavity", isCorrect: false },
          { text: "nasal cavity", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "In the food chain described below, which is the tertiary consumer?\ndandelion → rabbit → fox → coyote",
        options: [
          { text: "dandelion", isCorrect: false },
          { text: "rabbit", isCorrect: false },
          { text: "fox", isCorrect: false },
          { text: "coyote", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "The process by which a solid becomes a gas is known as",
        options: [
          { text: "boiling", isCorrect: false },
          { text: "sublimation", isCorrect: true },
          { text: "melting", isCorrect: false },
          { text: "diffusion", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "The gravitational force the Moon exerts on the Earth is",
        options: [
          { text: "less than one-half as much as that exerted by the Earth on the Moon", isCorrect: false },
          { text: "one-half as much as that exerted by the Earth on the Moon", isCorrect: false },
          { text: "the same as that exerted by the Earth on the Moon", isCorrect: true },
          { text: "more than that exerted by the Earth on the Moon", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Fungi are organisms that break down dead matter and return the organic material back into the environment for reuse. They are examples of",
        options: [
          { text: "producers", isCorrect: false },
          { text: "decomposers", isCorrect: true },
          { text: "consumers", isCorrect: false },
          { text: "mutualists", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "What is the freezing point of water in Kelvin?",
        options: [
          { text: "−273 K", isCorrect: false },
          { text: "0 K", isCorrect: false },
          { text: "100 K", isCorrect: false },
          { text: "273 K", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Tough elastic tissues found in the joints that connect bones to bones are called",
        options: [
          { text: "ligaments", isCorrect: true },
          { text: "tendons", isCorrect: false },
          { text: "cartilage", isCorrect: false },
          { text: "muscles", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Stress, a poor diet, cigarette smoking, and hereditary factors all contribute to individuals developing",
        options: [
          { text: "diarrhea", isCorrect: false },
          { text: "high blood pressure", isCorrect: true },
          { text: "gall stones", isCorrect: false },
          { text: "anemia", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Which clouds are thin and wispy and occur high in the atmosphere?",
        options: [
          { text: "cirrus", isCorrect: true },
          { text: "cumulus", isCorrect: false },
          { text: "stratus", isCorrect: false },
          { text: "stratocumulus", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Fossils are most likely to be found in which of the following types of rock?",
        options: [
          { text: "igneous", isCorrect: false },
          { text: "metamorphic", isCorrect: false },
          { text: "sedimentary", isCorrect: true },
          { text: "volcanic", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "Animals that consume only plants are called",
        options: [
          { text: "saprophytes", isCorrect: false },
          { text: "herbivores", isCorrect: true },
          { text: "carnivores", isCorrect: false },
          { text: "omnivores", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "What type of star is the Sun?",
        options: [
          { text: "red dwarf", isCorrect: false },
          { text: "blue giant", isCorrect: false },
          { text: "white dwarf", isCorrect: false },
          { text: "yellow dwarf", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Which of the following is a group of organisms of the same species living in the same region?",
        options: [
          { text: "biome", isCorrect: false },
          { text: "ecosystem", isCorrect: false },
          { text: "community", isCorrect: false },
          { text: "population", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Which one of these planets is NOT an outer planet?",
        options: [
          { text: "Jupiter", isCorrect: false },
          { text: "Saturn", isCorrect: false },
          { text: "Uranus", isCorrect: false },
          { text: "Earth", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "A boulder that begins to roll down a hill is an example of an energy conversion from",
        options: [
          { text: "potential to thermal", isCorrect: false },
          { text: "potential to kinetic", isCorrect: true },
          { text: "kinetic to thermal", isCorrect: false },
          { text: "kinetic to potential", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "The lowest layer of the Earth’s atmosphere is called the",
        options: [
          { text: "ionosphere", isCorrect: false },
          { text: "mesosphere", isCorrect: false },
          { text: "stratosphere", isCorrect: false },
          { text: "troposphere", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "According to the law of conservation of energy",
        options: [
          { text: "energy is the capacity to do work", isCorrect: false },
          { text: "energy can neither be created nor destroyed", isCorrect: true },
          { text: "energy is possessed by a moving object", isCorrect: false },
          { text: "energy is stored in an object as a result of its position, shape, or state", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "As an ambulance passes, its pitch seems to change. This perception is best explained by",
        options: [
          { text: "convection", isCorrect: false },
          { text: "Newton’s third law", isCorrect: false },
          { text: "the Doppler effect", isCorrect: true },
          { text: "momentum", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "A concave lens is also known as a",
        options: [
          { text: "focal point", isCorrect: false },
          { text: "converging lens", isCorrect: false },
          { text: "convex lens", isCorrect: false },
          { text: "diverging lens", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "The smallest particle of a covalent compound that can exist in a free state and still retain the characteristics of that compound is a(n)",
        options: [
          { text: "proton", isCorrect: false },
          { text: "quark", isCorrect: false },
          { text: "atom", isCorrect: false },
          { text: "molecule", isCorrect: true },
        ],
        category: 3,
      },
      {
        questionText: "Which of the following is most responsible for oceanic tides?",
        options: [
          { text: "the orbit of the Earth around its own axis", isCorrect: false },
          { text: "the magnetic polarity of the Earth", isCorrect: false },
          { text: "the orbit of the Moon around the Earth", isCorrect: true },
          { text: "the orbit of the Earth around the Sun", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "In the Periodic Table of the Elements, the elements in a column are referred to as a",
        options: [
          { text: "period", isCorrect: false },
          { text: "group", isCorrect: true },
          { text: "configuration", isCorrect: false },
          { text: "unit", isCorrect: false },
        ],
        category: 3,
      },
      {
        questionText: "In a chemical change, the molecules that enter the reaction are called",
        options: [
          { text: "reactants", isCorrect: true },
          { text: "products", isCorrect: false },
          { text: "compounds", isCorrect: false },
          { text: "elements", isCorrect: false },
        ],
        category: 3,
      },
    ];

    // Tạo quiz
    const quiz = await Quiz.create({
      title: "General Science Practice Test 2",
      description: "25 câu General Science khác – sạch A/B/C/D",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length} câu General Science 2`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("General Science Practice Test 2 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createGeneralScienceQuiz2();