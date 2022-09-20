const quiz = [
  {
    question :'藤原道長が摂政になる',
    correct : '1016'
  },
  {
    question: '白河上皇が院政をはじめる',
    correct: '1086'
  },
  {
    question: '保元の乱',
    correct: '1156'
  },
  {
    question :'平治の乱',
    correct : '1159'
  },
  {
    question: '平清盛が太政大臣となる',
    correct: '1167'
  },
  {
    question: '源頼朝が守護地頭を設置',
    correct: '1185'
  },
  {
    question: '源平の戦い',
    correct: '1180'
  },
  {
    question: '平家滅亡',
    correct: '1185'
  },
  {
    question: '源頼朝が征夷大将軍となる',
    correct: '1192'
  },
];
quiz.sort(() => 0.5 - Math.random());

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');

// クイズの問題文を表示
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  answerInput.value = '';
};

setupQuiz();

const clickHandler = () => {
  quiz[quizIndex].input = answerInput.value;
  if (quiz[quizIndex].correct === answerInput.value) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++; // 次の問題へ
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了 正解数は' + score + '/' + quizLength + 'です');
    showAllAnswers();
  }
};

// ボタンクリックで正誤判定
submitButton.addEventListener('click', () => {
  clickHandler();
});

const showAllAnswers = () => {
  const container = document.getElementById('all-answers-container');
  container.style.display = 'block';
  
  const tbody = document.getElementById('all-answers-tbody');
  for (const q of quiz) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${q.question}</td><td>${q.input}</td><td>${q.correct}</td><td>${q.input === q.correct ? '○' : '×'}</td>`;
    tbody.appendChild(row);
  }
};
