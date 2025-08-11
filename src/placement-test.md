---
layout: layouts/page.njk
title: English Level Placement Test
description: Take our comprehensive 25-question English placement test to assess your grammar, vocabulary, reading comprehension, and sentence structure skills. Get instant results with your proficiency level.
keywords: english placement test, english level test, english proficiency assessment, grammar test, vocabulary test, language assessment
eleventyNavigation:
  key: Placement Test
  order: 5
---

# English Level Placement Test

Test your English proficiency with our comprehensive 25-question placement test. This assessment covers grammar, vocabulary, reading comprehension, and sentence structure to determine your current English level.

## Instructions
- Choose the best answer (A, B, C, or D) for each question
- There is only one correct answer per question
- Take your time and read each question carefully
- Your results will show your proficiency level at the end

<div id="placement-test-container">
  <div id="test-progress" class="progress-bar">
    <div id="progress-fill" class="progress-fill"></div>
    <span id="progress-text">Question 1 of 25</span>
  </div>

  <div id="question-container" class="question-container">
    <!-- Questions will be loaded here by JavaScript -->
  </div>

  <div id="navigation-buttons" class="nav-buttons">
    <button id="prev-btn" class="btn btn-secondary" onclick="previousQuestion()" disabled>Previous</button>
    <button id="next-btn" class="btn btn-primary" onclick="nextQuestion()" disabled>Next</button>
    <button id="submit-btn" class="btn btn-success" onclick="submitTest()" style="display: none;">Submit Test</button>
  </div>

  <div id="results-container" class="results-container" style="display: none;">
    <h2>Your Test Results</h2>
    <div id="score-display" class="score-display"></div>
    <div id="level-display" class="level-display"></div>
    <div id="level-description" class="level-description"></div>
    <div class="action-buttons">
      <button class="btn btn-primary" onclick="restartTest()">Retake Test</button>
      <a href="/grammar/" class="btn btn-secondary">Start Learning Grammar</a>
    </div>
  </div>
</div>

<style>
.progress-bar {
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 15px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  border-radius: 15px;
  transition: width 0.3s ease;
  width: 4%;
}

#progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #333;
  z-index: 1;
}

.question-container {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 20px 0;
  min-height: 300px;
}

.question {
  margin-bottom: 20px;
}

.question h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.reading-passage {
  background: #f8f9fa;
  padding: 20px;
  border-left: 4px solid #4CAF50;
  margin: 20px 0;
  border-radius: 5px;
  font-style: italic;
}

.options {
  display: grid;
  gap: 10px;
  margin-top: 15px;
}

