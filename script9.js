const quiz = [
  {
    question :'フェートン号事件',
    correct : '1808'
  },
  {
    question: '異国船打払令',
    correct: '1825'
  },
  {
    question: '天保の大ききん',
    correct: '1833'
  },
  {
    question :'大塩平八郎の乱',
    correct : '1837'
  },
  {
    question:'天保の改革',
    correct: '1841'
  },
  {
    question:'ペリー来航in浦賀',
    correct: '1853'
  },
  {
    question:'日米和親条約',
    correct: '1854'
  },
  {
    question:'日米修好通商条約',
    correct: '1858'
  },
 {
    question:'安政の大獄',
    correct: '1859'
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
