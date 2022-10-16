const quiz = [
  {
    question :'享保の改革は何年か',
    correct : '1716'
  },
  {
    question: '上げ米の制が出されたのは何年か',
    correct: '1722'
  },
  {
    question: '享保の大ききんがおきたのは何年か',
    correct: '1732'
  },
  {
    question :'公事方御定書が出されたのは何年か',
    correct : '1742'
  },
  {
    question:'田沼意次の政治が始まったのは何年か',
    correct: '1767'
  },
  {
    question:'天明の大ききんが起きたのは何年か',
    correct: '1782'
  },
  {
    question:'寛政の改革が起きたのは何年か',
    correct: '1787'
  },
  {
    question:'ロシアのラスクマンが根室にきたのは何年か',
    correct: '1792'
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
