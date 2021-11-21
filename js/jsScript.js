var startBtnEl = document.querySelector("#start-btn");
var containerEl = document.querySelector("#qContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-key");
var bodyEl = document.querySelector("#bod");
var bodyyEl = document.querySelector("#bodyy");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var rightEl = document.getElementById("right");
var wrongEl = document.getElementById("wrong");
var highscoreEl = document.getElementById("vhighScores");
var submitEl = document.querySelector("submitBtn");
var showScoreEl = document.getElementById("ShowScore");

var shuffledQuestions, i;
i = 0;
var time = 10
var questions = [{
        question: "What is my name?",
        answer: [{
                text: "1: Rodney",
                correct: true,
            },
            {
                text: "2: Jack",
                correct: false,
            },
            {
                text: "3: KodaK Black",
                correct: false,
            },
            {
                text: "4: Ronnold",
                correct: false,
            },
        ],
    },
    {
        question: "What is my time?",
        answer: [{
                text: "1: Rodney",
                correct: true,
            },
            {
                text: "2: Jack",
                correct: false,
            },
            {
                text: "3: KodaK Black",
                correct: false,
            },
            {
                text: "4: Ronnold",
                correct: false,
            },
        ],
    },
    {
        question: "What is my year?",
        answer: [{
                text: "1: 90",
                correct: false,
            },
            {
                text: "2: 92",
                correct: true,
            },
            {
                text: "3: KodaK Black",
                correct: false,
            },
            {
                text: "4: Ronnold",
                correct: false,
            },
        ],
    },
    {
        question: "What is my Day?",
        answer: [{
                text: "1: Mon",
                correct: false,
            },
            {
                text: "2: Fri",
                correct: true,
            },
            {
                text: "3: KodaK Black",
                correct: false,
            },
            {
                text: "4: Ronnold",
                correct: false,
            },
        ],
    },
    {
        question: "What is my sign?",
        answer: [{
                text: "1: grrr",
                correct: false,
            },
            {
                text: "2: Fri",
                correct: true,
            },
            {
                text: "3:  Black",
                correct: false,
            },
            {
                text: "4: JNopr",
                correct: false,
            },
        ],
    },
];
var startGame = function() {
    countdown(time);
    startBtnEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    containerEl.classList.remove("hide");
    nextQuestion();
};
var hsScore = function() {
    console.log("hello");
    alert("it worked")
        // restartGame()
};
var saveGame = function() {
    wrongEl.classList.add("hide");
    rightEl.classList.add("hide");
    containerEl.classList.add("hide");
    var enterNameEl = document.createElement("p");
    enterNameEl.innerHTML =
        "<p class='makeBig'> All done!</p> <p class='makeSmaller'>You Scored " +
        pointIncrament +
        "/" +
        shuffledQuestions.length +
        "</p>";
    enterNameEl.className = "nameInput";
    bodyyEl.appendChild(enterNameEl);
    var bodyEl = document.createElement("input");
    bodyEl.className = "nameInput";
    bodyEl.name = "place your initials here";
    bodyEl.placeholder = "place your initials here";
    bodyyEl.appendChild(bodyEl);
    submitEl.classList.remove("hide")
    submitEl.addEventListener("click", hsScore);
    hsScore()
        // submitEl.addEventListener("click", restartGame)
};

function restartGame() {
    // bodyyEl.classList.add("hide");
    // startBtnEl.classList.remove("hide");
    // startBtnEl.innerText = "ReStart";

    // startBtnEl.addEventListener("click", startGame)
}
var countdown = function(time) {
    var timeLeft = time;
    var timeInterval = setInterval(function() {
        pts = i;
        if (timeLeft > 1) {
            if (points == pts - 1) {
                if (questions.length < i) {
                    console.log("the restart should run");
                    timeLeft -= timeLeft;
                }
            } else {
                timeLeft -= 3;
                points = pts - 1;
            }
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time is Up";
            clearInterval(timeInterval);
            saveGame();
        }
    }, 1000);
};
var selectAnswers = function(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    removeAnswer();
    setStatusClass(correct);
    if (shuffledQuestions.length >= i) {} else {
        restartGame();
        rightEl.classList.add("hide");
        wrongEl.classList.add("hide");
        // restartGame()
    }
};

var nextQuestion = function() {
    resetState();
    showQuestion(shuffledQuestions[i]);
    i++;
};
var isCorrect;
var showQuestion = function(questions) {
    resetState();
    questionEl.innerText = questions.question;
    for (var i = 0; i < questions.answer.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn-grid btn";
        buttonEl.innerText = questions.answer[i].text;
        answerBtnEl.appendChild(buttonEl);
        if (questions.answer[i].correct) {
            buttonEl.dataset.correct = questions.answer[i].correct;
        }
    }
};

var removeAnswer = function() {
    wrongEl.classList.add("hide");
    rightEl.classList.add("hide");
};
var resetState = function() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
};


var points = 0;
var pointIncrament = 0;

function setStatusClass(correct) {
    if (correct) {
        rightEl.classList.remove("hide");
        points += 1;
        pointIncrament += 1;
    } else {
        wrongEl.classList.remove("hide");
    }
}
answerBtnEl.addEventListener("click", selectAnswers);
startBtnEl.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", nextQuestion);