.option {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option:hover {
  background: #e3f2fd;
  border-color: #2196F3;
}

.option.selected {
  background: #e8f5e8;
  border-color: #4CAF50;
  color: #2e7d32;
}

.option input[type="radio"] {
  margin-right: 12px;
  transform: scale(1.2);
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background: #4CAF50;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #45a049;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background: #5a6268;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #218838;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.results-container {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
  margin: 20px 0;
}

.score-display {
  font-size: 48px;
  font-weight: bold;
  color: #4CAF50;
  margin: 20px 0;
}

.level-display {
  font-size: 32px;
  font-weight: bold;
  margin: 15px 0;
  padding: 15px 30px;
  border-radius: 8px;
  display: inline-block;
}

.level-beginner {
  background: #ffebee;
  color: #c62828;
  border: 2px solid #ef5350;
}

.level-intermediate {
  background: #fff3e0;
  color: #ef6c00;
  border: 2px solid #ff9800;
}

.level-upper-intermediate {
  background: #e8f5e8;
  color: #2e7d32;
  border: 2px solid #4caf50;
}

.level-advanced {
  background: #e3f2fd;
  color: #1565c0;
  border: 2px solid #2196f3;
}

.level-description {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.action-buttons {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.section-header {
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 20px 0 15px 0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .question-container {
    padding: 20px;
  }
  
  .nav-buttons {
    flex-direction: column;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>

<script>
const questions = [
  // Section 1: Grammar
  {
    section: "Grammar",
    question: "What is the correct form of the verb in this sentence?\n\"She ___ to the store every Saturday.\"",
    options: ["go", "goes", "going", "is going"],
    correct: 1
  },
  {
    section: "Grammar",
    question: "Choose the correct pronoun:\n\"This book belongs to ___. I lent it to her yesterday.\"",
    options: ["I", "me", "my", "mine"],
    correct: 3
  },
  {
    section: "Grammar",
    question: "Which sentence is correct?",
    options: [
      "I don't have no money.",
      "I don't have any money.", 
      "I doesn't have any money.",
      "I no have any money."
    ],
    correct: 1
  },
  {
    section: "Grammar",
    question: "What is the correct past tense of the verb \"to buy\"?",
    options: ["Buyed", "Bought", "Buying", "Buys"],
    correct: 1
  },
  {
    section: "Grammar",
    question: "Complete the sentence:\n\"If I ___ enough money, I would travel the world.\"",
    options: ["have", "had", "has", "having"],
    correct: 1
  },
  {
    section: "Grammar",
    question: "Which is the correct question form?",
    options: [
      "Where you live?",
      "Where do you live?",
      "Where you do live?",
      "Where does you live?"
    ],
    correct: 1
  },
  {
    section: "Grammar",
    question: "Choose the correct word:\n\"There are ___ people waiting outside.\"",
    options: ["much", "many", "a lot", "any"],
    correct: 1
  },
  {
    section: "Grammar",
    question: "Which sentence uses the correct conditional?",
    options: [
      "If I will study, I pass the exam.",
      "If I study, I will pass the exam.",
      "If I studied, I pass the exam.",
      "If I studying, I will pass the exam."
    ],
    correct: 1
  },

  // Section 2: Vocabulary
  {
    section: "Vocabulary",
    question: "What is a synonym for \"happy\"?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    correct: 2
  },
  {
    section: "Vocabulary",
    question: "Choose the correct word to complete the sentence:\n\"The movie was so ___ that I couldn't stop laughing.\"",
    options: ["boring", "funny", "serious", "scary"],
    correct: 1
  },
  {
    section: "Vocabulary",
    question: "What does the word \"enormous\" mean?",
    options: ["Very small", "Very large", "Very old", "Very fast"],
    correct: 1
  },
  {
    section: "Vocabulary",
    question: "Which word is closest in meaning to \"difficult\"?",
    options: ["Easy", "Hard", "Quick", "Simple"],
    correct: 1
  },
  {
    section: "Vocabulary",
    question: "Choose the correct preposition:\n\"I'm looking forward ___ seeing you tomorrow.\"",
    options: ["to", "at", "for", "on"],
    correct: 0
  },
  {
    section: "Vocabulary",
    question: "What is the opposite of \"generous\"?",
    options: ["Kind", "Selfish", "Friendly", "Honest"],
    correct: 1
  },
  {
    section: "Vocabulary",
    question: "Complete the sentence:\n\"She has a great ___ of humor.\"",
    options: ["sense", "feeling", "thought", "idea"],
    correct: 0
  },

  // Section 3: Reading Comprehension
  {
    section: "Reading Comprehension",
    passage: "Anna loves traveling. Last summer, she visited Paris with her family. They stayed for a week and visited famous places like the Eiffel Tower and the Louvre Museum. Anna enjoyed trying French food, especially croissants. She hopes to return to Paris one day.",
    question: "Where did Anna travel last summer?",
    options: ["London", "Paris", "New York", "Rome"],
    correct: 1
  },
  {
    section: "Reading Comprehension",
    passage: "Anna loves traveling. Last summer, she visited Paris with her family. They stayed for a week and visited famous places like the Eiffel Tower and the Louvre Museum. Anna enjoyed trying French food, especially croissants. She hopes to return to Paris one day.",
    question: "How long did Anna stay in Paris?",
    options: ["One day", "One week", "One month", "One year"],
    correct: 1
  },
  {
    section: "Reading Comprehension",
    passage: "Anna loves traveling. Last summer, she visited Paris with her family. They stayed for a week and visited famous places like the Eiffel Tower and the Louvre Museum. Anna enjoyed trying French food, especially croissants. She hopes to return to Paris one day.",
    question: "What did Anna enjoy eating in Paris?",
    options: ["Pizza", "Croissants", "Sushi", "Tacos"],
    correct: 1
  },
  {
    section: "Reading Comprehension",
    passage: "Anna loves traveling. Last summer, she visited Paris with her family. They stayed for a week and visited famous places like the Eiffel Tower and the Louvre Museum. Anna enjoyed trying French food, especially croissants. She hopes to return to Paris one day.",
    question: "Which place did Anna visit in Paris?",
    options: ["Big Ben", "The Colosseum", "The Louvre Museum", "The Statue of Liberty"],
    correct: 2
  },

  // Section 4: Sentence Structure and Usage
  {
    section: "Sentence Structure and Usage",
    question: "Which sentence is correct?",
    options: [
      "He run to school every day.",
      "He runs to school every day.",
      "He running to school every day.",
      "He is run to school every day."
    ],
    correct: 1
  },
  {
    section: "Sentence Structure and Usage",
    question: "Choose the correct word order:",
    options: [
      "Always she is late for class.",
      "She always is late for class.",
      "She is always late for class.",
      "Is she always late for class."
    ],
    correct: 2
  },
  {
    section: "Sentence Structure and Usage",
    question: "Which sentence uses the correct article?",
    options: [
      "I saw a elephant at the zoo.",
      "I saw an elephant at the zoo.",
      "I saw elephant at the zoo.",
      "I saw the elephant at zoo."
    ],
    correct: 1
  },
  {
    section: "Sentence Structure and Usage",
    question: "Complete the sentence:\n\"They ___ in this city since 2010.\"",
    options: ["lived", "have lived", "living", "lives"],
    correct: 1
  },
  {
    section: "Sentence Structure and Usage",
    question: "Which sentence is in the passive voice?",
    options: [
      "The dog chased the cat.",
      "The cat was chased by the dog.",
      "The cat is chasing the dog.",
      "The dog is chasing the cat."
    ],
    correct: 1
  },
  {
    section: "Sentence Structure and Usage",
    question: "Choose the correct word:\n\"I'm not sure ___ I should go to the party tonight.\"",
    options: ["if", "that", "what", "when"],
    correct: 0
  }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(-1);
let testCompleted = false;

function loadQuestion(index) {
  const question = questions[index];
  const container = document.getElementById('question-container');
  
  let sectionHeader = '';
  if (index === 0 || questions[index-1].section !== question.section) {
    sectionHeader = `<div class="section-header">Section: ${question.section}</div>`;
  }

  let passageHTML = '';
  if (question.passage) {
    passageHTML = `<div class="reading-passage">${question.passage}</div>`;
  }

  container.innerHTML = `
    ${sectionHeader}
    <div class="question">
      <h3>Question ${index + 1}:</h3>
      ${passageHTML}
      <p>${question.question.replace(/\n/g, '<br>')}</p>
      <div class="options">
        ${question.options.map((option, i) => `
          <div class="option ${answers[index] === i ? 'selected' : ''}" onclick="selectAnswer(${index}, ${i})">
            <input type="radio" name="question${index}" value="${i}" ${answers[index] === i ? 'checked' : ''}>
            <span>${String.fromCharCode(65 + i)}) ${option}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  updateProgress();
  updateNavigationButtons();
}

function selectAnswer(questionIndex, answerIndex) {
  answers[questionIndex] = answerIndex;
  
  // Update visual selection
  const options = document.querySelectorAll('.option');
  options.forEach((option, i) => {
    if (i === answerIndex) {
      option.classList.add('selected');
      option.querySelector('input').checked = true;
    } else {
      option.classList.remove('selected');
      option.querySelector('input').checked = false;
    }
  });

  updateNavigationButtons();
}

function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const percentage = ((currentQuestion + 1) / questions.length) * 100;
  
  progressFill.style.width = percentage + '%';
  progressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  prevBtn.disabled = currentQuestion === 0;
  
  if (currentQuestion === questions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
    submitBtn.disabled = answers[currentQuestion] === -1;
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
    nextBtn.disabled = answers[currentQuestion] === -1;
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
}

function submitTest() {
  if (answers.includes(-1)) {
    alert('Please answer all questions before submitting.');
    return;
  }

  calculateResults();
  showResults();
}

function calculateResults() {
  let correctAnswers = 0;
  
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].correct) {
      correctAnswers++;
    }
  }

  const score = correctAnswers;
  let level, levelClass, description;

  if (score <= 8) {
    level = 'Beginner (A1-A2)';
    levelClass = 'level-beginner';
    description = 'You have basic knowledge and should focus on fundamental grammar, vocabulary, and sentence structure. Start with our beginner grammar lessons to build a strong foundation.';
  } else if (score <= 16) {
    level = 'Intermediate (B1-B2)';
    levelClass = 'level-intermediate';
    description = 'You have a good grasp of English but may need to work on more complex grammar and vocabulary. Our intermediate lessons will help you advance your skills.';
  } else if (score <= 22) {
    level = 'Upper-Intermediate (B2-C1)';
    levelClass = 'level-upper-intermediate';
    description = 'You are proficient but may make occasional errors in advanced structures or nuanced vocabulary. Focus on advanced grammar and expand your vocabulary range.';
  } else {
    level = 'Advanced (C1-C2)';
    levelClass = 'level-advanced';
    description = 'You have a strong command of English and can handle complex language tasks. Continue practicing with advanced materials and focus on nuanced language use.';
  }

  return { score, level, levelClass, description };
}

function showResults() {
  const results = calculateResults();
  
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('navigation-buttons').style.display = 'none';
  document.getElementById('test-progress').style.display = 'none';
  
  const resultsContainer = document.getElementById('results-container');
  document.getElementById('score-display').textContent = `${results.score}/25`;
  
  const levelDisplay = document.getElementById('level-display');
  levelDisplay.textContent = results.level;
  levelDisplay.className = `level-display ${results.levelClass}`;
  
  document.getElementById('level-description').textContent = results.description;
  
  resultsContainer.style.display = 'block';
  
  // Scroll to results
  resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function restartTest() {
  currentQuestion = 0;
  answers = new Array(questions.length).fill(-1);
  testCompleted = false;
  
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('navigation-buttons').style.display = 'flex';
  document.getElementById('test-progress').style.display = 'block';
  document.getElementById('results-container').style.display = 'none';
  
  loadQuestion(0);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize the test
document.addEventListener('DOMContentLoaded', function() {
  loadQuestion(0);
});
</script>