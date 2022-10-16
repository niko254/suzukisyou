const quiz = [
  {
    question :'桜田門外の変',
    correct : '1860'
  },
  {
    question: '生麦事件',
    correct: '1862'
  },
  {
    question: '薩英戦争',
    correct: '1863'
  },
  {
    question :'四国連合艦隊下関砲撃',
    correct : '1864'
  },
  {
    question:'薩長同盟',
    correct: '1866'
  },
  {
    question:'大政奉還',
    correct: '1867'
  },
  {
    question:'王政復古の大号令',
    correct: '1867'
  },
  {
    question:'鳥羽、伏見の戦い',
    correct: '1868'
  },
 {
    question:'戊辰戦争',
    correct: '1868'
  },
 {
    question:'五箇条の御誓文',
    correct: '1868'
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
