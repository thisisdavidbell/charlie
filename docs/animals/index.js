const quizdata = [
    {
        question : "1. What is causing climate change?",
        options : [ "the sun", "ants","humans", "sharks"],
        answer : "humans"
    },
    {
        question : "2. What reflects the sun?",
        options : [ "polar ice", "water","penguins"],
        answer : "polar ice"
    },
    {
        question : "3. The loss of which oceanic species is affecting whales and penguins?",
        options : [ "plankton", "krill","algae"],
        answer : "krill"
    },
    {
        question : "4. Which of these is one of the effects of melting polar ice?",
        options : [ "rising sea levels", "more fish","stronger storms"],
        answer : "rising sea levels"
    },
]

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitElement = document.getElementById("submit");

let currentQuestion = 0
let score = 0

function showQuestion() {
    const question = quizdata[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    // create a shuffled copy of the options so button order is random
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
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
    // find an element with id="quiz" to show the result. If it doesn't exist,
    // create one and append it to the document body.
    const quizEl = document.getElementById('quiz') || (function() {
        const d = document.createElement('div');
        d.id = 'quiz';
        document.body.appendChild(d);
        return d;
    })();

    // display the result and add a button that allows the user to reload
    // the page (so they can retake the quiz). The button has id="reloadBtn".
    quizEl.innerHTML = `
        <h1>Quiz completed!</h1>
        <p>Your score: ${score}/${quizdata.length}</p>
        <div style="display: flex; gap: 10px;">
            <button id="reloadBtn">Play again</button>
            <button id="openAnimalsIndexBtn">Go back to the animals page</button>
        </div>
    `;

    // attach a click handler to the reload button that reloads the current
    // page. This restarts the quiz by refreshing the entire page.
    const reloadBtn = document.getElementById('reloadBtn');
    if (reloadBtn) {
        reloadBtn.addEventListener('click', function() {
            // reload the page
            location.reload();
        });
    }

    // navigation button that opens the animals index page
    const navBtn = document.getElementById('openAnimalsIndexBtn');
    if (navBtn) {
        navBtn.addEventListener('click', function() {
            location.href = 'index.html';
        });
    }
}
showQuestion();
 