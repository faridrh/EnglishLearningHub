---
layout: layouts/page.njk
title: Cleft Sentences Exercises
description: Interactive exercises to practice cleft sentences for emphasis. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Advanced
collection: grammar
---

# Cleft Sentences Exercises

Practice using cleft sentences with these interactive exercises. Transform regular sentences into cleft structures for emphasis and get instant feedback on your answers.

## Exercise Instructions

Use cleft sentence structures for emphasis:
- **It-cleft**: It + be + focus + who/that/when/where + rest
- **Wh-cleft**: What/Who/Where + subject + verb + be + focus
- **Pseudo-cleft**: What I need is... / Where she lives is...

<div class="interactive-exercise" id="cleft-sentences-exercise" data-exercise-id="cleft-sentences-advanced">
  <div class="exercise-item">
    <p><strong>1.</strong> John broke the window. (emphasize John)<br>
    It was <input type="text" class="fill-blank" data-answer="John who broke" placeholder="________________"> the window.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> I need some peace and quiet. (wh-cleft)<br>
    What I need <input type="text" class="fill-blank" data-answer="is some peace and quiet" placeholder="________________">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> She met him at the party. (emphasize at the party)<br>
    It was <input type="text" class="fill-blank" data-answer="at the party that" placeholder="________________"> she met him.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> The noise outside annoys me. (wh-cleft)<br>
    What annoys me <input type="text" class="fill-blank" data-answer="is the noise outside" placeholder="________________">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> We visited Paris last summer. (emphasize last summer)<br>
    It was <input type="text" class="fill-blank" data-answer="last summer when" placeholder="________________"> we visited Paris.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> She wants to learn Spanish. (pseudo-cleft)<br>
    What she wants to learn <input type="text" class="fill-blank" data-answer="is Spanish" placeholder="________________">.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('cleft-sentences-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('cleft-sentences-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="cleft-sentences-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="cleft-sentences-exercise-score"></p>
    <div id="cleft-sentences-exercise-feedback"></div>
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
  min-width: 160px;
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

- **[Cleft Sentences Grammar Lesson](/grammar/advanced/cleft-sentences/)** - Learn the rules and theory
- **[Emphasis Techniques](/grammar/advanced/inversion/)** - Other ways to add emphasis
- **[More Advanced Exercises](/exercises/)** - Practice other advanced grammar topics