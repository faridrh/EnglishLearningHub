---
layout: layouts/page.njk
title: Conditionals 1 & 2 Exercises
description: Interactive exercises to practice first and second conditional sentences. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Conditionals 1 & 2 Exercises

Practice using first and second conditionals with these interactive exercises. Complete the sentences using the correct conditional form and get instant feedback on your answers.

## Exercise Instructions

Choose the correct conditional form:
- **First Conditional** (real/possible): If + present simple, will + base verb
- **Second Conditional** (unreal/hypothetical): If + past simple, would + base verb
- Note: Use "were" (not "was") for all persons in second conditionals

<div class="interactive-exercise" id="conditionals-exercise" data-exercise-id="conditionals-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> If it <input type="text" class="fill-blank" data-answer="rains" placeholder="______"> (rain) tomorrow, we <input type="text" class="fill-blank" data-answer="will stay" placeholder="______"> (stay) home.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> If I <input type="text" class="fill-blank" data-answer="were" placeholder="______"> (be) rich, I <input type="text" class="fill-blank" data-answer="would travel" placeholder="______"> (travel) around the world.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> We <input type="text" class="fill-blank" data-answer="will miss" placeholder="______"> (miss) the bus if we <input type="text" class="fill-blank" data-answer="don't hurry" placeholder="______"> (not hurry).</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> If she <input type="text" class="fill-blank" data-answer="studied" placeholder="______"> (study) harder, she <input type="text" class="fill-blank" data-answer="would pass" placeholder="______"> (pass) the exam.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> If you <input type="text" class="fill-blank" data-answer="call" placeholder="______"> (call) me later, I <input type="text" class="fill-blank" data-answer="will help" placeholder="______"> (help) you with your homework.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> What <input type="text" class="fill-blank" data-answer="would" placeholder="______"> you <input type="text" class="fill-blank" data-answer="do" placeholder="______"> (do) if you <input type="text" class="fill-blank" data-answer="won" placeholder="______"> (win) the lottery?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('conditionals-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('conditionals-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="conditionals-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="conditionals-exercise-score"></p>
    <div id="conditionals-exercise-feedback"></div>
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
      feedback += `<p><strong>Blank ${index + 1}:</strong> Your answer: "${input.value}" | Correct answer: "${input.dataset.answer}"</p>`;
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
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.exercise-item {
  margin: 15px 0;
  line-height: 1.6;
}

.fill-blank {
  border: 2px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  min-width: 100px;
  margin: 0 5px;
  transition: border-color 0.3s;
}

.fill-blank:focus {
  outline: none;
  border-color: #007bff;
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
  margin: 20px 0;
  text-align: center;
}

.check-btn, .reset-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.check-btn:hover {
  background: #0056b3;
}

.reset-btn {
  background: #6c757d;
}

.reset-btn:hover {
  background: #5a6268;
}

.results-section {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 5px;
  border-left: 4px solid #007bff;
}

.results-section p {
  margin: 5px 0;
  padding: 8px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 3px;
  font-size: 14px;
}
</style>

---

## Related Materials

- **[Conditionals 1 & 2 Grammar Lesson](/grammar/intermediate/conditionals-1-2/)** - Learn the rules and theory
- **[Advanced Conditionals](/grammar/advanced/conditionals-3-mixed/)** - Third conditional and mixed types
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics