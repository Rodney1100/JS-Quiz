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
var highScoreList = [];
var shuffledQuestions, i, enterNameMessage;
// time the quiz will run
var time = 5000;
// questions for the quiz
var questions = [{
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [{
                text: "1: <script>",
                correct: true,
            },
            {
                text: "2: <js>",
                correct: false,
            },
            {
                text: "3: <scripting>",
                correct: false,
            },
            {
                text: "4: <javaScript>",
                correct: false,
            },
        ],
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answer: [{
                text: "1:  The <head> section",
                correct: false,
            },
            {
                text: "2:  Both the <head> section and the <middle> section are correct",
                correct: false,
            },
            {
                text: "3:  the middle",
                correct: false,
            },
            {
                text: "4: the bottom of the body",
                correct: true,
            },
        ],
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js' ? ",
        answer: [{
                text: "1: <script href = 'xxx.js'>",
                correct: false,
            },
            {
                text: "2: <script src = 'xxx.js'>",
                correct: true,
            },
            {
                text: "3: <script name= 'xxx.js'>",
                correct: false,
            },
            {
                text: "4: you call it from the js file",
                correct: false,
            },
        ],
    },
    {
        question: "JavaScript is the same as Java. ",
        answer: [{
                text: "1: true",
                correct: false,
            },
            {
                text: "2: false",
                correct: true,
            },
        ],
    },
];
// this is out here because it needs to be global
counting.classList.remove("timercount");
// this remove the answers to start and save the score
function resetscores() {
    while (highScores.firstChild) {
        highScores.removeChild(highScores.firstChild);
    }
}
//  everything that needs to start the game after click
var startGame = function() {
    //  this gets the buttons off the screen
    resetscores();
    vHSBtn.classList.remove("hide");
    deleteEl.classList.add("hide");
    startBtnEl.classList.add("hide");
    containerEl.classList.remove("hide");
    i = 0;
    // passing the time to the time function
    countdown(time);
    counting.classList.add("timercount");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    nextQuestion();
};
// setting the score after the quiz
let hsItemStorage = document.createElement("ul");
var hsScore = function() {
    resetscores();
    hsItemStorage.classList.add("ulike");
    var hsItem = document.createElement("li");
    hsItemStorage.appendChild(hsItem);
    bodyEl.value.toUppercase;
    hsItem.textContent = bodyEl.value + " " + pointIncrament;
    highScoreList.push(hsItem.textContent);
    hsItem.innerHTML =
        "<p class='makeCenter ulike'>Recent Score</p> </br> " + hsItem.textContent;
    hsList.appendChild(hsItemStorage);
    saveHighScoreList();
    bodyyEl.classList.add("hide");
    // console.log(highScoreList)
    replay();
};
// the y is for checking to see if the fucntion ran
var y = 0;
//  this is to change the color of the promp verification
let redOrBlue = 0;
// varifying that something was intered to the input
var submitverification = function() {
    if (bodyEl.value.length == 0) {
        enterNameMessage = document.createElement("p");
        enterNameMessage.setAttribute("id", "enterNameMessagePrompt");
        enterNameMessage.textContent = "Please write your initials!";
        bodyyEl.appendChild(enterNameMessage);
        bodyyEl.removeChild(enterNameEl);
        bodyyEl.removeChild(bodyEl);
        bodyyEl.removeChild(submitEl);
        //  changing the color of the prompt
        if (redOrBlue % 2 == 0) {
            enterNameMessage.classList.add("blue");
            enterNameMessage.classList.remove("red");
        } else {
            enterNameMessage.classList.add("red");
            enterNameMessage.classList.remove("blue");
        }
        // runs the same game
        saveGame();
        y++;
    } else {
        hsScore();
    }
};
// clears and reflesh the page
function clearMessage() {}
// replays the game
function replay() {
    var replayEl = document.createElement("button");
    replayEl.className = "nameInput start-btn namein btnSub btn";
    replayEl.textContent = "Redo Quiz";
    formEl.appendChild(replayEl);
    replayEl.addEventListener("click", clearMessage);
}
// sames the high score
var saveGame = function() {
    // hides buttons and input bars
    containerEl.classList.add("hide");
    wrongEl.classList.add("hide");
    rightEl.classList.add("hide");
    // create the
    enterNameEl = document.createElement("p");
    enterNameEl.innerHTML =
        "<p class='makeBig'> All done!</p> <p class='makeSmaller'>You Scored " +
        pointIncrament +
        "/" +
        (shuffledQuestions.length - 1) +
        "</p>";
    enterNameEl.className = "nameInput";
    bodyyEl.appendChild(enterNameEl);
    bodyEl = document.createElement("input");
    bodyEl.className = "nameInput namein btnSub btn";
    bodyEl.placeholder = "place your initials here";
    bodyEl.name = "initials";
    bodyyEl.appendChild(bodyEl);
    submitEl.classList.remove("hide");
    submitEl.type = "submit";
    bodyyEl.appendChild(submitEl);
    counting.classList.remove("timercount");
    counting.classList.add("hide");
    submitEl.addEventListener("click", submitverification);
    if (y > 0) {
        redOrBlue = Math.floor(Math.random() * 50);
        bodyyEl.removeChild(enterNameMessage);
    }
};

