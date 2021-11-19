var startBtnEl = document.querySelector("#start-btn");
var containerEl = document.querySelector("#qContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-key");
var shuffledQuestions, i;

var questions = [{
        question: "What is my name?",
        answer: [{
                text: "1: Rodney",
                correct: true
            },
            {
                text: "2: Jack",
                correct: false
            },
            {
                text: "3: KodaK Black",
                correct: false
            },
            {
                text: "4: Ronnold",
                correct: false
            },
        ],
    },
    {
        question: "What is my time?",
        answer: [{
                text: "1: Rodney",
                correct: true
            },
            {
                text: "2: Jack",
                correct: false
            },
            {
                text: "3: KodaK Black",
                correct: false
            },
            {
                text: "4: Ronnold",
                correct: false
            },
        ],
    },
    {
        question: "What is my year?",
        answer: [{
                text: "1: 90",
                correct: false
            },
            {
                text: "2: 92",
                correct: true
            },
            {
                text: "3: KodaK Black",
                correct: false
            },
            {
                text: "4: Ronnold",
                correct: false
            },
        ],
    },
    {
        question: "What is my Day?",
        answer: [{
                text: "1: Mon",
                correct: false
            },
            {
                text: "2: Fri",
                correct: true
            },
            {
                text: "3: KodaK Black",
                correct: false
            },
            {
                text: "4: Ronnold",
                correct: false
            },
        ],
    },
    {
        question: "What is my sign?",
        answer: [{
                text: "1: grrr",
                correct: false
            },
            {
                text: "2: Fri",
                correct: true
            },
            {
                text: "3:  Black",
                correct: false
            },
            {
                text: "4: JNopr",
                correct: false
            },
        ],
    },
];
var startGame = function() {
    startBtnEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    containerEl.classList.remove("hide");
    i = 0;
    i++;
    nextQuestion();
};

var nextQuestion = function() {
    resetState();
    showQuestion(shuffledQuestions[i]);
    i++;
};

var showQuestion = function(questions) {
    questionEl.innerText = questions.question;
    var x = 0;
    for (var y = 0; y < questions.answer.length; y++) {
        var buttonEl = document.createElement("button");
        buttonEl.className = "btn-grid btn";
        buttonEl.innerText = questions.answer[y].text;
        answerBtnEl.appendChild(buttonEl);
        if (questions.answer[y].correct) {
            buttonEl.dataset.correct = questions.answer[y].correct;
        }
        // buttonEl.addEventListener("click", selectAnswers);
    };
};

var resetState = function() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
};

var selectAnswers = function(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(correct);
    // Array.from(answerBtnEl.children).forEach(button => {
    //     setStatusClass(button.dataset.correct)
    // })
};
var setStatusClass = function(correct) {
    if (correct) {
        console.log(correct);
    } else {
        console.log("wrong");
    }
};

startBtnEl.addEventListener("click", startGame);
answerBtnEl.addEventListener("click", selectAnswers);
answerBtnEl.addEventListener("click", nextQuestion);