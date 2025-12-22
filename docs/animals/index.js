const quizdata = [
    {
        question : "what is causing climate change?",
        options : [ "thesun", "ants","humans", "sharks"],
        answer : "humans"
    },
    {
        question : "what reflects the sun?",
        options : [ "polarice", "water","peinguins"],
        answer : "polarice"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitElement = document.getElementById("submit");

let currentQuestion = 0
let score = 0

function showQuestion() {
    const question = quizdata[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option
        optionsElement.appendChild(button)
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedbutton = e.target;
    const answer = quizdata[currentQuestion].answer;

    if (selectedbutton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizdata.length) {
           showQuestion();
    } else {
        showResult();
    }

}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz completed!</h1>
        <p>your score: ${score}/${quizdata.length}</p>
    `;
}
showQuestion();