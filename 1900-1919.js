const quiz = [
  {
    question :'八幡製鉄所操業開始',
    correct : '1901'
  },
  {
    question: '日英同盟',
    correct: '1902'
  },
  {
    question: '日露戦争',
    correct: '1904'
  },
  {
    question :'日露戦争終わり',
    correct : '1905' 
  },
  {
    question:'ポーツマス条約',
    correct: '1905'
  },
  {
    question:'韓国併合',
    correct: '1910'
  },
{
    question:'関税自主権回復',
    correct: '1911'
  },
  {
    question:'二十一か条の要求',
    correct: '1915'
  },
  {
    question:'シベリア出兵',
    correct: '1918'
  },
{
    question:'原敬政党内閣',
    correct: '1918'
  },
{
    question:'米騒動',
    correct: '1918'
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
