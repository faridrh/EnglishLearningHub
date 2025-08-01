---
layout: layouts/page.njk
title: Participle Clauses Exercises
description: Interactive exercises to practice participle clauses. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Advanced
collection: grammar
---

# Participle Clauses Exercises

Practice using participle clauses with these interactive exercises. Transform sentences using present and past participles and get instant feedback on your answers.

## Exercise Instructions

Use participle clauses to create more concise sentences:
- **Present Participle (-ing)**: Shows active meaning, simultaneous or sequential actions
- **Past Participle (-ed)**: Shows passive meaning or completed actions
- **Perfect Participle (having + past participle)**: Shows earlier completed action

<div class="interactive-exercise" id="participle-clauses-exercise" data-exercise-id="participle-clauses-advanced">
  <div class="exercise-item">
    <p><strong>1.</strong> Because she was feeling tired, she went to bed early.<br>
    <input type="text" class="fill-blank" data-answer="Feeling tired" placeholder="____________">, she went to bed early.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The book was written by a famous author, and it became a bestseller.<br>
    <input type="text" class="fill-blank" data-answer="Written by a famous author" placeholder="____________">, the book became a bestseller.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> After he had finished his homework, he watched TV.<br>
    <input type="text" class="fill-blank" data-answer="Having finished" placeholder="____________"> his homework, he watched TV.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> While I was walking in the park, I met an old friend.<br>
    <input type="text" class="fill-blank" data-answer="Walking in the park" placeholder="____________">, I met an old friend.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The car was damaged in the accident, and it needs repair.<br>
    <input type="text" class="fill-blank" data-answer="Damaged in the accident" placeholder="____________">, the car needs repair.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> Since she had lived in France for five years, she spoke French fluently.<br>
    <input type="text" class="fill-blank" data-answer="Having lived" placeholder="____________"> in France for five years, she spoke French fluently.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('participle-clauses-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('participle-clauses-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="participle-clauses-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="participle-clauses-exercise-score"></p>
    <div id="participle-clauses-exercise-feedback"></div>
  </div>
</div>

<script>
function checkAnswers(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const inputs = exercise.querySelectorAll('.fill-blank');
  const resultsDiv = document.getElementById(exerciseId + '-results');
  const scoreP = document.getElementById(exerciseId + '-score');
  const feedbackDiv = document.getElementById(exerciseId + '-feedback');
  
  let correct = 0;
  let total = inputs.length;
  let feedback = '';
  
  inputs.forEach((input, index) => {
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = input.dataset.answer.toLowerCase();
    
    input.classList.remove('correct', 'incorrect');
    
    if (userAnswer === correctAnswer) {
      input.classList.add('correct');
      correct++;
    } else {
      input.classList.add('incorrect');
      feedback += `<p><strong>Question ${index + 1}:</strong> Your answer: "${input.value}" | Correct answer: "${input.dataset.answer}"</p>`;
    }
  });
  
  resultsDiv.style.display = 'block';
  scoreP.textContent = `Score: ${correct}/${total} (${Math.round(correct/total*100)}%)`;
  
  if (correct === total) {
    feedbackDiv.innerHTML = '<p style="color: green; font-weight: bold;">Excellent! All answers are correct! 🎉</p>';
  } else {
    feedbackDiv.innerHTML = feedback;
  }
}

function resetExercise(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const inputs = exercise.querySelectorAll('.fill-blank');
  const resultsDiv = document.getElementById(exerciseId + '-results');
  
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('correct', 'incorrect');
  });
  
  resultsDiv.style.display = 'none';
}
</script>

<style>
.interactive-exercise {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
}

.exercise-item {
  margin: 20px 0;
  line-height: 1.8;
  font-size: 16px;
}

.fill-blank {
  border: 2px solid #ddd;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 16px;
  min-width: 180px;
  margin: 0 5px;
  transition: border-color 0.3s;
  font-family: inherit;
}

.fill-blank:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

.fill-blank.correct {
  border-color: #28a745;
  background-color: #d4edda;
}

.fill-blank.incorrect {
  border-color: #dc3545;
  background-color: #f8d7da;
}

.exercise-controls {
  margin: 25px 0;
  text-align: center;
}

.check-btn, .reset-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 12px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.check-btn:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.reset-btn {
  background: #6c757d;
}

.reset-btn:hover {
  background: #5a6268;
  transform: translateY(-1px);
}

.results-section {
  margin-top: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.results-section h4 {
  margin-top: 0;
  color: #007bff;
}

.results-section p {
  margin: 8px 0;
  padding: 10px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  font-size: 14px;
}
</style>

---

## Related Materials

- **[Participle Clauses Grammar Lesson](/grammar/advanced/participle-clauses/)** - Learn the rules and theory
- **[Advanced Writing Style](/grammar/advanced/ellipsis-substitution/)** - Other ways to improve writing flow
- **[More Advanced Exercises](/exercises/)** - Practice other advanced grammar topics