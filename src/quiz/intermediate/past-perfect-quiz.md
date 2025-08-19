---
layout: layouts/page.njk
title: Past Perfect Quiz - Intermediate English Grammar
description: Test your knowledge of Past Perfect tense with this interactive 5-question quiz. Perfect for intermediate English learners.
---

# Past Perfect Quiz

Test your understanding of Past Perfect tense with these 5 questions. Choose the correct answer for each question.

<div class="quiz-container" id="pastPerfectQuiz">
  <div class="quiz-progress">
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill"></div>
    </div>
    <span class="progress-text" id="progressText">Question 1 of 5</span>
  </div>

  <div class="quiz-question active" data-question="1">
    <h3>Question 1</h3>
    <p>When I arrived, she _____ already _____ (leave).</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q1" value="has left">
        <span>has left</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q1" value="had left">
        <span>had left</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q1" value="was leaving">
        <span>was leaving</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback1"></div>
  </div>

  <div class="quiz-question" data-question="2">
    <h3>Question 2</h3>
    <p>They _____ never _____ (see) such a beautiful sunset before.</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q2" value="have seen">
        <span>have seen</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q2" value="had seen">
        <span>had seen</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q2" value="saw">
        <span>saw</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback2"></div>
  </div>

  <div class="quiz-question" data-question="3">
    <h3>Question 3</h3>
    <p>After she _____ (finish) her homework, she went to bed.</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q3" value="finished">
        <span>finished</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q3" value="had finished">
        <span>had finished</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q3" value="has finished">
        <span>has finished</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback3"></div>
  </div>

  <div class="quiz-question" data-question="4">
    <h3>Question 4</h3>
    <p>I realized I _____ (forget) to lock the door.</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q4" value="forgot">
        <span>forgot</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q4" value="had forgotten">
        <span>had forgotten</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q4" value="have forgotten">
        <span>have forgotten</span>
      </label>
    </div>
    <div class="quiz-feedback" id="feedback4"></div>
  </div>

  <div class="quiz-question" data-question="5">
    <h3>Question 5</h3>
    <p>By the time we arrived, the movie _____ (start).</p>
    <div class="quiz-options">
      <label class="quiz-option">
        <input type="radio" name="q5" value="started">
        <span>started</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q5" value="had started">
        <span>had started</span>
      </label>
      <label class="quiz-option">
        <input type="radio" name="q5" value="has started">
        <span>has started</span>
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
  q1: 'had left',
  q2: 'had seen', 
  q3: 'had finished',
  q4: 'had forgotten',
  q5: 'had started'
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
  
  document.querySelector('.quiz-navigation').style.display = 'none';
}

function resetQuiz() {
  currentQuestion = 1;
  
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = false;
  });
  
  document.querySelectorAll('.quiz-feedback').forEach(feedback => {
    feedback.style.display = 'none';
    feedback.innerHTML = '';
  });
  
  document.querySelectorAll('.quiz-question').forEach(q => {
    q.classList.remove('active');
  });
  document.querySelector('[data-question="1"]').classList.add('active');
  
  document.getElementById('quizResults').style.display = 'none';
  document.querySelector('.quiz-navigation').style.display = 'block';
  
  updateProgress();
  updateNavigation();
}

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

- **Grammar Lesson**: [Past Perfect](/grammar/intermediate/past-perfect/)
- **Practice Exercises**: [Past Perfect Exercises](/grammar/intermediate/past-perfect-exercises/)
- **Vocabulary**: [Intermediate Vocabulary](/vocabulary/intermediate/)
- **Back to All Quizzes**: [Grammar Quiz](/quiz/)

---

*Practice makes perfect! Try this quiz multiple times to improve your understanding of Past Perfect.*