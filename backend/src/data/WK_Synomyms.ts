// synonymsInSentencesPart1.ts - 50 câu đầu (101-150)
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

const createSynonymsQuizPart1 = async () => {
  await connectDB();

  try {
    await Quiz.deleteMany({ title: "Synonyms in Sentences Part 1 (101-150)" });

    const questions: VocabQuestion[] = [
      {
        questionText: "Mrs. Jenkins turned and addressed the class.",
        keyWord: "addressed",
        options: [
          { text: "lectured",     isCorrect: true },
          { text: "divided",      isCorrect: false },
          { text: "embarrassed",  isCorrect: false },
          { text: "interrogated", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Shelly wanted to analyze the results from the tests on her own.",
        keyWord: "analyze",
        options: [
          { text: "combine",   isCorrect: false },
          { text: "determine", isCorrect: false },
          { text: "synthesize",isCorrect: false },
          { text: "examine",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The cacophony was almost unbearable for the adults, but the baby slept through it.",
        keyWord: "cacophony",
        options: [
          { text: "silence", isCorrect: false },
          { text: "music",   isCorrect: false },
          { text: "racket",  isCorrect: true },
          { text: "hissing", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "A good press release needs to include quotes from industry professionals.",
        keyWord: "include",
        options: [
          { text: "place",     isCorrect: false },
          { text: "contain",   isCorrect: true },
          { text: "share",     isCorrect: false },
          { text: "subordinate",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The advertising team took the concept to the company president, who gave her approval.",
        keyWord: "concept",
        options: [
          { text: "idea",      isCorrect: true },
          { text: "create",    isCorrect: false },
          { text: "storyboard",isCorrect: false },
          { text: "drawing",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Designing a new solution can be difficult, but it’s usually worth the effort.",
        keyWord: "solution",
        options: [
          { text: "words",  isCorrect: false },
          { text: "answer", isCorrect: true },
          { text: "chart",  isCorrect: false },
          { text: "breach", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The pearls on the strand seemed to glitter in the sunlight.",
        keyWord: "strand",
        options: [
          { text: "satchel", isCorrect: false },
          { text: "bucket",  isCorrect: false },
          { text: "hair",    isCorrect: false },
          { text: "thread",  isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Renee put together a coherent argument that convinced the entire jury.",
        keyWord: "coherent",
        options: [
          { text: "logical",   isCorrect: true },
          { text: "ordinary",  isCorrect: false },
          { text: "jumbled",   isCorrect: false },
          { text: "confusing", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Jackie made her selection based on the options offered on the cafeteria menu.",
        keyWord: "selection",
        options: [
          { text: "position", isCorrect: false },
          { text: "choice",   isCorrect: true },
          { text: "population",isCorrect: false },
          { text: "semantic", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The photos the squad submitted didn’t match their commander’s narrative.",
        keyWord: "narrative",
        options: [
          { text: "confession", isCorrect: false },
          { text: "ilk",        isCorrect: false },
          { text: "imposture",  isCorrect: false },
          { text: "commentary", isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Nothing the woman said was relevant to the incident police were investigating.",
        keyWord: "relevant",
        options: [
          { text: "pertinent",  isCorrect: true },
          { text: "acceptable", isCorrect: false },
          { text: "apt",        isCorrect: false },
          { text: "timed",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The boys went to the assembly together.",
        keyWord: "assembly",
        options: [
          { text: "restaurant", isCorrect: false },
          { text: "store",      isCorrect: false },
          { text: "activation", isCorrect: false },
          { text: "rally",      isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The generals followed a divide and conquer strategy.",
        keyWord: "divide",
        options: [
          { text: "separate", isCorrect: true },
          { text: "tool",     isCorrect: false },
          { text: "classify", isCorrect: false },
          { text: "fight",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The meteor’s velocity dropped after it entered the atmosphere.",
        keyWord: "velocity",
        options: [
          { text: "temperature", isCorrect: false },
          { text: "speed",       isCorrect: true },
          { text: "resistance",  isCorrect: false },
          { text: "girth",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It was always hard to differentiate among the triplets.",
        keyWord: "differentiate",
        options: [
          { text: "generalize", isCorrect: false },
          { text: "relate",     isCorrect: false },
          { text: "change",     isCorrect: false },
          { text: "distinguish",isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The man pulled the sleeping bag over his head when he felt the draft.",
        keyWord: "draft",
        options: [
          { text: "drawing", isCorrect: false },
          { text: "current", isCorrect: true },
          { text: "text",    isCorrect: false },
          { text: "drive",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "If the president takes the time to call you, he probably has something significant to say.",
        keyWord: "significant",
        options: [
          { text: "distracting", isCorrect: false },
          { text: "obvious",     isCorrect: false },
          { text: "important",   isCorrect: true },
          { text: "loud",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "She told me not to put so much emphasis on the last syllable.",
        keyWord: "emphasis",
        options: [
          { text: "stress",   isCorrect: true },
          { text: "weakness", isCorrect: false },
          { text: "focus",    isCorrect: false },
          { text: "stroke",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Cherise made more than one error that ultimately led to her poor grade.",
        keyWord: "error",
        options: [
          { text: "correction", isCorrect: false },
          { text: "perfection", isCorrect: false },
          { text: "truth",      isCorrect: false },
          { text: "mistake",    isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The excerpt detailed what it was like growing up in Germany on an American military base.",
        keyWord: "excerpt",
        options: [
          { text: "passage",  isCorrect: true },
          { text: "pieces",   isCorrect: false },
          { text: "exception",isCorrect: false },
          { text: "entirety", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Preheat the oven before you combine the ingredients.",
        keyWord: "combine",
        options: [
          { text: "cook",    isCorrect: false },
          { text: "bond",    isCorrect: false },
          { text: "mix",     isCorrect: true },
          { text: "dissolve",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The kids were extremely resourceful when the teacher asked them to find solutions.",
        keyWord: "resourceful",
        options: [
          { text: "prompt",   isCorrect: false },
          { text: "skillful", isCorrect: true },
          { text: "inept",    isCorrect: false },
          { text: "aspiring", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Julia proceeded to enumerate all the reasons she wanted to join the Army instead of the Air Force.",
        keyWord: "enumerate",
        options: [
          { text: "acquiesce", isCorrect: false },
          { text: "concede",   isCorrect: false },
          { text: "tell",      isCorrect: false },
          { text: "itemize",   isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The doctor determined the underlying cause of the man’s symptoms.",
        keyWord: "underlying",
        options: [
          { text: "foundational", isCorrect: false },
          { text: "critical",     isCorrect: false },
          { text: "necessary",    isCorrect: false },
          { text: "hidden",       isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "You can refer to the chart for the latest statistics.",
        keyWord: "statistics",
        options: [
          { text: "appearance", isCorrect: false },
          { text: "data",       isCorrect: true },
          { text: "finish",     isCorrect: false },
          { text: "ideas",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Many people find it difficult to assimilate in a new culture.",
        keyWord: "assimilate",
        options: [
          { text: "unlearn",     isCorrect: false },
          { text: "misinterpret",isCorrect: false },
          { text: "conform",     isCorrect: true },
          { text: "correspond",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "It is crucial that you understand the directions before you begin.",
        keyWord: "crucial",
        options: [
          { text: "dire",      isCorrect: false },
          { text: "superior",  isCorrect: false },
          { text: "essential", isCorrect: true },
          { text: "significant",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "New laws come about with the emergence of new nations.",
        keyWord: "emergence",
        options: [
          { text: "materialization", isCorrect: true },
          { text: "classification",  isCorrect: false },
          { text: "opening",         isCorrect: false },
          { text: "stoppage",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Psychologists are attempting to understand the genesis of human instincts and how they have evolved.",
        keyWord: "genesis",
        options: [
          { text: "finality",   isCorrect: false },
          { text: "beginning",  isCorrect: true },
          { text: "explanation",isCorrect: false },
          { text: "causation",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Maher decided to have a simple breakfast comprising only oatmeal.",
        keyWord: "simple",
        options: [
          { text: "small",       isCorrect: false },
          { text: "delicious",   isCorrect: false },
          { text: "foolish",     isCorrect: false },
          { text: "uncomplicated",isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Ulices valued Marta’s counsel, so he did what she told him to do.",
        keyWord: "counsel",
        options: [
          { text: "negligence", isCorrect: false },
          { text: "foresight",  isCorrect: false },
          { text: "advice",     isCorrect: true },
          { text: "reprimand",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The investigators found that Jimmy was able to corroborate Justin’s story.",
        keyWord: "corroborate",
        options: [
          { text: "eviscerate", isCorrect: false },
          { text: "establish",  isCorrect: false },
          { text: "authenticate",isCorrect: true },
          { text: "disprove",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Katie told Lilly she could achieve results if she worked a half hour every day.",
        keyWord: "achieve",
        options: [
          { text: "obtain",   isCorrect: true },
          { text: "negotiate",isCorrect: false },
          { text: "perform",  isCorrect: false },
          { text: "stop",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Doug told Trenton he’d reimburse him for the damage.",
        keyWord: "reimburse",
        options: [
          { text: "penalize",  isCorrect: false },
          { text: "compensate",isCorrect: true },
          { text: "collect",   isCorrect: false },
          { text: "convert",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "In a caste system, it’s rare for people to move from one milieu to another.",
        keyWord: "milieu",
        options: [
          { text: "condition", isCorrect: false },
          { text: "element",   isCorrect: false },
          { text: "environment",isCorrect: true },
          { text: "ambience",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mallory said she would prefer someone with egalitarian beliefs in the Oval Office.",
        keyWord: "egalitarian",
        options: [
          { text: "unbiased",         isCorrect: true },
          { text: "dispassionate",    isCorrect: false },
          { text: "distinctive",      isCorrect: false },
          { text: "nondiscriminatory",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ty followed the narrow river to its end.",
        keyWord: "narrow",
        options: [
          { text: "thin",    isCorrect: true },
          { text: "wide",    isCorrect: false },
          { text: "slow",    isCorrect: false },
          { text: "bubbling",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Yoli gathered her meager belongings and left.",
        keyWord: "meager",
        options: [
          { text: "insufficient", isCorrect: true },
          { text: "many",         isCorrect: false },
          { text: "adequate",     isCorrect: false },
          { text: "wealthy",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Forty-three people had adverse reactions to the medication.",
        keyWord: "adverse",
        options: [
          { text: "opposite",   isCorrect: false },
          { text: "auspicious", isCorrect: false },
          { text: "unfavorable",isCorrect: true },
          { text: "dignified",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "For many parents, saying, “We’ll see” is tantamount to saying, “No.”",
        keyWord: "tantamount",
        options: [
          { text: "proportionate", isCorrect: false },
          { text: "oppositional",  isCorrect: false },
          { text: "paramount",     isCorrect: false },
          { text: "equivalent",    isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "The military is always attempting to retain good service members.",
        keyWord: "retain",
        options: [
          { text: "teach",   isCorrect: false },
          { text: "keep",    isCorrect: true },
          { text: "discover",isCorrect: false },
          { text: "pay",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Please convey my gratitude to everyone who brought gifts.",
        keyWord: "convey",
        options: [
          { text: "release",  isCorrect: false },
          { text: "deny",     isCorrect: false },
          { text: "carry",    isCorrect: false },
          { text: "communicate",isCorrect: true },
        ],
        category: 2,
      },
      {
        questionText: "Fani told her dad that he should approximate the time.",
        keyWord: "approximate",
        options: [
          { text: "believe", isCorrect: false },
          { text: "estimate",isCorrect: true },
          { text: "replicate",isCorrect: false },
          { text: "change",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The colonel asked the contractor to submit his proposal.",
        keyWord: "proposal",
        options: [
          { text: "credentials", isCorrect: false },
          { text: "plan",        isCorrect: true },
          { text: "refusal",     isCorrect: false },
          { text: "demands",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Employers are not supposed to have bias against elderly job applicants.",
        keyWord: "bias",
        options: [
          { text: "impression", isCorrect: false },
          { text: "influence",  isCorrect: false },
          { text: "prejudice",  isCorrect: true },
          { text: "investigation",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Brandon watched the creature slither away.",
        keyWord: "slither",
        options: [
          { text: "slide",   isCorrect: true },
          { text: "wobble",  isCorrect: false },
          { text: "move",    isCorrect: false },
          { text: "lag",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Although Penny said it was a moot point, Daniel didn’t want to argue.",
        keyWord: "moot",
        options: [
          { text: "debatable", isCorrect: true },
          { text: "useful",    isCorrect: false },
          { text: "obvious",   isCorrect: false },
          { text: "indisputable",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Everything the instructor covered was irrelevant to the test.",
        keyWord: "irrelevant",
        options: [
          { text: "applicable", isCorrect: false },
          { text: "unrelated",  isCorrect: true },
          { text: "pertinent",  isCorrect: false },
          { text: "evidentiary",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The editor made six amendments to the story before approving it for publication.",
        keyWord: "amendments",
        options: [
          { text: "changes",   isCorrect: true },
          { text: "retentions",isCorrect: false },
          { text: "corrections",isCorrect: false },
          { text: "conditions",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "The candidate handled the insults with equanimity.",
        keyWord: "equanimity",
        options: [
          { text: "nervousness", isCorrect: false },
          { text: "aplomb",      isCorrect: true },
          { text: "confusion",   isCorrect: false },
          { text: "brashness",   isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Synonyms in Sentences Part 1 (101-150)",
      description: "50 câu đầu Synonyms in Sentences – đáp án chuẩn",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/50 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Synonyms in Sentences Part 1 created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createSynonymsQuizPart1();