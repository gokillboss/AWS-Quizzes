// wordKnowledgeSeed7.ts
// Word Knowledge Practice Test 7 (65 questions) - Bộ từ vựng mới, phong cách ASVAB 2025-2026

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
    await Quiz.deleteMany({ title: "Word Knowledge Practice Test 7 (65 questions - ASVAB 2025-2026)" });

    const questions: VocabQuestion[] = [
      // Câu 1-10
      {
        questionText: "Clandestine most nearly means",
        keyWord: "Clandestine",
        options: [
          { text: "open (public, overt, transparent)", isCorrect: false },
          { text: "secret (hidden, covert, surreptitious)", isCorrect: true },
          { text: "loud (noisy, boisterous, rowdy)", isCorrect: false },
          { text: "legal (lawful, legitimate, authorized)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Derelict most nearly means",
        keyWord: "Derelict",
        options: [
          { text: "dilapidated (neglected, abandoned, rundown)", isCorrect: true },
          { text: "modern (contemporary, up-to-date, current)", isCorrect: false },
          { text: "clean (tidy, neat, spotless)", isCorrect: false },
          { text: "valuable (precious, costly, expensive)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Eminent most nearly means",
        keyWord: "Eminent",
        options: [
          { text: "ordinary (common, average, usual)", isCorrect: false },
          { text: "distinguished (prominent, renowned, notable)", isCorrect: true },
          { text: "hidden (concealed, obscure, unknown)", isCorrect: false },
          { text: "poor (impoverished, destitute, needy)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tedious most nearly means",
        keyWord: "Tedious",
        options: [
          { text: "exciting (thrilling, stimulating, lively)", isCorrect: false },
          { text: "boring (dull, monotonous, tiresome)", isCorrect: true },
          { text: "quick (fast, rapid, speedy)", isCorrect: false },
          { text: "simple (easy, straightforward, basic)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Rescind most nearly means",
        keyWord: "Rescind",
        options: [
          { text: "enforce (implement, apply, carry out)", isCorrect: false },
          { text: "cancel (revoke, annul, repeal)", isCorrect: true },
          { text: "create (make, produce, establish)", isCorrect: false },
          { text: "support (back, uphold, endorse)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Compel most nearly means",
        keyWord: "Compel",
        options: [
          { text: "allow (permit, let, enable)", isCorrect: false },
          { text: "force (oblige, require, coerce)", isCorrect: true },
          { text: "suggest (recommend, propose, advise)", isCorrect: false },
          { text: "prevent (stop, block, hinder)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Aptitude most nearly means",
        keyWord: "Aptitude",
        options: [
          { text: "dislike (aversion, hatred, repulsion)", isCorrect: false },
          { text: "ability (talent, skill, capacity)", isCorrect: true },
          { text: "failure (defeat, collapse, flop)", isCorrect: false },
          { text: "ignorance (unawareness, inexperience)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Goad most nearly means",
        keyWord: "Goad",
        options: [
          { text: "calm (soothe, pacify, tranquilize)", isCorrect: false },
          { text: "provoke (stimulate, incite, urge)", isCorrect: true },
          { text: "ignore (disregard, overlook, neglect)", isCorrect: false },
          { text: "protect (defend, shield, guard)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Concede most nearly means",
        keyWord: "Concede",
        options: [
          { text: "deny (refuse, reject, contradict)", isCorrect: false },
          { text: "admit (acknowledge, accept, yield)", isCorrect: true },
          { text: "argue (dispute, debate, quarrel)", isCorrect: false },
          { text: "celebrate (rejoice, honor, commemorate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Noble most nearly means",
        keyWord: "Noble",
        options: [
          { text: "dishonest (deceitful, corrupt, crooked)", isCorrect: false },
          { text: "honorable (admirable, dignified, virtuous)", isCorrect: true },
          { text: "poor (impoverished, broke, penniless)", isCorrect: false },
          { text: "ordinary (common, average, typical)", isCorrect: false },
        ],
        category: 2,
      },

      // Câu 11-20
      {
        questionText: "Abate most nearly means",
        keyWord: "Abate",
        options: [
          { text: "increase (grow, rise, escalate)", isCorrect: false },
          { text: "decrease (lessen, diminish, subside)", isCorrect: true },
          { text: "continue (persist, last, endure)", isCorrect: false },
          { text: "begin (start, commence, initiate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Agenda most nearly means",
        keyWord: "Agenda",
        options: [
          { text: "invitation (invite, summons, request)", isCorrect: false },
          { text: "plan (schedule, program, list of tasks)", isCorrect: true },
          { text: "equipment (tools, gear, apparatus)", isCorrect: false },
          { text: "publicity (advertising, promotion, exposure)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Frugal most nearly means",
        keyWord: "Frugal",
        options: [
          { text: "wasteful (extravagant, lavish, prodigal)", isCorrect: false },
          { text: "thrifty (economical, sparing, prudent)", isCorrect: true },
          { text: "generous (liberal, charitable, bountiful)", isCorrect: false },
          { text: "expensive (costly, dear, lavish)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Vague most nearly means",
        keyWord: "Vague",
        options: [
          { text: "clear (distinct, obvious, precise)", isCorrect: false },
          { text: "unclear (indistinct, ambiguous, hazy)", isCorrect: true },
          { text: "strong (powerful, intense, forceful)", isCorrect: false },
          { text: "bright (vivid, brilliant, shining)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Benevolent most nearly means",
        keyWord: "Benevolent",
        options: [
          { text: "cruel (mean, unkind, malicious)", isCorrect: false },
          { text: "kind (generous, charitable, good-hearted)", isCorrect: true },
          { text: "greedy (avaricious, selfish, stingy)", isCorrect: false },
          { text: "lazy (idle, indolent, slothful)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Candid most nearly means",
        keyWord: "Candid",
        options: [
          { text: "dishonest (deceitful, lying, false)", isCorrect: false },
          { text: "honest (frank, straightforward, open)", isCorrect: true },
          { text: "shy (timid, reserved, bashful)", isCorrect: false },
          { text: "arrogant (proud, haughty, conceited)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Deceive most nearly means",
        keyWord: "Deceive",
        options: [
          { text: "inform (tell, notify, enlighten)", isCorrect: false },
          { text: "trick (mislead, fool, delude)", isCorrect: true },
          { text: "help (assist, aid, support)", isCorrect: false },
          { text: "protect (guard, defend, shield)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Elude most nearly means",
        keyWord: "Elude",
        options: [
          { text: "catch (capture, seize, grab)", isCorrect: false },
          { text: "escape (evade, avoid, dodge)", isCorrect: true },
          { text: "find (discover, locate, detect)", isCorrect: false },
          { text: "face (confront, meet, encounter)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Gregarious most nearly means",
        keyWord: "Gregarious",
        options: [
          { text: "shy (timid, introverted, reserved)", isCorrect: false },
          { text: "sociable (outgoing, friendly, extroverted)", isCorrect: true },
          { text: "lonely (solitary, isolated, alone)", isCorrect: false },
          { text: "angry (furious, mad, irate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hostile most nearly means",
        keyWord: "Hostile",
        options: [
          { text: "friendly (kind, amicable, cordial)", isCorrect: false },
          { text: "unfriendly (antagonistic, aggressive, belligerent)", isCorrect: true },
          { text: "calm (peaceful, serene, tranquil)", isCorrect: false },
          { text: "happy (joyful, cheerful, delighted)", isCorrect: false },
        ],
        category: 2,
      },

      // Câu 21-30
      {
        questionText: "Impartial most nearly means",
        keyWord: "Impartial",
        options: [
          { text: "biased (prejudiced, partial, unfair)", isCorrect: false },
          { text: "fair (unbiased, neutral, objective)", isCorrect: true },
          { text: "cruel (mean, harsh, unkind)", isCorrect: false },
          { text: "generous (giving, charitable, liberal)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Jovial most nearly means",
        keyWord: "Jovial",
        options: [
          { text: "sad (depressed, gloomy, melancholy)", isCorrect: false },
          { text: "cheerful (merry, jolly, happy)", isCorrect: true },
          { text: "quiet (silent, reserved, taciturn)", isCorrect: false },
          { text: "angry (furious, enraged, irate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Lethargic most nearly means",
        keyWord: "Lethargic",
        options: [
          { text: "energetic (active, lively, vigorous)", isCorrect: false },
          { text: "sluggish (lazy, drowsy, listless)", isCorrect: true },
          { text: "quick (fast, rapid, swift)", isCorrect: false },
          { text: "strong (powerful, robust, sturdy)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Meticulous most nearly means",
        keyWord: "Meticulous",
        options: [
          { text: "careless (negligent, sloppy, hasty)", isCorrect: false },
          { text: "careful (precise, thorough, detailed)", isCorrect: true },
          { text: "quick (fast, rushed, hurried)", isCorrect: false },
          { text: "lazy (idle, indolent, slack)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Obscure most nearly means",
        keyWord: "Obscure",
        options: [
          { text: "clear (obvious, plain, evident)", isCorrect: false },
          { text: "unclear (hidden, vague, ambiguous)", isCorrect: true },
          { text: "famous (well-known, renowned, celebrated)", isCorrect: false },
          { text: "bright (vivid, shining, luminous)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Prudent most nearly means",
        keyWord: "Prudent",
        options: [
          { text: "reckless (careless, rash, impulsive)", isCorrect: false },
          { text: "cautious (wise, sensible, judicious)", isCorrect: true },
          { text: "wasteful (extravagant, prodigal, lavish)", isCorrect: false },
          { text: "greedy (avaricious, selfish, covetous)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Quaint most nearly means",
        keyWord: "Quaint",
        options: [
          { text: "modern (contemporary, new, up-to-date)", isCorrect: false },
          { text: "charming (old-fashioned, picturesque, attractive)", isCorrect: true },
          { text: "ugly (unattractive, hideous, grotesque)", isCorrect: false },
          { text: "large (big, huge, enormous)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Reluctant most nearly means",
        keyWord: "Reluctant",
        options: [
          { text: "eager (willing, enthusiastic, keen)", isCorrect: false },
          { text: "unwilling (hesitant, resistant, disinclined)", isCorrect: true },
          { text: "happy (joyful, glad, delighted)", isCorrect: false },
          { text: "brave (courageous, bold, fearless)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Stern most nearly means",
        keyWord: "Stern",
        options: [
          { text: "gentle (kind, soft, mild)", isCorrect: false },
          { text: "strict (severe, harsh, firm)", isCorrect: true },
          { text: "happy (cheerful, joyful, merry)", isCorrect: false },
          { text: "weak (feeble, frail, fragile)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tenacious most nearly means",
        keyWord: "Tenacious",
        options: [
          { text: "weak (feeble, yielding, lax)", isCorrect: false },
          { text: "persistent (stubborn, determined, resolute)", isCorrect: true },
          { text: "lazy (idle, slack, indolent)", isCorrect: false },
          { text: "forgetful (absent-minded, careless)", isCorrect: false },
        ],
        category: 2,
      },

      // Câu 31-40
      {
        questionText: "Usurp most nearly means",
        keyWord: "Usurp",
        options: [
          { text: "give (grant, bestow, donate)", isCorrect: false },
          { text: "seize (take over, appropriate, commandeer)", isCorrect: true },
          { text: "share (divide, distribute, allocate)", isCorrect: false },
          { text: "protect (guard, defend, preserve)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Wary most nearly means",
        keyWord: "Wary",
        options: [
          { text: "careless (reckless, negligent, trusting)", isCorrect: false },
          { text: "cautious (suspicious, vigilant, guarded)", isCorrect: true },
          { text: "brave (fearless, bold, daring)", isCorrect: false },
          { text: "happy (cheerful, joyful, content)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Zealous most nearly means",
        keyWord: "Zealous",
        options: [
          { text: "indifferent (apathetic, unconcerned, passive)", isCorrect: false },
          { text: "enthusiastic (fervent, passionate, ardent)", isCorrect: true },
          { text: "lazy (idle, lethargic, slack)", isCorrect: false },
          { text: "calm (peaceful, serene, tranquil)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Audacious most nearly means",
        keyWord: "Audacious",
        options: [
          { text: "timid (shy, fearful, cautious)", isCorrect: false },
          { text: "bold (daring, courageous, fearless)", isCorrect: true },
          { text: "quiet (silent, reserved, meek)", isCorrect: false },
          { text: "weak (frail, powerless, feeble)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Belligerent most nearly means",
        keyWord: "Belligerent",
        options: [
          { text: "peaceful (calm, friendly, amicable)", isCorrect: false },
          { text: "hostile (aggressive, warlike, combative)", isCorrect: true },
          { text: "happy (cheerful, joyful, content)", isCorrect: false },
          { text: "generous (kind, giving, charitable)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Capricious most nearly means",
        keyWord: "Capricious",
        options: [
          { text: "predictable (steady, consistent, reliable)", isCorrect: false },
          { text: "unpredictable (changeable, fickle, whimsical)", isCorrect: true },
          { text: "strong (powerful, firm, stable)", isCorrect: false },
          { text: "careful (cautious, prudent, thoughtful)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Diligent most nearly means",
        keyWord: "Diligent",
        options: [
          { text: "lazy (idle, slack, negligent)", isCorrect: false },
          { text: "hardworking (industrious, persistent, thorough)", isCorrect: true },
          { text: "careless (sloppy, hasty, reckless)", isCorrect: false },
          { text: "slow (lethargic, sluggish, tardy)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ephemeral most nearly means",
        keyWord: "Ephemeral",
        options: [
          { text: "permanent (lasting, enduring, eternal)", isCorrect: false },
          { text: "short-lived (transient, fleeting, temporary)", isCorrect: true },
          { text: "strong (durable, robust, sturdy)", isCorrect: false },
          { text: "beautiful (lovely, attractive, stunning)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fortitude most nearly means",
        keyWord: "Fortitude",
        options: [
          { text: "weakness (frailty, timidity, cowardice)", isCorrect: false },
          { text: "courage (strength, resilience, endurance)", isCorrect: true },
          { text: "fear (terror, dread, anxiety)", isCorrect: false },
          { text: "laziness (idleness, apathy, sloth)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hinder most nearly means",
        keyWord: "Hinder",
        options: [
          { text: "help (assist, aid, facilitate)", isCorrect: false },
          { text: "obstruct (block, impede, delay)", isCorrect: true },
          { text: "encourage (promote, support, motivate)", isCorrect: false },
          { text: "speed (accelerate, hasten, quicken)", isCorrect: false },
        ],
        category: 2,
      },

      // Câu 41-50
      {
        questionText: "Imminent most nearly means",
        keyWord: "Imminent",
        options: [
          { text: "distant (far, remote, delayed)", isCorrect: false },
          { text: "near (approaching, impending, forthcoming)", isCorrect: true },
          { text: "hidden (concealed, secret, obscure)", isCorrect: false },
          { text: "past (previous, former, bygone)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Languid most nearly means",
        keyWord: "Languid",
        options: [
          { text: "energetic (lively, vigorous, active)", isCorrect: false },
          { text: "weak (listless, sluggish, faint)", isCorrect: true },
          { text: "strong (powerful, robust, sturdy)", isCorrect: false },
          { text: "happy (cheerful, joyful, excited)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mitigate most nearly means",
        keyWord: "Mitigate",
        options: [
          { text: "worsen (aggravate, intensify, exacerbate)", isCorrect: false },
          { text: "lessen (reduce, alleviate, soften)", isCorrect: true },
          { text: "increase (enlarge, amplify, heighten)", isCorrect: false },
          { text: "ignore (disregard, overlook, neglect)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Noxious most nearly means",
        keyWord: "Noxious",
        options: [
          { text: "harmless (safe, benign, innocuous)", isCorrect: false },
          { text: "harmful (toxic, poisonous, dangerous)", isCorrect: true },
          { text: "pleasant (nice, agreeable, delightful)", isCorrect: false },
          { text: "clean (pure, fresh, sanitary)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ostentatious most nearly means",
        keyWord: "Ostentatious",
        options: [
          { text: "modest (simple, humble, unpretentious)", isCorrect: false },
          { text: "showy (flashy, pretentious, flamboyant)", isCorrect: true },
          { text: "quiet (subdued, reserved, understated)", isCorrect: false },
          { text: "poor (plain, basic, inexpensive)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Plausible most nearly means",
        keyWord: "Plausible",
        options: [
          { text: "impossible (unbelievable, improbable, absurd)", isCorrect: false },
          { text: "believable (reasonable, credible, likely)", isCorrect: true },
          { text: "false (untrue, fabricated, deceptive)", isCorrect: false },
          { text: "strange (odd, bizarre, unusual)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Querulous most nearly means",
        keyWord: "Querulous",
        options: [
          { text: "cheerful (happy, contented, pleasant)", isCorrect: false },
          { text: "complaining (whining, fretful, peevish)", isCorrect: true },
          { text: "quiet (silent, reserved, calm)", isCorrect: false },
          { text: "brave (courageous, bold, fearless)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Reticent most nearly means",
        keyWord: "Reticent",
        options: [
          { text: "talkative (chatty, loquacious, garrulous)", isCorrect: false },
          { text: "reserved (quiet, silent, uncommunicative)", isCorrect: true },
          { text: "angry (irate, furious, mad)", isCorrect: false },
          { text: "happy (joyful, merry, gleeful)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Sporadic most nearly means",
        keyWord: "Sporadic",
        options: [
          { text: "constant (continuous, regular, steady)", isCorrect: false },
          { text: "occasional (irregular, intermittent, infrequent)", isCorrect: true },
          { text: "frequent (often, common, habitual)", isCorrect: false },
          { text: "permanent (lasting, enduring, fixed)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tenuous most nearly means",
        keyWord: "Tenuous",
        options: [
          { text: "strong (solid, firm, substantial)", isCorrect: false },
          { text: "weak (slight, fragile, flimsy)", isCorrect: true },
          { text: "clear (obvious, distinct, evident)", isCorrect: false },
          { text: "permanent (durable, lasting, stable)", isCorrect: false },
        ],
        category: 2,
      },

      // Câu 51-65
      {
        questionText: "Unprecedented most nearly means",
        keyWord: "Unprecedented",
        options: [
          { text: "common (usual, ordinary, familiar)", isCorrect: false },
          { text: "unusual (new, novel, without previous example)", isCorrect: true },
          { text: "expected (anticipated, predicted, foreseen)", isCorrect: false },
          { text: "repeated (recurring, frequent, habitual)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Verbose most nearly means",
        keyWord: "Verbose",
        options: [
          { text: "concise (brief, short, succinct)", isCorrect: false },
          { text: "wordy (talkative, long-winded, prolix)", isCorrect: true },
          { text: "quiet (silent, reserved, taciturn)", isCorrect: false },
          { text: "clear (simple, straightforward, lucid)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Wane most nearly means",
        keyWord: "Wane",
        options: [
          { text: "increase (grow, rise, wax)", isCorrect: false },
          { text: "decrease (decline, diminish, fade)", isCorrect: true },
          { text: "stay (remain, continue, persist)", isCorrect: false },
          { text: "begin (start, commence, initiate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Zealot most nearly means",
        keyWord: "Zealot",
        options: [
          { text: "indifferent (apathetic, unconcerned, passive)", isCorrect: false },
          { text: "fanatic (extremist, enthusiast, devotee)", isCorrect: true },
          { text: "calm (peaceful, moderate, balanced)", isCorrect: false },
          { text: "doubtful (skeptical, hesitant, uncertain)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Acrimonious most nearly means",
        keyWord: "Acrimonious",
        options: [
          { text: "friendly (amicable, pleasant, agreeable)", isCorrect: false },
          { text: "bitter (hostile, rancorous, spiteful)", isCorrect: true },
          { text: "sweet (kind, gentle, harmonious)", isCorrect: false },
          { text: "calm (peaceful, serene, tranquil)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Bucolic most nearly means",
        keyWord: "Bucolic",
        options: [
          { text: "urban (city, metropolitan, cosmopolitan)", isCorrect: false },
          { text: "rural (pastoral, countryside, rustic)", isCorrect: true },
          { text: "modern (contemporary, advanced, high-tech)", isCorrect: false },
          { text: "noisy (loud, bustling, chaotic)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Cacophony most nearly means",
        keyWord: "Cacophony",
        options: [
          { text: "harmony (melody, concord, euphony)", isCorrect: false },
          { text: "discord (noise, racket, harsh sound)", isCorrect: true },
          { text: "silence (quiet, stillness, peace)", isCorrect: false },
          { text: "music (melody, tune, rhythm)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Debacle most nearly means",
        keyWord: "Debacle",
        options: [
          { text: "success (victory, triumph, achievement)", isCorrect: false },
          { text: "failure (disaster, fiasco, collapse)", isCorrect: true },
          { text: "plan (strategy, scheme, project)", isCorrect: false },
          { text: "victory (win, conquest, success)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ebullient most nearly means",
        keyWord: "Ebullient",
        options: [
          { text: "depressed (sad, gloomy, melancholy)", isCorrect: false },
          { text: "enthusiastic (exuberant, bubbly, lively)", isCorrect: true },
          { text: "calm (serene, composed, quiet)", isCorrect: false },
          { text: "tired (exhausted, weary, fatigued)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Facetious most nearly means",
        keyWord: "Facetious",
        options: [
          { text: "serious (earnest, solemn, grave)", isCorrect: false },
          { text: "humorous (joking, witty, flippant)", isCorrect: true },
          { text: "angry (irate, furious, mad)", isCorrect: false },
          { text: "sad (melancholy, sorrowful, depressed)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Garrulous most nearly means",
        keyWord: "Garrulous",
        options: [
          { text: "quiet (silent, reserved, taciturn)", isCorrect: false },
          { text: "talkative (chatty, loquacious, verbose)", isCorrect: true },
          { text: "shy (timid, bashful, reticent)", isCorrect: false },
          { text: "angry (hostile, belligerent, irate)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Hapless most nearly means",
        keyWord: "Hapless",
        options: [
          { text: "lucky (fortunate, blessed, prosperous)", isCorrect: false },
          { text: "unlucky (unfortunate, unlucky, doomed)", isCorrect: true },
          { text: "rich (wealthy, affluent, prosperous)", isCorrect: false },
          { text: "happy (joyful, cheerful, content)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Iconoclast most nearly means",
        keyWord: "Iconoclast",
        options: [
          { text: "follower (conformist, traditionalist, supporter)", isCorrect: false },
          { text: "rebel (nonconformist, maverick, destroyer of idols)", isCorrect: true },
          { text: "believer (devout, faithful, adherent)", isCorrect: false },
          { text: "artist (creator, painter, sculptor)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Juxtapose most nearly means",
        keyWord: "Juxtapose",
        options: [
          { text: "separate (divide, isolate, detach)", isCorrect: false },
          { text: "place side by side (compare, contrast, set together)", isCorrect: true },
          { text: "hide (conceal, obscure, cover)", isCorrect: false },
          { text: "destroy (demolish, ruin, dismantle)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Languor most nearly means",
        keyWord: "Languor",
        options: [
          { text: "energy (vigor, vitality, liveliness)", isCorrect: false },
          { text: "lethargy (listlessness, weakness, fatigue)", isCorrect: true },
          { text: "strength (power, force, robustness)", isCorrect: false },
          { text: "happiness (joy, delight, cheer)", isCorrect: false },
        ],
        category: 2,
      },
    ];

    const quiz = await Quiz.create({
      title: "Word Knowledge Practice Test 7 (65 questions - ASVAB 2025-2026)",
      description: "Bộ 65 câu Word Knowledge mới - từ vựng phổ biến ASVAB 2025-2026, kèm từ đồng nghĩa, đáp án chuẩn 100%",
      price: 0,
    });

    const questionsWithId = questions.map(q => ({ ...q, quizId: quiz._id }));

    const inserted = await Question.insertMany(questionsWithId);
    console.log(`Đã chèn ${inserted.length}/65 câu thành công`);

    await Quiz.findByIdAndUpdate(quiz._id, {
      $push: { questions: { $each: inserted.map(q => q._id) } },
    });

    console.log("Word Knowledge Practice Test 7 (65 questions) created successfully!");

  } catch (err) {
    console.error("Lỗi:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Đã ngắt kết nối DB");
  }
};

createWordKnowledgeQuiz();