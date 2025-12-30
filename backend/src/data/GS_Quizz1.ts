// generalScienceSeed-clean.ts
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

const createGeneralScienceQuiz = async () => {
    await connectDB();

    try {
        await Quiz.deleteMany({ title: "General Science Practice Test" });

        const scienceQuestions: ScienceQuestion[] = [
            {
                questionText: "Which planet is named after the Greek god who personified the sky?",
                options: [
                    { text: "Earth", isCorrect: false },
                    { text: "Mars", isCorrect: false },
                    { text: "Pluto", isCorrect: false },
                    { text: "Uranus", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "An animal that eats only meat is called a(n)",
                options: [
                    { text: "omnivore", isCorrect: false },
                    { text: "herbivore", isCorrect: false },
                    { text: "carnivore", isCorrect: true },
                    { text: "voracious", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "The chemical process in which electrons are removed from a molecule is called",
                options: [
                    { text: "respiration", isCorrect: false },
                    { text: "recreation", isCorrect: false },
                    { text: "oxidation", isCorrect: true },
                    { text: "metabolism", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "What is a single unit of quanta called?",
                options: [
                    { text: "quantum", isCorrect: true },
                    { text: "quantumonium", isCorrect: false },
                    { text: "quantus", isCorrect: false },
                    { text: "quanfactorial", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "In a vacuum, light waves travel at a rate of about",
                options: [
                    { text: "186,000 miles per hour", isCorrect: false },
                    { text: "186,000 miles per minute", isCorrect: false },
                    { text: "18,600 miles per hour", isCorrect: false },
                    { text: "186,000 miles per second", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "The largest planet in the solar system is",
                options: [
                    { text: "Earth", isCorrect: false },
                    { text: "Mars", isCorrect: false },
                    { text: "Saturn", isCorrect: false },
                    { text: "Jupiter", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "The intestines are part of the",
                options: [
                    { text: "circulatory system", isCorrect: false },
                    { text: "nervous system", isCorrect: false },
                    { text: "respiratory system", isCorrect: false },
                    { text: "digestive system", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "Joints that hold bones firmly together are called",
                options: [
                    { text: "hinge joints", isCorrect: false },
                    { text: "ball and socket joints", isCorrect: false },
                    { text: "fixed joints", isCorrect: true },
                    { text: "pivot joints", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "Of the levels listed, the top or broadest level of the classification system for living organisms is called the",
                options: [
                    { text: "class", isCorrect: false },
                    { text: "phylum", isCorrect: false },
                    { text: "kingdom", isCorrect: true },
                    { text: "genus", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "Which planet is the brightest object in the sky, aside from the sun and moon?",
                options: [
                    { text: "Saturn", isCorrect: false },
                    { text: "Pluto", isCorrect: false },
                    { text: "Venus", isCorrect: true },
                    { text: "Mercury", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "The human heart includes",
                options: [
                    { text: "2 chambers", isCorrect: false },
                    { text: "3 chambers", isCorrect: false },
                    { text: "4 chambers", isCorrect: true },
                    { text: "5 chambers", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "White blood cells",
                options: [
                    { text: "produce antibodies and fight infections", isCorrect: true },
                    { text: "carry sugar", isCorrect: false },
                    { text: "carry oxygen and carbon dioxide", isCorrect: false },
                    { text: "Non of those answers", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "A measurable amount of protein can be found in all of the following foods EXCEPT",
                options: [
                    { text: "eggs", isCorrect: false },
                    { text: "meat", isCorrect: false },
                    { text: "peas", isCorrect: false },
                    { text: "apples", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "What is the most abundant element, by mass, in Earth’s crust?",
                options: [
                    { text: "carbon", isCorrect: false },
                    { text: "oxygen", isCorrect: true },
                    { text: "gold", isCorrect: false },
                    { text: "salt", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "Osmosis is",
                options: [
                    { text: "diffusion of a solvent", isCorrect: true },
                    { text: "transfer of oxygen", isCorrect: false },
                    { text: "low blood sugar", isCorrect: false },
                    { text: "protein", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "A meter consists of",
                options: [
                    { text: "10 centimeters", isCorrect: false },
                    { text: "100 millimeters", isCorrect: false },
                    { text: "100 centimeters", isCorrect: true },
                    { text: "10 millimeters", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "One light-year is",
                options: [
                    { text: "the distance traveled by light in one year", isCorrect: true },
                    { text: "the brightness of light at 30,000 miles", isCorrect: false },
                    { text: "17 standard Earth years", isCorrect: false },
                    { text: "distance Earth must travel around the sun", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "Electrons are particles that are",
                options: [
                    { text: "positively charged", isCorrect: false },
                    { text: "neutral", isCorrect: false },
                    { text: "able to move freely", isCorrect: false },
                    { text: "negatively charged", isCorrect: true },
                ],
                category: 3,
            },
            {
                questionText: "The asteroid belt is located",
                options: [
                    { text: "around Mercury", isCorrect: false },
                    { text: "between Mars and Jupiter", isCorrect: true },
                    { text: "inside the orbit of Venus", isCorrect: false },
                    { text: "There is no such thing as an asteroid belt", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "The atomic number of an atom is determined by",
                options: [
                    { text: "the size of its nucleus", isCorrect: false },
                    { text: "number of protons", isCorrect: true },
                    { text: "number of electrons", isCorrect: false },
                    { text: "its location in the periodic table", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "The “control center” of a cell is called the",
                options: [
                    { text: "nucleus", isCorrect: true },
                    { text: "compound", isCorrect: false },
                    { text: "mitochondria", isCorrect: false },
                    { text: "atom", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "How many planets in the solar system have rings?",
                options: [
                    { text: "one", isCorrect: false },
                    { text: "two", isCorrect: false },
                    { text: "three", isCorrect: false },
                    { text: "four", isCorrect: true }, // Jupiter, Saturn, Uranus, Neptune
                ],
                category: 3,
            },
            {
                questionText: "The temperature at which a substance’s solid and liquid states exist in equilibrium is its",
                options: [
                    { text: "melting point", isCorrect: true },
                    { text: "boiling point", isCorrect: false },
                    { text: "anti-freezing point", isCorrect: false },
                    { text: "concentration point", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "The atmosphere of Mars is composed mostly of",
                options: [
                    { text: "oxygen", isCorrect: false },
                    { text: "carbon dioxide", isCorrect: true },
                    { text: "helium", isCorrect: false },
                    { text: "Mars has no atmosphere", isCorrect: false },
                ],
                category: 3,
            },
            {
                questionText: "Not counting the sun, the closest star to Earth is",
                options: [
                    { text: "Rigel", isCorrect: false },
                    { text: "Proxima Centauri", isCorrect: true },
                    { text: "Antares", isCorrect: false },
                    { text: "Betelgeuse", isCorrect: false },
                ],
                category: 3,
            },
        ];

        const scienceQuiz = await Quiz.create({
            title: "General Science Practice Test",
            description: "25 câu General Science – Clean version (no A B C D)",
            price: 0,
        });

        const questionsWithQuizId = scienceQuestions.map(q => ({ ...q, quizId: scienceQuiz._id }));

        const inserted = await Question.insertMany(questionsWithQuizId);
        console.log(`Inserted ${inserted.length} questions`);

        await Quiz.findByIdAndUpdate(scienceQuiz._id, {
            $push: { questions: { $each: inserted.map(q => q._id) } },
        });

        console.log("General Science quiz created successfully! Clean");

    } catch (err) {
        console.error("Error", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected");
    }
};

createGeneralScienceQuiz();