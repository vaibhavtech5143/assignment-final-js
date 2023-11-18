const questionStore = [

    { question: "Question 1",
      difficulty: "Easy",
      marks: 5 },

    { question: "Question 2", difficulty: "Medium", marks: 10 },
    { question: "Question 3", difficulty: "Hard", marks: 15 },
    { question: "Question 4", difficulty: "Easy", marks: 5 },
    { question: "Question 5", difficulty: "Medium", marks: 10 },
    { question: "Question 6", difficulty: "Hard", marks: 15 },
    { question: "Question 7", difficulty: "Easy", marks: 5 },
    { question: "Question 8", difficulty: "Medium", marks: 10 },
    { question: "Question 12", difficulty: "Hard", marks: 15 },
    { question: "Question 13", difficulty: "Easy", marks: 5 },
    { question: "Question 14", difficulty: "Medium", marks: 10 },
    { question: "Question 15", difficulty: "Hard", marks: 15 },
    { question: "Question 16", difficulty: "Easy", marks: 5 },
    { question: "Question 17", difficulty: "Medium", marks: 10 },
    { question: "Question 18", difficulty: "Hard", marks: 15 },
    { question: "Question 19", difficulty: "Easy", marks: 5 },
    { question: "Question 20", difficulty: "Medium", marks: 10 },
    { question: "Question 21", difficulty: "Hard", marks: 15 },
    { question: "Question 22", difficulty: "Easy", marks: 5 },
    { question: "Question 26", difficulty: "Hard", marks: 15 },
    { question: "Question 27", difficulty: "Easy", marks: 5 },
    { question: "Question 28", difficulty: "Easy", marks: 5 },
    { question: "Question 30", difficulty: "Easy", marks: 5 },
    { question: "Question 31", difficulty: "Easy", marks: 5 },
    { question: "Question 32", difficulty: "Easy", marks: 5 },

    { question: "Question 28", difficulty: "Medium", marks: 10 },
    { question: "Question 29", difficulty: "Hard", marks: 15 },
];





const questionFunc =(TotalMarks,marksDistribution)=>{

let easyQuestion = [];
let mediumQuestion = [];
let HardQuestion = [];

//segrate data 
for(let i =0; i<questionStore.length;i++){
    // console.log("",questionStore[i]);
if(questionStore[i].difficulty === "Easy"){
    easyQuestion.push(questionStore[i]);
}
else if(questionStore[i].difficulty === "Medium"){
    mediumQuestion.push(questionStore[i]);
}
else{
    HardQuestion.push(questionStore[i]);
}
}

// console.log(easyQuestion,mediumQuestion,HardQuestion);

let easyMark = easyQuestion[0].marks;
let mediumMark = mediumQuestion[0].marks;
let hardMark = HardQuestion[0].marks;


let easyCount =  Math.floor(marksDistribution.easy/easyMark); ///4

let mediumCount = Math.floor(marksDistribution.medium/mediumMark); ///5
let hardCount = Math.floor(marksDistribution.hard/hardMark); /// 2 
let remainingMarks = Math.floor(TotalMarks - ((easyCount*easyMark)+(mediumCount*mediumMark)+(hardCount*hardMark)));
// console.log(easyCount,mediumCount,hardCount,remainingMarks);

// console.log("remaining marks",remainingMarks);

let extraQuestion =  remainingMarks/easyMark;
easyCount= easyCount+extraQuestion;
// console.log("easy count",easyCount);
// console.log("medium count",mediumCount);
// console.log("hard count",hardCount);


let QuestionPaper ={
    easyQuestion:[],
    mediumQuestion:[],
    HardQuestion:[]
};


// console.log(easyQuestion);

for (let i = 0; i < easyCount; i++) {
    const randomIndex = Math.floor(Math.random() * easyQuestion.length);
    const selectedQuestion = easyQuestion[randomIndex];

    // Add the selected question to QuestionPaper
    QuestionPaper.easyQuestion.push(selectedQuestion);

    // Remove the selected question from easyQuestion to avoid repetition
    easyQuestion.splice(randomIndex, 1);
}
for (let i = 0; i < mediumCount; i++) {
    const randomIndex = Math.floor(Math.random() * mediumQuestion.length);
    const selectedQuestion = mediumQuestion[randomIndex];

    // Add the selected question to QuestionPaper
    QuestionPaper.mediumQuestion.push(selectedQuestion);

    // Remove the selected question from easyQuestion to avoid repetition
    mediumQuestion.splice(randomIndex, 1);
}
for (let i = 0; i < hardCount; i++) {
    const randomIndex = Math.floor(Math.random() * HardQuestion.length);
    const selectedQuestion = HardQuestion[randomIndex];

    // Add the selected question to QuestionPaper
    QuestionPaper.HardQuestion.push(selectedQuestion);

    // Remove the selected question from easyQuestion to avoid repetition
    HardQuestion.splice(randomIndex, 1);
}

console.log(QuestionPaper);

}

let percentofEasy = 35;
let percentofMedium = 35;
let percentofHard = 30;

const totalMarksOfQuestionPaper = 75

questionFunc(totalMarksOfQuestionPaper,{easy:totalMarksOfQuestionPaper*(percentofEasy/100),medium:totalMarksOfQuestionPaper*(percentofMedium/100),hard:totalMarksOfQuestionPaper*(percentofHard/100)});





