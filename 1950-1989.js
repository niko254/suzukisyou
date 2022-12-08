const quiz = [
  {
    question :'警察予備隊創設',
    correct : '1950'
  },
  {
    question:'自衛隊創設',
    correct: '1954'
  },
  {
    question: 'サンフランシスコ平和条約',
    correct: '1951'
  },
  {
    question :'日米安全保障条約',
    correct : '1951' 
  },
  {
    question:'日ソ共同宣言',
    correct: '1956'
  },
  {
    question:'国際連合加盟',
    correct: '1956'
  },
{
    question:'東京オリンピック',
    correct: '1964'
  },
  {
    question:'東海道新幹線開通',
    correct: '1964'
  },
  {
    question:'日韓基本条約',
    correct: '1965'
  },
{
    question:'小笠原諸島日本復帰',
    correct: '1968'
  },
{
    question:'大阪万博',
    correct: '1970'
  },
{
    question:'沖縄日本復帰',
    correct: '1972'
  },
{
    question:'日中共同声明',
    correct: '1972'
  },
{
    question:'石油危機',
    correct: '1973'
  },
{
    question:'日中平和友好条約',
    correct: '1978'
  },
{
    question:'消費税導入',
    correct: '1989'
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