var countdown = function(time) {
    var timeLeft = time;
    var timeInterval = setInterval(function() {
        if (i == questions.length) {
            timeLeft -= timeLeft;
        }
        if (vHSBtn.addEventListener("click", saveGame)) {
            timeLeft -= timeLeft;
        }
        pts = i;
        if (timeLeft > 1) {
            if (points !== pts - 1) {
                deleteEl.classList.add("hide");
                timeLeft -= 500;
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
    }, 10);
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
    showQuestion(shuffledQuestions[i]);
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
// reset the questionsanswers
var resetState = function() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
};
// points used for score and to check if there needing to subtract from time
var points = 0;
var pointIncrament = 0;
// lets the user know if the answer is wrong
function setStatusClass(correct) {
    if (correct) {
        rightEl.classList.remove("hide");
        points += 1;
        pointIncrament += 1;
    } else {
        wrongEl.classList.remove("hide");
    }
}
// stores the scores in local storage
function saveHighScoreList() {
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
}
// delete the scores saved
function deleting() {
    highScoreList = [];
    saveHighScoreList();
}
// create the delete button
var deleteEl = document.createElement("button");

function deleteScore() {
    vHSBtn.classList.add("hide");
    deleteEl.className = "btn hsBtn start-btn";
    deleteEl.textContent = "Delet High Scores";
    hsList.appendChild(deleteEl);
    deleteEl.addEventListener("click", deleting);
}
// loads the score back to the screen
var highScores = document.createElement("div");
var topOfPage = document.getElementById("top-Of-Page");

function loadHighScoreList() {
    deleteScore();
    while (hsItemStorage.firstChild) {
        hsItemStorage.removeChild(hsItemStorage.firstChild);
    }
    // brings the scrores back
    var savedScore = localStorage.getItem("highScoreList");
    if (savedScore.length == 0) {
        return false;
    }
    //  creating the leader board
    highScores.className = "ulike";
    topOfPage.appendChild(highScores);
    highScoreList = JSON.parse(savedScore);
    highScores.setAttribute = ("id", "scoreKepper");
    // created the score board
    for (var i = 0; i < highScoreList.length; i++) {
        var newli = document.createElement("li");
        newli.className = "btn str";
        console.log(highScoreList[i]);
        newli.innerText = highScoreList[i];
        highScores.appendChild(newli);
    }
    // console.log(highScores);
}
// the eventListeners that can run one of functions
vHSBtn.addEventListener("click", loadHighScoreList);
answerBtnEl.addEventListener("click", selectAnswers);
startBtnEl.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", nextQuestion);