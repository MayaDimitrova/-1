const questions = [
    {
        question: "Коя е най-северната точка на Южна Америка?",
        answers: ["Пунта Галинас", "Кейп Хорн", "Рио де Жанейро", "Лима"],
        correct: 0
    },
    {
        question: "Кой океан граничи със западното крайбрежие на Южна Америка?",
        answers: ["Атлантически океан", "Северен ледовит океан", "Индийски океан", "Тихи океан"],
        correct: 3
    },
    {
        question: "Кой планински масив минава по дължината на западното крайбрежие на Южна Америка?",
        answers: ["Скалистите планини", "Хималаите", "Андите", "Карпатите"],
        correct: 2
    },
    {
        question: "Коя е най-голямата река в Южна Америка?",
        answers: ["Нил", "Амазонка", "Мисисипи", "Ганг"],
        correct: 1
    },
    {
        question: "Какво представлява Патагония?",
        answers: ["Град в Бразилия", "Планинска верига", "Район в Южна Аржентина и Чили", "Вулкан"],
        correct: 2
    },
    {
        question: "Какво е значението на Амазонската екваториална гора?",
        answers: ["Произвежда 20% от кислорода в света", "Най-студената област на Земята", "Тя е пустиня", "Голяма солна равнина"],
        correct: 0
    },
    {
        question: "Коя е столицата на Бразилия?",
        answers: ["Буенос Айрес", "Сантяго", "Лима", "Бразилия"],
        correct: 3
    },
    {
        question: "Коя е най-южната точка на Южна Америка?",
        answers: ["Пунта Галинас", "Магелановия проток", "Кейп Хорн", "Валпарайсо"],
        correct: 2
    },
    {
        question: "Каква е официалната валута на Аржентина?",
        answers: ["Рупия", "Аржентинско песо", "Долар", "Евро"],
        correct: 1
    },
    {
        question: "Кой град е известен с карнавала си и разположен край Атлантическия океан?",
        answers: ["Рио де Жанейро", "Сантяго", "Ла Пас", "Кито"],
        correct: 0
    },
    {
        question: "Кой е най-големият водопаден комплекс в света, разположен между Бразилия и Аржентина?",
        answers: ["Ниагара", "Виктория", "Игуасу", "Анхел"],
        correct: 2
    },
    {
        question: "Кой езеро е най-голямото в Южна Америка?",
        answers: ["Титикака", "Каспийско море", "Виктория", "Маракайбо"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const nextButton = document.getElementById("next-btn");

    questionElement.textContent = questions[currentQuestionIndex].question;
    answerButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].answers[index];
        button.style.backgroundColor = "#e0e0e0";
        button.disabled = false;
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
    const answerButtons = document.querySelectorAll(".answer");
    const correctIndex = questions[currentQuestionIndex].correct;
    const nextButton = document.getElementById("next-btn");

    if (selectedIndex === correctIndex) {
        answerButtons[selectedIndex].style.backgroundColor = "green";
        if (!answerButtons[selectedIndex].classList.contains("answered")) {
            score++;
            document.getElementById("score").textContent = score;
        }
    } else {
        answerButtons[selectedIndex].style.backgroundColor = "red";
    }

    answerButtons.forEach(button => button.disabled = true);
    nextButton.classList.remove("hidden");

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Край";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    const resultElement = document.getElementById("result");
    quizContainer.classList.add("hidden");

    let message = `Вие събрахте общо ${score} точки. `;
    let emoji = "";

    if (score >= 9) {
        message += "Справихте се отлично!";
        emoji = "😊";
    } else if (score >= 7) {
        message += "Справихте се много добре!";
        emoji = "😊";
    } else if (score >= 5) {
        message += "Справихте се добре!";
