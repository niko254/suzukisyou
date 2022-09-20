const quiz = [
  {
    question :'ポルトガル人が鉄砲を伝える(種子島)',
    correct : '1543'
  },
  {
    question: 'ザビエルがキリスト教を伝える',
    correct: '1549'
  },
  {
    question: '織田信長が室町幕府を滅ぼす',
    correct: '1573'
  },
  {
    question :'太閤検地',
    correct : '1582'
  },
  {
    question:'刀狩り',
    correct: '1588'
  },
  {
    question:'豊臣秀吉が全国を統一する',
    correct: '1590'
  },
  {
    question:'豊臣秀吉が朝鮮に出兵する',
    correct: '1592'
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
