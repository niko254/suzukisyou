const quiz = [
  {
    question :'国会開設の勅諭',
    correct : '1881'
  },
  {
    question: '内閣制度できる',
    correct: '1885'
  },
  {
    question: '大日本帝国憲法の発布',
    correct: '1889'
  },
  {
    question :'第一回帝国議会',
    correct : '1890' 
  },
  {
    question:'領事裁判権の撤廃',
    correct: '1894'
  },
  {
    question:'日清戦争',
    correct: '1894'
  },
{
    question:'日清戦争終わり',
    correct: '1895'
  },
  {
    question:'下関条約',
    correct: '1895'
  },
  {
    question:'三国干渉',
    correct: '1895'
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
