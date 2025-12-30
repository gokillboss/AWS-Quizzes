// synonymsInSentencesPart2.ts - 50 câu còn lại (151-200)
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

const createSynonymsQuizPart2 = async () => {
  await connectDB();

  try {
    await Quiz.deleteMany({ title: "Synonyms in Sentences Part 2 (151-200)" });

    const questions: VocabQuestion[] = [
      {
        questionText: "When the kids weren’t fighting, Mom couldn’t help but enjoy the accord.",
        keyWord: "accord",
        options: [
          { text: "peace",     isCorrect: true },
          { text: "sound",     isCorrect: false },
          { text: "discussion",isCorrect: false },
          { text: "freedom",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Your lawyer will advocate for you in court.",
        keyWord: "advocate",
        options: [
          { text: "discuss", isCorrect: false },
          { text: "argue",   isCorrect: true },
          { text: "question",isCorrect: false },
          { text: "cry",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The training teaches you what to do when disaster strikes.",
        keyWord: "disaster",
        options: [
          { text: "catastrophe", isCorrect: true },
          { text: "setback",     isCorrect: false },
          { text: "danger",      isCorrect: false },
          { text: "difficulty",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "“I don’t have any money, but maybe we could barter,” Rob said.",
        keyWord: "barter",
        options: [
          { text: "joke",  isCorrect: false },
          { text: "tease", isCorrect: false },
          { text: "go",    isCorrect: false },
          { text: "trade", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The archaeologists used a key to decipher the ancient text.",
        keyWord: "decipher",
        options: [
          { text: "unlock", isCorrect: false },
          { text: "decode", isCorrect: true },
          { text: "obscure",isCorrect: false },
          { text: "obfuscate",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Micki is an ardent student of language, and she’s always ready to learn something new.",
        keyWord: "ardent",
        options: [
          { text: "angry",      isCorrect: false },
          { text: "cheerful",   isCorrect: false },
          { text: "enthusiastic",isCorrect: true },
          { text: "apathetic",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "All the students admired their teacher.",
        keyWord: "admired",
        options: [
          { text: "respected", isCorrect: true },
          { text: "feared",    isCorrect: false },
          { text: "despised",  isCorrect: false },
          { text: "liked",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "All Raven could see was a mile of desolate desert stretching out before him.",
        keyWord: "desolate",
        options: [
          { text: "apologetic", isCorrect: false },
          { text: "plain",      isCorrect: false },
          { text: "sandy",      isCorrect: false },
          { text: "deserted",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Jon is a bit eccentric, but that’s never stopped him from fitting in.",
        keyWord: "eccentric",
        options: [
          { text: "strange",   isCorrect: true },
          { text: "fanatical", isCorrect: false },
          { text: "boorish",   isCorrect: false },
          { text: "creative",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Most people know the article is satire, but those who don’t come up with hilarious responses.",
        keyWord: "satire",
        options: [
          { text: "parody",    isCorrect: true },
          { text: "factual",   isCorrect: false },
          { text: "complimentary",isCorrect: false },
          { text: "odd",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Three people made the same suggestion.",
        keyWord: "suggestion",
        options: [
          { text: "proposition", isCorrect: true },
          { text: "hint",        isCorrect: false },
          { text: "definition",  isCorrect: false },
          { text: "alliance",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Jackson was incredibly conscientious, which made him popular among his superior officers.",
        keyWord: "conscientious",
        options: [
          { text: "inattentive", isCorrect: false },
          { text: "careful",     isCorrect: true },
          { text: "friendly",    isCorrect: false },
          { text: "dapper",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "There’s no ambiguity; the First Amendment protects free speech.",
        keyWord: "ambiguity",
        options: [
          { text: "failure",     isCorrect: false },
          { text: "uncertainty", isCorrect: true },
          { text: "alternative", isCorrect: false },
          { text: "opacity",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "I tell you this with the caveat that you’ll keep it a secret.",
        keyWord: "caveat",
        options: [
          { text: "threat",      isCorrect: false },
          { text: "apparition",  isCorrect: false },
          { text: "probability", isCorrect: false },
          { text: "condition",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "There has been a dramatic decrease in homelessness.",
        keyWord: "dramatic",
        options: [
          { text: "significant", isCorrect: true },
          { text: "moderate",    isCorrect: false },
          { text: "unsettling",  isCorrect: false },
          { text: "dangerous",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tana never had reason to doubt JoAnn’s integrity.",
        keyWord: "integrity",
        options: [
          { text: "turpitude", isCorrect: false },
          { text: "tenacity",  isCorrect: false },
          { text: "honesty",   isCorrect: true },
          { text: "sweetness", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "They haven’t been able to buy anything modern since the embargo.",
        keyWord: "embargo",
        options: [
          { text: "trade ban", isCorrect: true },
          { text: "disagreement",isCorrect: false },
          { text: "war",         isCorrect: false },
          { text: "blockade",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The playground bully mocked the smaller kids every day.",
        keyWord: "mocked",
        options: [
          { text: "scared",    isCorrect: false },
          { text: "teased",    isCorrect: true },
          { text: "terrorized",isCorrect: false },
          { text: "punched",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "You must give your testimony so the court can hear your side of the story.",
        keyWord: "testimony",
        options: [
          { text: "consultation", isCorrect: false },
          { text: "recording",    isCorrect: false },
          { text: "statement",    isCorrect: true },
          { text: "attorney",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "You’ll get used to military jargon by the time you graduate Basic Combat Training.",
        keyWord: "jargon",
        options: [
          { text: "language",   isCorrect: true },
          { text: "photography",isCorrect: false },
          { text: "spotlight",  isCorrect: false },
          { text: "exercise",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The hero was always ensuring that justice was served.",
        keyWord: "justice",
        options: [
          { text: "judge",        isCorrect: false },
          { text: "capriciousness",isCorrect: false },
          { text: "fairness",     isCorrect: true },
          { text: "honesty",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Kathy and Bonnie walked down the broad staircase together.",
        keyWord: "broad",
        options: [
          { text: "narrow",   isCorrect: false },
          { text: "rickety",  isCorrect: false },
          { text: "dangerous",isCorrect: false },
          { text: "wide",     isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "As the slowest player, she was often the object of her teammates’ scorn.",
        keyWord: "scorn",
        options: [
          { text: "anger",   isCorrect: false },
          { text: "teasing", isCorrect: false },
          { text: "contempt",isCorrect: true },
          { text: "laughter",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "David knew hiring Cheryl would prove advantageous to the company.",
        keyWord: "advantageous",
        options: [
          { text: "thrilling", isCorrect: false },
          { text: "ideal",     isCorrect: false },
          { text: "powerful",  isCorrect: false },
          { text: "beneficial",isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Heather put her climbing hook into the crevice.",
        keyWord: "crevice",
        options: [
          { text: "door",      isCorrect: false },
          { text: "narrow",    isCorrect: false },
          { text: "container", isCorrect: false },
          { text: "crack",     isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Jamie was an enigma, and his brother could never figure out why he was friendly one minute and confrontational the next.",
        keyWord: "enigma",
        options: [
          { text: "mystery",  isCorrect: true },
          { text: "conundrum",isCorrect: false },
          { text: "bipolar",  isCorrect: false },
          { text: "elusive",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Only the most gullible people believe that nonsense.",
        keyWord: "gullible",
        options: [
          { text: "feeble",   isCorrect: false },
          { text: "credulous",isCorrect: true },
          { text: "confused", isCorrect: false },
          { text: "difficult",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "“We can bring you as long as you promise not to be a hindrance,” Jesse told the girl.",
        keyWord: "hindrance",
        options: [
          { text: "interface", isCorrect: false },
          { text: "impediment",isCorrect: true },
          { text: "enigma",    isCorrect: false },
          { text: "traitor",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tim was fortunate enough to have a gift for woodworking.",
        keyWord: "fortunate",
        options: [
          { text: "lucky",     isCorrect: true },
          { text: "happy",     isCorrect: false },
          { text: "comforted", isCorrect: false },
          { text: "strained",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The general was a formidable man.",
        keyWord: "formidable",
        options: [
          { text: "meticulous", isCorrect: false },
          { text: "intimidating",isCorrect: true },
          { text: "mean",       isCorrect: false },
          { text: "deadly",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tina was anxious about the outcome of the trial.",
        keyWord: "anxious",
        options: [
          { text: "calm",     isCorrect: false },
          { text: "content",  isCorrect: false },
          { text: "transfixed",isCorrect: false },
          { text: "worried",  isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Nothing could deter Sadie from her goal of becoming a psychologist.",
        keyWord: "deter",
        options: [
          { text: "discourage", isCorrect: true },
          { text: "flip",       isCorrect: false },
          { text: "admonish",   isCorrect: false },
          { text: "persuade",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Jill removed the obstruction so Traci and Donna could get on the stage.",
        keyWord: "obstruction",
        options: [
          { text: "hazard",  isCorrect: false },
          { text: "barrier", isCorrect: true },
          { text: "cone",    isCorrect: false },
          { text: "danger",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The puppy ate with zeal.",
        keyWord: "zeal",
        options: [
          { text: "sluggishness", isCorrect: false },
          { text: "hunger",       isCorrect: false },
          { text: "lethargy",     isCorrect: false },
          { text: "enthusiasm",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "You must be careful not to alienate your supporters.",
        keyWord: "alienate",
        options: [
          { text: "evacuate", isCorrect: false },
          { text: "evict",    isCorrect: false },
          { text: "estrange", isCorrect: true },
          { text: "confuse",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The commander told the first sergeant to reprimand the soldiers.",
        keyWord: "reprimand",
        options: [
          { text: "fire",  isCorrect: false },
          { text: "scold", isCorrect: true },
          { text: "teach", isCorrect: false },
          { text: "imprison",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Pili never worried about trivial details.",
        keyWord: "trivial",
        options: [
          { text: "unimportant", isCorrect: true },
          { text: "dangerous",   isCorrect: false },
          { text: "large",       isCorrect: false },
          { text: "corresponding",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Simon could distinguish Spanish from English at an early age.",
        keyWord: "distinguish",
        options: [
          { text: "put out",   isCorrect: false },
          { text: "speak",     isCorrect: false },
          { text: "understand",isCorrect: false },
          { text: "differentiate",isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Paloma is adept at winning over strangers.",
        keyWord: "adept",
        options: [
          { text: "poor",       isCorrect: false },
          { text: "skilled",    isCorrect: true },
          { text: "invigorated",isCorrect: false },
          { text: "encouraging",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "A strident voice interrupted the rally to demand answers about the candidate’s tax returns.",
        keyWord: "strident",
        options: [
          { text: "hushed",  isCorrect: false },
          { text: "strained",isCorrect: false },
          { text: "loud",    isCorrect: false },
          { text: "harsh",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Beto could no longer abide the homeowners’ association’s “No Parking” rules.",
        keyWord: "abide",
        options: [
          { text: "tolerate",   isCorrect: true },
          { text: "acknowledge",isCorrect: false },
          { text: "read",       isCorrect: false },
          { text: "extend",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The antique vase was authentic.",
        keyWord: "authentic",
        options: [
          { text: "fake",      isCorrect: false },
          { text: "replicated",isCorrect: false },
          { text: "disputed",  isCorrect: false },
          { text: "genuine",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Andrew was prepared to face the consequences of supporting a losing candidate.",
        keyWord: "consequences",
        options: [
          { text: "concerns",   isCorrect: false },
          { text: "results",    isCorrect: false },
          { text: "punishments",isCorrect: true },
          { text: "orders",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Jesse’s speech was succinct.",
        keyWord: "succinct",
        options: [
          { text: "lengthy",    isCorrect: false },
          { text: "concise",    isCorrect: true },
          { text: "expressive", isCorrect: false },
          { text: "sharp",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Shanna couldn’t shake her trepidation as she walked down the narrow stairs.",
        keyWord: "trepidation",
        options: [
          { text: "disquiet", isCorrect: true },
          { text: "tremors",  isCorrect: false },
          { text: "trestle",  isCorrect: false },
          { text: "umbrage",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Krista supplemented her income by taking a job at the local paper.",
        keyWord: "supplemented",
        options: [
          { text: "drained",   isCorrect: false },
          { text: "increased", isCorrect: true },
          { text: "tracked",   isCorrect: false },
          { text: "used",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "“The onus is on you,” Matt said to the prosecutor.",
        keyWord: "onus",
        options: [
          { text: "idea",          isCorrect: false },
          { text: "consequences",  isCorrect: false },
          { text: "responsibility",isCorrect: true },
          { text: "assignation",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The lavish décor made the boys feel out of place.",
        keyWord: "lavish",
        options: [
          { text: "modern",  isCorrect: false },
          { text: "frugal",  isCorrect: false },
          { text: "opulent", isCorrect: true },
          { text: "disgusting",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "I pledge allegiance to the flag.",
        keyWord: "allegiance",
        options: [
          { text: "life",          isCorrect: false },
          { text: "subordination", isCorrect: false },
          { text: "loyalty",       isCorrect: true },
          { text: "individuality", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The child had a voracious appetite for sweets.",
        keyWord: "voracious",
        options: [
          { text: "careful",      isCorrect: false },
          { text: "insatiable",   isCorrect: true },
          { text: "dangerous",    isCorrect: false },
          { text: "satisfactory", isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Synonyms in Sentences Part 2 (151-200)",
      description: "50 câu còn lại Synonyms in Sentences – đáp án chuẩn",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/50 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Synonyms in Sentences Part 2 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createSynonymsQuizPart2();