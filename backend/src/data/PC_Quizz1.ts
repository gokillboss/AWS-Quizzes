// readingSeed.ts (đã sửa hoàn chỉnh theo yêu cầu)
import mongoose from "mongoose";
import Quiz from "../models/quizModel";
import Question from "../models/questionModel";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface ReadingQuestion {
  questionText: string;  // Bây giờ đã bao gồm cả passage + câu hỏi thực tế
  keyWord: string;
  options: Option[];
  category: number;
  quizId?: mongoose.Types.ObjectId;
}

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/AWS_Quiz";
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const createReadingExam = async () => {
  await connectDB();

  try {
    await Quiz.deleteMany({ title: "Reading Comprehension Test" });

    const readingQuestions: ReadingQuestion[] = [
      {
        questionText:
          "An important stage of personal time management is to take control of appointments. Determined by external obligation, appointments constitute interaction with other people and an agreed-on interface between your activities and those of others. Start with a simple appointment diary. List all appointments, including regular and recurring ones. Now, be ruthless and eliminate the unnecessary. There may be committees where you can’t productively contribute or where a subordinate may be able to participate. Eliminate the waste of your time. Effectively managing your appointments allows you to",
        keyWord: "",
        options: [
          { text: "(A) spend more time with your subordinates.", isCorrect: false },
          { text: "(B) delegate responsibility to subordinates.", isCorrect: false },
          { text: "(C) make more efficient use of your time.", isCorrect: true },
          { text: "(D) attend only the most important meetings.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "The U.S. Congress consists of 100 senators and 435 representatives. Two senators are elected from each state. The number of representatives from each state is based on population, although each state has at least one representative. Senators serve six-year terms, and representatives serve two-year terms. According to this passage,",
        keyWord: "",
        options: [
          { text: "(A) there are equal numbers of senators and representatives.", isCorrect: false },
          { text: "(B) the number of representatives from each state is decided by a lottery.", isCorrect: false },
          { text: "(C) it’s possible for a state to have no representatives.", isCorrect: false },
          { text: "(D) senators and representatives have different term lengths.", isCorrect: true },
        ],
        category: 1,
      },
      {
        questionText:
          "Indo-European languages consist of those languages spoken by most of Europe and in those parts of the world that Europeans have colonized since the 16th century (such as the United States). Indo-European languages are also spoken in India, Iran, parts of western Afghanistan, and in some areas of Asia. The author of this passage would agree that",
        keyWord: "",
        options: [
          { text: "(A) Indo-European languages are spoken in areas all over the world.", isCorrect: true },
          { text: "(B) Indo-European languages include all the languages spoken in the world.", isCorrect: false },
          { text: "(C) only Europeans speak Indo-European languages.", isCorrect: false },
          { text: "(D) Indo-European language speakers can easily understand one another.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "In privatization, the government relies on the private sector to provide a service. However, the government divests itself of the entire process, including all assets. With privatized functions, the government may specify quality, quantity, and timeliness requirements, but it has no control over the operations of the activity. Also, the government may not be the only customer. Whomever the government chooses to provide the services would likely provide the same services to others. This paragraph best supports the statement that",
        keyWord: "",
        options: [
          { text: "(A) the government must closely supervise privatized functions.", isCorrect: false },
          { text: "(B) privatized functions consist of a mixture of government employees, military personnel, and private contractors.", isCorrect: false },
          { text: "(C) privatized functions are those institutions that provide services only to a government agency.", isCorrect: false },
          { text: "(D) privatized functions provide essential services to the government.", isCorrect: true },
        ],
        category: 1,
      },
      {
        questionText:
          "The success or failure of a conference lies largely with its leader. A leader’s zest and enthusiasm must be real, apparent, and contagious. The leader is responsible for getting the ball rolling and making the attendees feel as if the meeting is theirs and its success depends on their participation. A good, thorough introduction helps establish the right climate. A good title to this paragraph would be",
        keyWord: "",
        options: [
          { text: "(A) “Lead by Example.”", isCorrect: false },
          { text: "(B) “The Importance of Proper Introductions.”", isCorrect: false },
          { text: "(C) “Leading a Successful Conference.”", isCorrect: true },
          { text: "(D) “Conference Participation Basics.”", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "Cloud seeding is accomplished by dropping particles of dry ice (solid carbon dioxide) from a plane onto super-cooled clouds. This process encourages condensation of water droplets in the clouds, which usually, but not always, results in rain or snow. From this passage, it’s reasonable to assume that",
        keyWord: "",
        options: [
          { text: "(A) cloud seeding could be used to end a drought.", isCorrect: true },
          { text: "(B) cloud seeding is prohibitively expensive.", isCorrect: false },
          { text: "(C) cloud seeding is rarely used.", isCorrect: false },
          { text: "(D) cloud seeding can be accomplished by using regular ice.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "To write or not to write — that is the question. If assigned a writing task, there’s no option. However, if someone is looking for a specific answer, find out if they need a short answer or a detailed one. Can the requirement be met with a telephone call, email, or short note, or is something more necessary? A former CEO of a major corporation once commented that he had looked at 13,000 pieces of paper in a 5-day period. Think how much easier and more economical it would be if people would use the telephone, send an email, or write a short note. The main point of this passage is that",
        keyWord: "",
        options: [
          { text: "(A) written records are important because they provide detailed documentation.", isCorrect: false },
          { text: "(B) more businesspeople should invest time and energy improving their writing skills.", isCorrect: false },
          { text: "(C) writing may not be the best way to communicate information.", isCorrect: true },
          { text: "(D) it’s pointless for businesspeople to spend time improving their writing skills.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "The transistor, a small, solid-state device that can amplify sound, was invented in 1947. At first, it was too expensive and too difficult to produce to be used in cheap, mass-market products. By 1954, though, these cost and production problems had been overcome, and the first transistor radio was put on the market. According to this passage,",
        keyWord: "",
        options: [
          { text: "(A) there was no market for transistors before 1954.", isCorrect: false },
          { text: "(B) when transistors could be produced cheaply and easily, the transistor radio was put on the market.", isCorrect: true },
          { text: "(C) transistors were invented in 1947 by order of the Department of Defense.", isCorrect: false },
          { text: "(D) transistors are still expensive to produce.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "I returned from the City about three o’clock on that May afternoon pretty well disgusted with life. I had been three months in the Old Country and was fed up with it. If people had told me a year ago that I would’ve been feeling like that I should’ve laughed at them; but there was the fact. The weather made me liverish, the talk of the ordinary Englishman made me sick, I couldn’t get enough exercise, and the amusements of London seemed as flat as soda water that had been standing in the sun. The author is speaking of his travels in",
        keyWord: "",
        options: [
          { text: "(A) Spain.", isCorrect: false },
          { text: "(B) Great Britain.", isCorrect: true },
          { text: "(C) Germany.", isCorrect: false },
          { text: "(D) Scotland.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "Surveys show that the average child under the age of 18 watches four hours of television per day. Although some of the programming may be educational, most isn’t. Spending this much time watching television interferes with a child’s ability to pursue other interests, such as reading, participating in sports, and playing with friends. The author of this passage would agree that",
        keyWord: "",
        options: [
          { text: "(A) television viewing should be restricted.", isCorrect: true },
          { text: "(B) parents who let their children watch this much television are neglectful.", isCorrect: false },
          { text: "(C) reading, participating in sports, playing with friends, and watching television should all be given equal time.", isCorrect: false },
          { text: "(D) adults over 18 can watch as much television as they want.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "High school and college graduates attempting to find jobs should participate in mock job interviews. These mock interviews help students prepare for the types of questions they’ll be asked, make them more comfortable with common interview formats, and help them critique their performance before facing a real interviewer. Because they’re such a valuable aid, schools should organize mock job interviews for all their graduating students. The above passage states that mock job interviews",
        keyWord: "",
        options: [
          { text: "(A) frighten students.", isCorrect: false },
          { text: "(B) should be offered to the best students.", isCorrect: false },
          { text: "(C) help prepare students for real job interviews.", isCorrect: true },
          { text: "(D) should be organized by students.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "High school and college graduates attempting to find jobs should participate in mock job interviews. These mock interviews help students prepare for the types of questions they’ll be asked, make them more comfortable with common interview formats, and help them critique their performance before facing a real interviewer. Because they’re such a valuable aid, schools should organize mock job interviews for all their graduating students. From the above passage, it is reasonable to assume that",
        keyWord: "",
        options: [
          { text: "(A) mock interviews can increase a student’s confidence when he or she goes into a real job interview.", isCorrect: true },
          { text: "(B) mock interviews are expensive to organize.", isCorrect: false },
          { text: "(C) few students are interested in mock interviews.", isCorrect: false },
          { text: "(D) students don’t need job interview preparation.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "Due process, the guarantee of fairness in the administration of justice, is part of the 5th Amendment to the U.S. Constitution. The 14th Amendment further requires states to abide by due process. After this amendment was enacted, the U.S. Supreme Court struck down many state laws that infringed on the civil rights guaranteed to citizens in the Bill of Rights. According to the above passage, due process",
        keyWord: "",
        options: [
          { text: "(A) is an outdated concept.", isCorrect: false },
          { text: "(B) guarantees fairness in the justice system.", isCorrect: true },
          { text: "(C) never became part of the U.S. Constitution.", isCorrect: false },
          { text: "(D) is the process by which winning lottery tickets are selected.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "Due process, the guarantee of fairness in the administration of justice, is part of the 5th Amendment to the U.S. Constitution. The 14th Amendment further requires states to abide by due process. After this amendment was enacted, the U.S. Supreme Court struck down many state laws that infringed on the civil rights guaranteed to citizens in the Bill of Rights. According to the above passage, it’s reasonable to assume that the 5th Amendment",
        keyWord: "",
        options: [
          { text: "(A) is about taxes.", isCorrect: false },
          { text: "(B) guarantees due process in all criminal and civil cases.", isCorrect: false },
          { text: "(C) guarantees due process in federal law.", isCorrect: true },
          { text: "(D) should never have become part of the Bill of Rights.", isCorrect: false },
        ],
        category: 1,
      },
      {
        questionText:
          "Due process, the guarantee of fairness in the administration of justice, is part of the 5th Amendment to the U.S. Constitution. The 14th Amendment further requires states to abide by due process. After this amendment was enacted, the U.S. Supreme Court struck down many state laws that infringed on the civil rights guaranteed to citizens in the Bill of Rights. The author of the above passage would agree that",
        keyWord: "",
        options: [
          { text: "(A) without the passage of the 14th Amendment, many laws restricting civil rights would still exist in various states.", isCorrect: true },
          { text: "(B) the Supreme Court overstepped its jurisdiction when it struck down laws infringing on citizens’ civil rights.", isCorrect: false },
          { text: "(C) the Supreme Court had every right to strike down state laws before the passage of the 14th Amendment.", isCorrect: false },
          { text: "(D) the 14th Amendment was opposed by all states.", isCorrect: false },
        ],
        category: 1,
      },
    ];

    // Tạo quiz
    const readingExamQuiz = await Quiz.create({
      title: "Reading Comprehension Test",
      description: "A set of reading comprehension questions for ASVAB or similar tests.",
      price: 0,
    });

    // Gán quizId cho từng câu hỏi
    const questionsWithQuizId = readingQuestions.map((q) => ({
      ...q,
      quizId: readingExamQuiz._id,
    }));

    // Chèn các câu hỏi
    const insertedQuestions = await Question.insertMany(questionsWithQuizId);
    console.log("Inserted Reading Exam questions:", insertedQuestions.length);

    // Cập nhật quiz với danh sách câu hỏi
    await Quiz.findByIdAndUpdate(readingExamQuiz._id, {
      $push: { questions: { $each: insertedQuestions.map((q) => q._id) } },
    });

    console.log("Reading Exam quiz created successfully.");
  } catch (err) {
    console.error("Error creating Reading Exam quiz:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Database disconnected");
  }
};

createReadingExam();