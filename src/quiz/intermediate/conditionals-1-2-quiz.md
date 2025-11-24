---
layout: layouts/page.njk
title: Conditionals 1 & 2 Quiz - Intermediate English Grammar
description: Test your knowledge of conditionals types 1 and 2 with this interactive 5-question quiz. Perfect for intermediate English learners to practice conditional sentences.
---

# Conditionals 1 & 2 Quiz

Test your understanding of conditionals types 1 and 2 with these 5 questions. Choose the correct answer for each question.

<div class="quiz-container" id="conditionals12Quiz">
  <div class="quiz-progress">
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill"></div>
    </div>
    <span class="progress-text" id="progressText">Question 1 of 5</span>
  </div>

  <div class="quiz-question active" data-question="1">
    <h3>Question 1</h3>
    <p>Complete: "If it rains, I _____ stay home." (Type 1)</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q1" value="will">
        <span>will</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q1" value="would">
        <span>would</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q1" value="would have">
        <span>would have</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback1"></div>
  </div>

  <div class="quiz-question" data-question="2">
    <h3>Question 2</h3>
    <p>Complete: "If I were rich, I _____ travel the world." (Type 2)</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q2" value="will travel">
        <span>will travel</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q2" value="would travel">
        <span>would travel</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q2" value="would have traveled">
        <span>would have traveled</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback2"></div>
  </div>

  <div class="quiz-question" data-question="3">
    <h3>Question 3</h3>
    <p>Which is a Type 1 conditional?</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q3" value="If you study hard, you will pass the exam">
        <span>If you study hard, you will pass the exam</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q3" value="If you studied hard, you would pass the exam">
        <span>If you studied hard, you would pass the exam</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q3" value="If you had studied hard, you would have passed the exam">
        <span>If you had studied hard, you would have passed the exam</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback3"></div>
  </div>

  <div class="quiz-question" data-question="4">
    <h3>Question 4</h3>
    <p>Complete: "If she _____ the job offer, she would be happy." (Type 2)</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q4" value="accepts">
        <span>accepts</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q4" value="accepted">
        <span>accepted</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q4" value="will accept">
        <span>will accept</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback4"></div>
  </div>

  <div class="quiz-question" data-question="5">
    <h3>Question 5</h3>
    <p>What is the main difference between Type 1 and Type 2 conditionals?</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q5" value="Type 1 is about possible futures, Type 2 is about imaginary situations">
        <span>Type 1 is about possible futures, Type 2 is about imaginary situations</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q5" value="Type 1 uses past tense, Type 2 uses present tense">
        <span>Type 1 uses past tense, Type 2 uses present tense</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q5" value="They have no difference">
        <span>They have no difference</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback5"></div>
  </div>

  <div class="quiz-navigation">
    <button id="prevBtn" onclick="changeQuestion(-1)" disabled>Previous</button>
    <button id="nextBtn" onclick="changeQuestion(1)">Next</button>
    <button id="submitBtn" onclick="submitQuiz()" style="display: none;">Submit Quiz</button>
  </div>

  <div class="quiz-results" id="quizResults" style="display: none;">
    <h3>Quiz Results</h3>
    <p id="finalScore"></p>
    <button onclick="resetQuiz()">Try Again</button>
  </div>
</div>

<script>
let currentQuestion = 1;
const totalQuestions = 5;
const correctAnswers = {
  q1: 'will',
  q2: 'would travel', 
  q3: 'If you study hard, you will pass the exam',
  q4: 'accepted',
  q5: 'Type 1 is about possible futures, Type 2 is about imaginary situations'
};

function changeQuestion(direction) {
  const currentQ = document.querySelector('.quiz-question.active');
  currentQ.classList.remove('active');
  
  currentQuestion += direction;
  
  const nextQ = document.querySelector(`[data-question="${currentQuestion}"]`);
  nextQ.classList.add('active');
  
  updateProgress();
  updateNavigation();
}

function updateProgress() {
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  const percentage = (currentQuestion / totalQuestions) * 100;
  progressFill.style.width = percentage + '%';
  progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

function updateNavigation() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  
  prevBtn.disabled = currentQuestion === 1;
  
  if (currentQuestion === totalQuestions) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'inline-block';
    submitBtn.style.display = 'none';
  }
}

