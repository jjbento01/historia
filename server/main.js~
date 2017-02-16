import { Meteor } from 'meteor/meteor';
import { Capitulos } from '../imports/api/capitulos.js'

Meteor.startup(() => {
  // code to run on server at startup
  console.log("Deveria criar uma base de dados");
  if(Capitulos.find().count()==0) {
    console.log("Should insert chapters if count is zero");
    Capitulos.insert({
      "title": "Ancient History",
      "summary": "Reasoning about reasoning is an ancient art and the first time that we know that was codified was with Aristoteles.",
      "paragraphs": ["The Organon was the first book about reasoning and was very influential in Western thought and religion.",
                     "It represents the first known attempt to categorize, for instance, types of proof, which Aristotles assumes to be mainly deduction and induction."],
      "images":[{"pic": "aristotle.jpg", "height":"202px", "width":"152px"}],
      "chaptersequence": 1,
      "previouschapter": null,
      "nextchapter": 2,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "Colossal beginings",
      "summary": "First computers",
      "paragraphs": ["Alan Turing lays the foundations for modern computer architecture.",
                     "Claude Shannon presents Information Theory.",
                     "The idea of thought has a algorithmic process takes hold.",
                     "Minsky and Edmonds build the first neural network computer."],
      "images": [
        {"pic": "Alan_Turing_photo.jpg", "height":"180px", "width":"150px"},
        {"pic": "ClaudeShannon.jpg", "height":"180px", "width":"129px"},
        {"pic": "Marvin_Minsky.jpg", "height":"180px", "width":"180px"}],
      "chaptersequence": 2,
      "previouschapter": 1,
      "nextchapter": 3,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "Great Expectations",
      "summary": "First Puzzle Solvers and Neural Networks",
      "paragraphs": ["John MacCarthy develops lisp and the Advice Taker, wich reasons from simple axioms how generate complex actions, like the itinerary for a traveling car.",
                     "Bernie Widrow and Frank Rosenblatt develop different types of neural networks."],
      "images": [{"pic": "John_McCarthy.jpg", "height":"264px", "width":"400px"}],
      "chaptersequence": 3,
      "previouschapter": 2,
      "nextchapter": 4,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "AI becomes a industry",
      "summary": "The development of AI systems reaches the $2 billion dollar mark",
      "paragraphs": ["Expert systems become a usual tool to solve certain types of problems, but combinatorial explosion, doubts about the theoretical ability of neural networks and unreasonable expectations of the evolution of computer hardware start to be felt."],
      "images": [{"pic": "IncreasedRevenue.jpg", "height":"207px", "width":"294px"}],
      "chaptersequence": 4,
      "previouschapter": 3,
      "nextchapter": 5,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "The AI Winter",
      "summary": "The AI bubble bursts",
      "paragraphs": ["Minsky shows the limits of single layer neural networks, although development of multi layer ones is already in the works.",
                     "Expert systems fall victm to the faults mentioned before (combinatorial explosion, insufficient development of computer hardware).",
                     "Early work in speech recognition does not bear fruit."],
      "images": [{"pic": "computer_winter.jpeg", "height":"240px", "width":"300px"}],
      "chaptersequence": 5,
      "previouschapter": 4,
      "nextchapter": 6,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "Modern World",
      "summary": "The resurgence of AI as a viable technology",
      "paragraphs": ["Hadware development and mathematical sophistication catches up with old expectations.",
                     "The relentless increase in computer power and the development of methods to deal with old problems of probabilistic reasoning finally make good of some of the field goals.",
                     "The belief network formalism is invented and a better understanding of the problems faced, leading to workbale research agendas and robust methods.",
                     "Development in bayesan networks and other methods like support vector machines allow the field to surge ahead with a plethora of viable products:",
                     "- Autonomous driving;",
                     "- Common sense reasoning (Watson, for instance);",
                     "- Deepmind by Google;"],
      "images": [],
      "chaptersequence": 6,
      "previouschapter": 5,
      "nextchapter": 7,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "Basic SVM",
      "summary": "How SVM works at heart",
      "paragraphs": ["Maximization of the margin between datasets"],
      "images": [
        {"pic":"separating-lines.png", "width":"300px", "height":"300px"},
        {"pic":"optimal-hyperplane.png", "width":"300px", "height":"300px"}
      ],
      "chaptersequence": 7,
      "previouschapter": 6,
      "nextchapter": 8,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "SVM Kernel Trick",
      "summary": "Kernel transformations to extricate datasets",
      "paragraphs": ["Kernel trick to separate intermingled datasets"],
      "images": [{"pic":"kernel_trick.png", "width":"600px", "height":"300px"},],
      "chaptersequence": 8,
      "previouschapter": 7,
      "nextchapter": 9,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "SVM in practice - the problem",
      "summary": "Kernel transformations to extricate datasets",
      "paragraphs": [
        "A – increase in speed of problem resoution;",
        "B – change in customer manager;",
        "C – manager availability;",
        "D – a greater range of options;",
        "E – less telemarketing;",
        "F – everything.",
        "Sample open answer: I do not want to be bothered with frequent calls!"
      ],
      "images": [],
      "chaptersequence": 9,
      "previouschapter": 8,
      "nextchapter": 10,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "SVM in practice - the method",
      "summary": "Kernel transformations to extricate datasets",
      "paragraphs": [
        "Sample open answer: I do not want to be bothered with frequent calls!",
        "After preprocessing:",
        "want bothered frequent calls",
        "Encoding for class A (with want in the 57th position, bothered in the 280th, frequent in the 295th and calls in the 340th:",
        "-1 57:1 280:1 295:1 340:1",
        "Encoding for class E (less telemarketing):",
        "+1 57:1 280:1 295:1 340:1",
      ],
      "images": [],
      "chaptersequence": 10,
      "previouschapter": 9,
      "nextchapter": 11,
      "createdAt": new Date()
    });
    Capitulos.insert({
      "title": "Conclusion",
      "summary": "Advantages of machine learning",
      "paragraphs": [
        "Standartization",
        "Speed",
        "Auditing",
      ],
      "images": [],
      "chaptersequence": 11,
      "previouschapter": 10,
      "nextchapter": null,
      "createdAt": new Date()
    });
  }
});
