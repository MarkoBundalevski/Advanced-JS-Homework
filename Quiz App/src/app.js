const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions;
let currentQuestionIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer());
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
    clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    nextButton.classList.remove('hide');
}
    


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What is the capital of Sweden?",
    answers: [
      { text: "Stockholm", correct: true },
      { text: "Oslo", correct: false },
    ],
  },
  {
    question: "Where does pizza originate from?",
    answers: [
      { text: "Italy", correct: true },
      { text: "Spain", correct: false },
    ],
  },
  {
    question: "What does a panda eat?",
    answers: [
      { text: "Bamboo", correct: true },
      { text: "Pinecone", correct: false },
    ],
  },
  {
    question: "What is the capital of Macedonia?",
    answers: [
      { text: "Skopje", correct: true },
      { text: "Belgrade", correct: false },
    ],
  },
  {
    question: "What is the square root of 16?",
    answers: [
      { text: "4", correct: true },
      { text: "0.4", correct: false },
    ],
  },
];