function submitQuiz() {
  let score = 0;
  
  for (let i = 1; i <= totalQuestions; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    const feedback = document.getElementById(`feedback${i}`);
    
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[`q${i}`]) {
        score++;
        feedback.innerHTML = `<span class="correct">✓ Correct! Your answer: <strong>${selectedAnswer.value}</strong></span>`;
        feedback.className = 'quiz-feedback correct';
      } else {
        feedback.innerHTML = `<span class="incorrect">✗ Your answer: <strong>${selectedAnswer.value}</strong><br>Correct answer: <strong>${correctAnswers[`q${i}`]}</strong></span>`;
        feedback.className = 'quiz-feedback incorrect';
      }
    } else {
      feedback.innerHTML = `<span class="incorrect">✗ No answer selected<br>Correct answer: <strong>${correctAnswers[`q${i}`]}</strong></span>`;
      feedback.className = 'quiz-feedback incorrect';
    }
    
    feedback.style.display = 'block';
  }
  
  const resultsDiv = document.getElementById('quizResults');
  const finalScore = document.getElementById('finalScore');
  
  const percentage = Math.round((score / totalQuestions) * 100);
  finalScore.textContent = `You scored ${score} out of ${totalQuestions} (${percentage}%)`;
  
  resultsDiv.style.display = 'block';
  
  // Hide navigation buttons
  document.querySelector('.quiz-navigation').style.display = 'none';
}

function resetQuiz() {
  currentQuestion = 1;
  
  // Clear all selections and feedback
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  
  document.querySelectorAll('.quiz-feedback').forEach(feedback => {
    feedback.style.display = 'none';
    feedback.innerHTML = '';
  });
  
  // Show first question
  document.querySelectorAll('.quiz-question').forEach(q => {
    q.classList.remove('active');
  });
  document.querySelector('[data-question="1"]').classList.add('active');
  
  // Hide results and show navigation
  document.getElementById('quizResults').style.display = 'none';
  document.querySelector('.quiz-navigation').style.display = 'block';
  
  updateProgress();
  updateNavigation();
}

// Initialize quiz
updateProgress();
updateNavigation();
</script>

<style>
.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.quiz-progress {
  margin-bottom: 30px;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
  width: 20%;
}

.progress-text {
  font-size: 14px;
  color: #666;
}

.quiz-question {
  display: none;
  margin-bottom: 30px;
}

.quiz-question.active {
  display: block;
}

.quiz-question h3 {
  color: #333;
  margin-bottom: 15px;
}

.quiz-question p {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
}

.quiz-options {
  margin-bottom: 20px;
}

.quiz-option {
  display: block;
  margin-bottom: 10px;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.quiz-option:hover {
  border-color: #007bff;
  background-color: #f8f9fa;
}

.quiz-option input[type="radio"] {
  margin-right: 10px;
}

.quiz-option span {
  font-size: 16px;
}

.quiz-feedback {
  display: none;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}

.quiz-feedback.correct {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.quiz-feedback.incorrect {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.quiz-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.quiz-navigation button {
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#prevBtn, #nextBtn, #submitBtn {
  background-color: #007bff;
  color: white;
}

#prevBtn:hover, #nextBtn:hover, #submitBtn:hover {
  background-color: #0056b3;
}

#prevBtn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.quiz-results {
  text-align: center;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin-top: 30px;
}

.quiz-results h3 {
  color: #333;
  margin-bottom: 15px;
}

.quiz-results button {
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
}

.quiz-results button:hover {
  background-color: #218838;
}
</style>

---

## Related Learning Materials

- **Grammar Lesson**: [Conditionals 1 & 2](/grammar/intermediate/conditionals-1-2/)
- **Practice Exercises**: [Conditionals 1 & 2 Exercises](/grammar/intermediate/conditionals-1-2-exercises/)
- **Vocabulary**: [Intermediate Vocabulary](/vocabulary/intermediate/)
- **Back to All Quizzes**: [Grammar Quiz](/quiz/)

---

*Practice makes perfect! Try this quiz multiple times to improve your understanding of conditionals.*
