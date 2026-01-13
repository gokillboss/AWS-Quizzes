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
          { text: "taunt (mock, tease, ridicule)",     isCorrect: false },
          { text: "repartee (witty reply, banter, quick response)",  isCorrect: true  },
          { text: "ridicule (deride, mock, scorn)",  isCorrect: false },
          { text: "reproach (scold, blame, rebuke)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Credible most nearly means",
        keyWord: "Credible",
        options: [
          { text: "believable (plausible, convincing, trustworthy)", isCorrect: true  },
          { text: "secretive (hidden, confidential, private)",  isCorrect: false },
          { text: "annoyed (irritated, bothered, vexed)",    isCorrect: false },
          { text: "unlikely (improbable, doubtful, far-fetched)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Erode most nearly means",
        keyWord: "Erode",
        options: [
          { text: "chop (cut, hack, slice)",        isCorrect: false },
          { text: "deteriorate (wear away, decay, degrade)", isCorrect: true  },
          { text: "scrub (clean, scour, rub)",       isCorrect: false },
          { text: "repair (fix, restore, mend)",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Generate most nearly means",
        keyWord: "Generate",
        options: [
          { text: "consider (think about, contemplate, ponder)",  isCorrect: false },
          { text: "create (produce, make, originate)",    isCorrect: true  },
          { text: "boil over (overflow, spill, erupt)", isCorrect: false },
          { text: "take (grab, receive, accept)",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mode most nearly means",
        keyWord: "Mode",
        options: [
          { text: "resource (means, asset, supply)", isCorrect: false },
          { text: "alone (solitary, single, isolated)",    isCorrect: false },
          { text: "octave (musical interval, eight notes)",   isCorrect: false },
          { text: "way (method, manner, style)",      isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Foil most nearly means",
        keyWord: "Foil",
        options: [
          { text: "wrapping (cover, packaging, aluminum)", isCorrect: false },
          { text: "confer (discuss, consult, bestow)",   isCorrect: false },
          { text: "aggravate (worsen, irritate, annoy)",isCorrect: false },
          { text: "prevent (stop, thwart, hinder)",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Chamber most nearly means",
        keyWord: "Chamber",
        options: [
          { text: "enclosed space (room, cavity, compartment)", isCorrect: true  },
          { text: "passageway (corridor, hallway, channel)",     isCorrect: false },
          { text: "trough (container, basin, channel)",         isCorrect: false },
          { text: "shelf (ledge, rack, bracket)",          isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Aide most nearly means",
        keyWord: "Aide",
        options: [
          { text: "abet (assist, encourage, support – thường tiêu cực)",    isCorrect: false },
          { text: "teacher (instructor, educator, tutor)", isCorrect: false },
          { text: "creator (maker, originator, designer)", isCorrect: false },
          { text: "helper (assistant, supporter, aide-de-camp)",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Stump most nearly means",
        keyWord: "Stump",
        options: [
          { text: "confuse (puzzle, perplex, baffle)",  isCorrect: true  },
          { text: "chop (cut, hack, fell)",     isCorrect: false },
          { text: "pound (hit, strike, crush)",    isCorrect: false },
          { text: "clarify (explain, make clear, elucidate)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Insist most nearly means",
        keyWord: "Insist",
        options: [
          { text: "continue (keep going, persist, proceed)", isCorrect: false },
          { text: "assert (declare, state, affirm)",   isCorrect: false },
          { text: "wish (hope, desire, want)",     isCorrect: false },
          { text: "demand (require, urge, press)",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Bland most nearly means",
        keyWord: "Bland",
        options: [
          { text: "uninteresting (dull, boring, tasteless)", isCorrect: true  },
          { text: "tiny (small, little, miniature)",          isCorrect: false },
          { text: "dramatic (exciting, theatrical, striking)",      isCorrect: false },
          { text: "rough (coarse, harsh, uneven)",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Sentinel most nearly means",
        keyWord: "Sentinel",
        options: [
          { text: "aggressor (attacker, invader, assailant)", isCorrect: false },
          { text: "lookout (guard, watchman, sentry)",   isCorrect: true  },
          { text: "coward (chicken, weakling, deserter)",    isCorrect: false },
          { text: "reveler (partier, celebrator, merrymaker)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Repeal most nearly means",
        keyWord: "Repeal",
        options: [
          { text: "yell (shout, scream, cry out)",   isCorrect: false },
          { text: "hold (keep, retain, maintain)",   isCorrect: false },
          { text: "ignore (disregard, overlook, neglect)", isCorrect: false },
          { text: "cancel (revoke, annul, abolish)", isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Labor most nearly means",
        keyWord: "Labor",
        options: [
          { text: "think (consider, ponder, reflect)",      isCorrect: false },
          { text: "illuminate (light up, brighten, clarify)", isCorrect: false },
          { text: "market (sell, promote, trade)",     isCorrect: false },
          { text: "work (effort, toil, exertion)",       isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Aberration most nearly means",
        keyWord: "Aberration",
        options: [
          { text: "anomaly (irregularity, deviation, oddity)",     isCorrect: true  },
          { text: "commonplace (ordinary, usual, normal)", isCorrect: false },
          { text: "disgusting (repulsive, revolting, nasty)",  isCorrect: false },
          { text: "revered (respected, admired, venerated)",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Winsome most nearly means",
        keyWord: "Winsome",
        options: [
          { text: "hardy (strong, robust, tough)",     isCorrect: false },
          { text: "difficult (hard, challenging, tough)", isCorrect: false },
          { text: "windy (breezy, gusty, blustery)",     isCorrect: false },
          { text: "charming (attractive, pleasing, engaging)",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Initial most nearly means",
        keyWord: "Initial",
        options: [
          { text: "first (beginning, primary, original)",     isCorrect: true  },
          { text: "exception (special case, anomaly, deviation)", isCorrect: false },
          { text: "new (fresh, recent, novel)",       isCorrect: false },
          { text: "tragic (sad, disastrous, unfortunate)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Rabid most nearly means",
        keyWord: "Rabid",
        options: [
          { text: "generous (giving, charitable, liberal)",  isCorrect: false },
          { text: "sickly (unhealthy, ill, frail)",    isCorrect: false },
          { text: "fanatical (extreme, zealous, obsessive)", isCorrect: true  },
          { text: "deepen (intensify, increase, strengthen)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mobile most nearly means",
        keyWord: "Mobile",
        options: [
          { text: "movable (portable, transportable, flexible)",  isCorrect: true  },
          { text: "fixed (stationary, permanent, set)",    isCorrect: false },
          { text: "cellular (phone-related, mobile network)", isCorrect: false },
          { text: "turning (rotating, spinning, revolving)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Solicit most nearly means",
        keyWord: "Solicit",
        options: [
          { text: "decry (criticize, condemn, denounce)",  isCorrect: false },
          { text: "evoke (call forth, summon, elicit)",  isCorrect: false },
          { text: "drag (pull, haul, tug)",   isCorrect: false },
          { text: "request (ask, seek, petition)",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Fallacy most nearly means",
        keyWord: "Fallacy",
        options: [
          { text: "misnomer (wrong name, mislabeling)",     isCorrect: false },
          { text: "misconception (false belief, error, delusion)",isCorrect: true  },
          { text: "truth (fact, reality, verity)",        isCorrect: false },
          { text: "ersatz (fake, substitute, imitation)",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "External most nearly means",
        keyWord: "External",
        options: [
          { text: "during the night (nocturnal, nighttime)", isCorrect: false },
          { text: "after the fact (subsequent, later, retrospective)",   isCorrect: false },
          { text: "outer surface (outside, exterior, outward)",    isCorrect: true  },
          { text: "transcendental (spiritual, metaphysical, mystical)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Vociferous most nearly means",
        keyWord: "Vociferous",
        options: [
          { text: "noisome (foul, offensive, smelly)", isCorrect: false },
          { text: "vehement (forceful, passionate, intense)",isCorrect: true  },
          { text: "plant-like (vegetal, botanical)",isCorrect: false },
          { text: "strong (powerful, robust, sturdy)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Convert most nearly means",
        keyWord: "Convert",
        options: [
          { text: "change (transform, alter, modify)", isCorrect: true  },
          { text: "prevail (triumph, succeed, dominate)",isCorrect: false },
          { text: "belie (contradict, misrepresent)",  isCorrect: false },
          { text: "track (follow, trace, pursue)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Consider most nearly means",
        keyWord: "Consider",
        options: [
          { text: "tarry (linger, delay, dawdle)",  isCorrect: false },
          { text: "dawdle (waste time, loiter, idle)", isCorrect: false },
          { text: "defy (resist, oppose, challenge)",   isCorrect: false },
          { text: "think (ponder, reflect, contemplate)",  isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Prompt most nearly means",
        keyWord: "Prompt",
        options: [
          { text: "arrogant (haughty, conceited, proud)", isCorrect: false },
          { text: "slow (leisurely, tardy, delayed)",     isCorrect: false },
          { text: "fast (quick, rapid, swift)",     isCorrect: true  },
          { text: "bright (shiny, intelligent, vivid)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Turpitude most nearly means",
        keyWord: "Turpitude",
        options: [
          { text: "depravity (corruption, wickedness, immorality)", isCorrect: true  },
          { text: "strength (power, force, vigor)",  isCorrect: false },
          { text: "justice (fairness, righteousness, equity)",   isCorrect: false },
          { text: "piousness (devoutness, holiness, reverence)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Makeshift most nearly means",
        keyWord: "Makeshift",
        options: [
          { text: "permanent (lasting, enduring, fixed)",   isCorrect: false },
          { text: "adversarial (hostile, opposing, antagonistic)", isCorrect: false },
          { text: "substitute (temporary, improvised, stopgap)",  isCorrect: true  },
          { text: "difficult (hard, challenging, tough)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Comprise most nearly means",
        keyWord: "Comprise",
        options: [
          { text: "create (make, produce, generate)",         isCorrect: false },
          { text: "is composed of (consist of, include, contain)", isCorrect: true  },
          { text: "track (follow, trace, monitor)",          isCorrect: false },
          { text: "herald (announce, proclaim, signal)",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Spurious most nearly means",
        keyWord: "Spurious",
        options: [
          { text: "prickly (thorny, spiny, irritable)",   isCorrect: false },
          { text: "dangerous (hazardous, risky, perilous)", isCorrect: false },
          { text: "nonsense (absurd, meaningless, foolish)",  isCorrect: false },
          { text: "bogus (fake, false, counterfeit)",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Expanse most nearly means",
        keyWord: "Expanse",
        options: [
          { text: "cost (price, expense, charge)",   isCorrect: false },
          { text: "growth (increase, expansion, development)", isCorrect: false },
          { text: "area (space, stretch, extent)",   isCorrect: true  },
          { text: "beat (rhythm, pulse, strike)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Fearsome most nearly means",
        keyWord: "Fearsome",
        options: [
          { text: "menacing (threatening, intimidating, frightening)",  isCorrect: true  },
          { text: "calming (soothing, peaceful, relaxing)",   isCorrect: false },
          { text: "noxious (harmful, poisonous, toxic)",   isCorrect: false },
          { text: "teary-eyed (emotional, weeping, crying)",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Sophomoric most nearly means",
        keyWord: "Sophomoric",
        options: [
          { text: "afraid (fearful, scared, frightened)",      isCorrect: false },
          { text: "pretentious (immature, cocky, know-it-all)", isCorrect: true  },
          { text: "emotional (sentimental, passionate, sensitive)",   isCorrect: false },
          { text: "defiant (rebellious, resistant, bold)",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Exasperate most nearly means",
        keyWord: "Exasperate",
        options: [
          { text: "infer (conclude, deduce, imply)",    isCorrect: false },
          { text: "confuse (bewilder, puzzle, perplex)",  isCorrect: false },
          { text: "drag out (prolong, extend, lengthen)", isCorrect: false },
          { text: "infuriate (enrage, anger, madden)",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Scarcity most nearly means",
        keyWord: "Scarcity",
        options: [
          { text: "majority (most, bulk, preponderance)", isCorrect: false },
          { text: "shortage (lack, deficiency, insufficiency)", isCorrect: true  },
          { text: "surplus (excess, abundance, overage)",  isCorrect: false },
          { text: "abundance (plenty, wealth, profusion)",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Resist most nearly means",
        keyWord: "Resist",
        options: [
          { text: "withstand (endure, bear, oppose)", isCorrect: true  },
          { text: "hold (grasp, retain, contain)",      isCorrect: false },
          { text: "divide (split, separate, partition)",    isCorrect: false },
          { text: "conduct (lead, guide, transmit)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ersatz most nearly means",
        keyWord: "Ersatz",
        options: [
          { text: "fake (artificial, imitation, substitute)",     isCorrect: true  },
          { text: "genuine (real, authentic, true)",  isCorrect: false },
          { text: "authentic (genuine, real, legitimate)",isCorrect: false },
          { text: "green (inexperienced, naive, eco-friendly)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Portend most nearly means",
        keyWord: "Portend",
        options: [
          { text: "surprise (astonish, amaze, startle)",   isCorrect: false },
          { text: "contrast (difference, opposition, compare)",   isCorrect: false },
          { text: "vicissitude (change, fluctuation, variation)",isCorrect: false },
          { text: "be a warning (foretell, predict, foreshadow)",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Lucid most nearly means",
        keyWord: "Lucid",
        options: [
          { text: "relaxed (calm, easygoing, laid-back)",      isCorrect: false },
          { text: "incoherent (confused, disjointed, unclear)",   isCorrect: false },
          { text: "understandable (clear, comprehensible, intelligible)",isCorrect: true  },
          { text: "confused (bewildered, muddled, disoriented)",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Ostracized most nearly means",
        keyWord: "Ostracized",
        options: [
          { text: "brought in (included, welcomed, accepted)", isCorrect: false },
          { text: "excluded (shunned, banished, rejected)",   isCorrect: true  },
          { text: "parted (separated, divided, split)",     isCorrect: false },
          { text: "captivated (fascinated, charmed, enthralled)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Allure most nearly means",
        keyWord: "Allure",
        options: [
          { text: "tempt (attract, entice, seduce)",  isCorrect: true  },
          { text: "trick (deceive, fool, mislead)",  isCorrect: false },
          { text: "tease (taunt, mock, provoke)",  isCorrect: false },
          { text: "sneak (creep, stealth, slink)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Gleeful most nearly means",
        keyWord: "Gleeful",
        options: [
          { text: "delirious (frantic, wild, ecstatic)", isCorrect: false },
          { text: "joyful (happy, delighted, cheerful)",    isCorrect: true  },
          { text: "displeased (unhappy, annoyed, dissatisfied)",isCorrect: false },
          { text: "derisive (mocking, scornful, ridiculing)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Tranquilize most nearly means",
        keyWord: "Tranquilize",
        options: [
          { text: "sedate (calm, pacify, soothe)",  isCorrect: true  },
          { text: "trick (deceive, fool, mislead)",   isCorrect: false },
          { text: "deride (mock, ridicule, scorn)",  isCorrect: false },
          { text: "overdose (excess, too much, poison)",isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Oppose most nearly means",
        keyWord: "Oppose",
        options: [
          { text: "irk (annoy, irritate, bother)",       isCorrect: false },
          { text: "cooperate (collaborate, assist, help)", isCorrect: false },
          { text: "resist (fight, withstand, defy)",    isCorrect: true  },
          { text: "argue (debate, dispute, quarrel)",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Mores most nearly means",
        keyWord: "Mores",
        options: [
          { text: "customs (traditions, conventions, norms)",   isCorrect: true  },
          { text: "types (kinds, varieties, categories)",     isCorrect: false },
          { text: "anomalies (irregularities, exceptions, oddities)", isCorrect: false },
          { text: "data (information, facts, statistics)",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Chap most nearly means",
        keyWord: "Chap",
        options: [
          { text: "tangle (knot, confuse, entangle)",       isCorrect: false },
          { text: "expose (reveal, uncover, disclose)",       isCorrect: false },
          { text: "irate (angry, furious, enraged)",        isCorrect: false },
          { text: "become chafed (irritate, rub, chafe)",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Overbearing most nearly means",
        keyWord: "Overbearing",
        options: [
          { text: "overwhelming (overpowering, crushing, intense)", isCorrect: false },
          { text: "bossy (domineering, authoritarian, controlling)",        isCorrect: true  },
          { text: "grouchy (irritable, bad-tempered, grumpy)",      isCorrect: false },
          { text: "tough (strong, resilient, difficult)",        isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Equity most nearly means",
        keyWord: "Equity",
        options: [
          { text: "fairness (justice, impartiality, equality)",   isCorrect: true  },
          { text: "devaluation (depreciation, reduction, decline)",isCorrect: false },
          { text: "privacy (secrecy, confidentiality, seclusion)",    isCorrect: false },
          { text: "earnings (income, profit, revenue)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Subtle most nearly means",
        keyWord: "Subtle",
        options: [
          { text: "understated (delicate, faint, discreet)", isCorrect: true  },
          { text: "conspicuous (obvious, noticeable, prominent)", isCorrect: false },
          { text: "suggestive (implying, evocative, hinting)",  isCorrect: false },
          { text: "harsh (severe, rough, cruel)",       isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Pecuniary most nearly means",
        keyWord: "Pecuniary",
        options: [
          { text: "strange (odd, unusual, weird)",     isCorrect: false },
          { text: "out of place (inappropriate, unsuitable)",isCorrect: false },
          { text: "economic (financial, monetary, fiscal)",    isCorrect: true  },
          { text: "disjointed (disconnected, incoherent, fragmented)",  isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Temporary most nearly means",
        keyWord: "Temporary",
        options: [
          { text: "permanent (lasting, enduring, fixed)",   isCorrect: false },
          { text: "impermanent (transient, short-lived, fleeting)", isCorrect: true  },
          { text: "drafted (prepared, written, conscripted)",     isCorrect: false },
          { text: "sticky (adhesive, tacky, gluey)",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Insightful most nearly means",
        keyWord: "Insightful",
        options: [
          { text: "blind (unseeing, unaware, ignorant)",    isCorrect: false },
          { text: "ignorant (uninformed, unaware, uneducated)", isCorrect: false },
          { text: "dull (boring, slow, unintelligent)",     isCorrect: false },
          { text: "perceptive (observant, discerning, sharp)",isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Superficial most nearly means",
        keyWord: "Superficial",
        options: [
          { text: "without depth (shallow, surface-level, cursory)", isCorrect: true  },
          { text: "thorough (complete, detailed, exhaustive)",      isCorrect: false },
          { text: "genuine (real, authentic, sincere)",       isCorrect: false },
          { text: "sensible (reasonable, practical, wise)",      isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Render most nearly means",
        keyWord: "Render",
        options: [
          { text: "fail (unsuccessful, collapse, disappoint)",    isCorrect: false },
          { text: "win (succeed, triumph, achieve)",     isCorrect: false },
          { text: "deliver (provide, give, supply)", isCorrect: true  },
          { text: "hold (grasp, retain, contain)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Constant most nearly means",
        keyWord: "Constant",
        options: [
          { text: "intermittent (occasional, periodic, irregular)", isCorrect: false },
          { text: "unchanging (steady, stable, consistent)",   isCorrect: true  },
          { text: "dreadful (terrible, awful, horrible)",     isCorrect: false },
          { text: "periodic (recurring, intermittent, cyclical)",     isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Commission most nearly means",
        keyWord: "Commission",
        options: [
          { text: "delegation (assignment, task, group)", isCorrect: true  },
          { text: "force (power, strength, compel)",      isCorrect: false },
          { text: "recreation (leisure, amusement, entertainment)", isCorrect: false },
          { text: "assignor (giver, transferor, delegator)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Venture most nearly means",
        keyWord: "Venture",
        options: [
          { text: "cower (shrink, cringe, tremble)",     isCorrect: false },
          { text: "inaction (idleness, inactivity, passivity)",  isCorrect: false },
          { text: "endeavor (attempt, effort, undertaking)",  isCorrect: true  },
          { text: "persevere (persist, continue, endure)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Range most nearly means",
        keyWord: "Range",
        options: [
          { text: "part (portion, segment, piece)",     isCorrect: false },
          { text: "end (finish, conclusion, terminate)",      isCorrect: false },
          { text: "movement (motion, activity, change)", isCorrect: false },
          { text: "vary (differ, fluctuate, change)",     isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Scheme most nearly means",
        keyWord: "Scheme",
        options: [
          { text: "plan (strategy, design, plot)",      isCorrect: true  },
          { text: "schedule (timetable, program, agenda)",  isCorrect: false },
          { text: "suggestion (idea, proposal, hint)",isCorrect: false },
          { text: "theory (hypothesis, concept, belief)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Plea most nearly means",
        keyWord: "Plea",
        options: [
          { text: "demand (require, insist, claim)",  isCorrect: false },
          { text: "answer (reply, response, solution)",  isCorrect: false },
          { text: "request (appeal, petition, entreaty)", isCorrect: true  },
          { text: "offer (propose, provide, present)",   isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Stake most nearly means",
        keyWord: "Stake",
        options: [
          { text: "meat (flesh, beef, food)",      isCorrect: false },
          { text: "post (pole, pillar, support)",      isCorrect: true },
          { text: "steal (take, rob, pilfer)",     isCorrect: false },
          { text: "embellish (decorate, adorn, enhance)", isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Attribute most nearly means",
        keyWord: "Attribute",
        options: [
          { text: "guilt (blame, fault, responsibility)",         isCorrect: false },
          { text: "characteristic (quality, feature, trait)",isCorrect: true  },
          { text: "thing (object, item, article)",         isCorrect: false },
          { text: "roast (cook, criticize, tease)",         isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Awesome most nearly means",
        keyWord: "Awesome",
        options: [
          { text: "extreme (intense, severe, radical)",   isCorrect: false },
          { text: "radical (extreme, revolutionary, drastic)",   isCorrect: false },
          { text: "impressive (amazing, remarkable, awe-inspiring)",isCorrect: true  },
          { text: "tricky (deceptive, difficult, cunning)",    isCorrect: false },
        ],
        category: 2,
      },
      {
        questionText: "Provoke most nearly means",
        keyWord: "Provoke",
        options: [
          { text: "ignore (disregard, overlook, neglect)",  isCorrect: false },
          { text: "curtail (reduce, limit, shorten)", isCorrect: false },
          { text: "emulate (imitate, copy, follow)", isCorrect: false },
          { text: "annoy (irritate, anger, bother)",   isCorrect: true  },
        ],
        category: 2,
      },
      {
        questionText: "Cite most nearly means",
        keyWord: "Cite",
        options: [
          { text: "earmark (designate, reserve, allocate)", isCorrect: false },
          { text: "quote (reference, mention, recite)",   isCorrect: true  },
          { text: "target (aim, focus, goal)",  isCorrect: false },
          { text: "place (put, position, locate)",   isCorrect: false },
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
    console.log(`Đã chèn ${inserted.length}/65 câu thành công`);

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