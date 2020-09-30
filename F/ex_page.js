const question = document.getElementById("question");
const choices  = Array.from (document.getElementsByClassName("mul-ch-txt"));
// console.log(question);
// console.log(choices);
let currentQuestion = {} //obj
let acceptingAnswers = false; //delay
let marks = 0;
let questionCounter = 0;
let availableQuestion = []; //to give user a unique question. its just a copy of our main question. i want to check the questions if its repeated.

// ==================== question set ===================== //
let questions = [
{
    question: "Who teaches web development?",
    choice1: "Anjali Sawant",
    choice2: "Bertilla Fernades",
    choice3: "Wilson Rao",
    choice4: "Shruti Shah",
    answer: 2
},
{
    question: "Where you can find food in college?",
    choice1: "Canteen",
    choice2: "Foyer",
    choice3: "Comp lab",
    choice4: "Ground",
    answer: 1
},
{
    question: "Who is the HOD of IT department?",
    choice1: "Umme Hani Sayed",
    choice2: "Shruti Shah",
    choice3: "Wilson Rao",
    choice4: "Bertilla Fernades",
    answer: 3
},
{
    question: "Where does the FY lectures take place?",
    choice1: "Room 212",
    choice2: "Room 312",
    choice3: "Room 313",
    choice4: "Room 314",
    answer: 2
},
{
    question: "Where the staff room is located?",
    choice1: "1st Floor",
    choice2: "2nd Floor",
    choice3: "3rd Floor",
    choice4: "4th Floor",
    answer: 1
},
{
    question: "How many Floors are there in New Building?",
    choice1: "1",
    choice2: "3",
    choice3: "5",
    choice4: "7",
    answer: 4
},
{
    question: "Which college we are talking about?",
    choice1: "K.C. College",
    choice2: "Jai Hind College",
    choice3: "St. Xavier's College",
    choice4: "Wilson College",
    answer: 2
},
{
    question: "How many buildins are there in Jai Hind College",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 2
},
{
    question: "How many floors are there in old building?",
    choice1: "8",
    choice2: "6",
    choice3: "4",
    choice4: "2",
    answer: 3
},
{
    question: "What is the full form of WWW?",
    choice1: "World Wide Web",
    choice2: "World wide Web Consortium",
    choice3: "Wide World Web",
    choice4: "Web World Wide",
    answer: 2
},



]

// some declaration of constants....
const incMarks = 5;
const maxQuestion = 5;

startExam = () => {
    questionCounter = 0;
    marks = 0;
    availableQuestion = [...questions]; //spread operator stores the exact copy of array in given var.
    console.log(availableQuestion);
    getNewQuestion();
     

};
getNewQuestion = () => {
    if(availableQuestion.length ==0 || questionCounter >= maxQuestion){
        return window.location.assign("end.html")
    }
    

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question;   

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
   
    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e =>{
       //console.log(e.target);
       if(!acceptingAnswers) return;
       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];
       console.log(selectedAnswer == currentQuestion.answer);
       getNewQuestion();
    });
});
startExam();
