var startBtnEl = document.querySelector("#start-btn");
var containerEl = document.querySelector("#qContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-key");
var bodyEl = document.querySelector("#bod");
var counting = document.querySelector("#count");
var bodyyEl = document.querySelector("#bodyy");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var rightEl = document.getElementById("right");
var wrongEl = document.getElementById("wrong");
var highscoreEl = document.getElementById("vhighScores");
var submitEl = document.getElementById("submitBtn");
var hsList = document.getElementById("hsList");
var formEl = document.getElementById("formHs");
var vHSBtn = document.getElementById("vhighScores");
var showScoreEl = document.getElementById("ShowScore");
var highScoreList = []
var shuffledQuestions, i;
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
        question: "What is my eye?",
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
];
counting.classList.remove("timercount")
var startGame = function() {
    i = 0;
    countdown(time);
    counting.classList.add("timercount")
    startBtnEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    containerEl.classList.remove("hide");
    nextQuestion();
};
var hsScore = function(event) {
    let hsItem = document.createElement("li")
    JSON.stringify(bodyEl.value)
    bodyEl.value.toUppercase
    hsItem.textContent = (bodyEl.value + " " + pointIncrament)
    highScoreList.push(hsItem.textContent)
    highScoreList.push(bodyyEl.value)
    hsItem.innerHTML = "<p class='makeCenter'>Recent Score</p> </br> " +
        hsItem.textContent
    hsList.appendChild(hsItem)
    saveHighScoreList()
    bodyyEl.classList.add("hide");
    console.log(highScoreList)
    replay()
};

function replay() {
    var replayEl = document.createElement("button");
    replayEl.className = "nameInput start-btn namein btnSub btn";
    replayEl.textContent = "Play Again";
    formEl.appendChild(replayEl);
    // replayEl.addEventListener("click", saveHighScoreList)
}

var saveGame = function(event) {
    containerEl.classList.add("hide");
    wrongEl.classList.add("hide");
    rightEl.classList.add("hide");
    enterNameEl = document.createElement("p");
    enterNameEl.innerHTML =
        "<p class='makeBig'> All done!</p> <p class='makeSmaller'>You Scored " +
        pointIncrament +
        "/" +
        (shuffledQuestions.length) +
        "</p>";
    enterNameEl.className = "nameInput";
    bodyyEl.appendChild(enterNameEl);
    bodyEl = document.createElement("input");
    bodyEl.className = "nameInput namein btnSub btn";
    bodyEl.placeholder = "place your initials here";
    bodyEl.name = "initials"
    bodyyEl.appendChild(bodyEl);
    submitEl.classList.remove("hide")
    submitEl.type = "submit";
    bodyyEl.appendChild(submitEl)
    counting.classList.remove("timercount")
    counting.classList.add("hide")
    while (bodyEl.value.length == 0) {
        if (bodyEl.value.length == 0) {
            console.log("Please write your initials")
        } else {
            submitEl.addEventListener("click", hsScore);
        }
    }
    // hsScore()
};

var countdown = function(time) {
    var timeLeft = time;
    var timeInterval = setInterval(function() {
        if ((i + 2) > shuffledQuestions.length) {
            console.log("you are on q " + (i - 1))
            console.log("there is suppose to be " + shuffledQuestions.length)
            timeLeft -= timeLeft;
        } else {}
        pts = i;
        if (timeLeft > 1) {
            if (points == pts - 1) {} else {
                timeLeft -= 3;
                points = pts - 1;
            }
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Finished";
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
    if (questions.length <= i) {
        rightEl.classList.add("hide");
        wrongEl.classList.add("hide");
    } else {}
};

var nextQuestion = function() {
    resetState();
    // console.log(i)
    showQuestion(shuffledQuestions[i]);
    // console.log(shuffledQuestions[i]);
    i++;
};
var showQuestion = function(shuffledQuestions) {
    resetState();
    questionEl.innerText = shuffledQuestions.question;
    for (var i = 0; i < shuffledQuestions.answer.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn-grid btn";
        buttonEl.innerText = shuffledQuestions.answer[i].text;
        answerBtnEl.appendChild(buttonEl);
        if (shuffledQuestions.answer[i].correct) {
            buttonEl.dataset.correct = shuffledQuestions.answer[i].correct;
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

function saveHighScoreList() {
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList))
}

function loadHighScoreList() {
    // var loadTask = function() {
    var savedTasks = localStorage.getItem("tasks");
    if (!savedTasks) {
        return false;
    }
    savedTasks = JSON.parse(savedTasks)
    console.log(savedTasks);
    for (var i = 0; i < savedTasks.length; i++) { createTaskEl(savedTasks[i]) }
    console.log(tasks[i]);
}

answerBtnEl.addEventListener("click", selectAnswers);
startBtnEl.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", nextQuestion);