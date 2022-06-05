const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "4",
    choice3: "21",
    choice4: "17",
    answer: 2,
  },
  {
    question: "When did World War II begin?",
    choice1: "1881",
    choice2: "1991",
    choice3: "1934",
    choice4: "1939",
    answer: 4,
  },
  {
    question: "What is the capital of Malta?",
    choice1: "London",
    choice2: "Montevideo",
    choice3: "Valletta",
    choice4: "Cape Town",
    answer: 3,
  },
  {
    question: "How many championships has Michael Jordan won?",
    choice1: "2",
    choice2: "4",
    choice3: "1",
    choice4: "6",
    answer: 4,
  },
  {
    question: "In what year was the cartoon Bambi released?",
    choice1: "1942",
    choice2: "1935",
    choice3: "1954",
    choice4: "1943",
    answer: 1,
  },
  {
    question: "Why is 4th of July significant?",
    choice1: "It isn't...",
    choice2: "No one cares.",
    choice3: "I guess it's Independence Day or whatever",
    choice4: "Apples",
    answer: 3,
  },
  {
    question: "Which date marked the beginning of the Cold War era?",
    choice1: "Dec 10, 1942",
    choice2: "Jun 5, 1990",
    choice3: "Mar 12, 1947",
    choice4: "Apr 2, 1950",
    answer: 3,
  },
  {
    question: "Who is the current Emperor of Japan?",
    choice1: "Naruhito",
    choice2: "Jimmu",
    choice3: "Wakasazaki",
    choice4: "Hirohito",
    answer: 1,
  },
  {
    question: "What is the one issue the USA has, but no other country in the world?",
    choice1: "School shootings",
    choice2: "Schools",
    choice3: "Shootings",
    choice4: "Shooting in schools",
    answer: 1,
  },
  {
    question: "Which sport is the most popular globaly?",
    choice1: "Basketball",
    choice2: "Football (do not call it soccer...)",
    choice3: "Rugby",
    choice4: "Volleyball",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("../main/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
