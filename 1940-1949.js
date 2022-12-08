const quiz = [
  {
    question :'日独伊三国同盟',
    correct : '1940'
  },
  {
    question: '大政翼賛会',
    correct: '1940'
  },
  {
    question: '日ソ中立条約',
    correct: '1971'
  },
  {
    question :'太平洋戦争',
    correct : '1941' 
  },
  {
    question:'学童疎開',
    correct: '1944'
  },
  {
    question:'本土空襲',
    correct: '1944'
  },
{
    question:'沖縄戦、原爆、ポツダム宣言',
    correct: '1945'
  },
  {
    question:'財閥解体',
    correct: '1945'
  },
  {
    question:'農地改革',
    correct: '1945'
  },
{
    question:'女性の参政権',
    correct: '1945'
  },
{
    question:'教育基本法',
    correct: '1947'
  },
{
    question:'学校教育基本法',
    correct: '1947'
  },
{
    question:'独占禁止法',
    correct: '1947'
  },
{
    question:'労働基準法',
    correct: '1947'
  },
{
    question:'日本国憲法公布',
    correct: '1946'
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
