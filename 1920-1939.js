const quiz = [
  {
    question :'国際連盟加盟',
    correct : '1920'
  },
  {
    question: '全国水平社創立',
    correct: '1922'
  },
  {
    question: '関東大震災',
    correct: '1923'
  },
  {
    question :'普通選挙法',
    correct : '1925' 
  },
  {
    question:'治安維持法',
    correct: '1925'
  },
  {
    question:'ラジオ放送開始',
    correct: '1925'
  },
{
    question:'五一五事件',
    correct: '1932'
  },
{
    question:'満州国建国',
    correct: '1932'
  },
{
    question:'満州事変',
    correct: '1931'
  },
  {
    question:'国際連盟脱退',
    correct: '1933'
  },
  {
    question:'二二六事件',
    correct: '1936'
  },
{
    question:'日中戦争',
    correct: '1937'
  },
{
    question:'国家総動員法',
    correct: '1938'
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
