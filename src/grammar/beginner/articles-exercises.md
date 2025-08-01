---
layout: layouts/page.njk
title: Articles Exercises
description: Interactive exercises to practice articles (a, an, the). Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Articles Exercises

Practice using articles (a, an, the) with these interactive exercises. Complete the sentences using the correct article and get instant feedback on your answers.

## Exercise Instructions

Choose the correct article for each sentence:
- **a** = before consonant sounds
- **an** = before vowel sounds  
- **the** = specific/definite items
- **no article** = general plural nouns or uncountable nouns

<div class="interactive-exercise" id="articles-exercise" data-exercise-id="articles-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I need <input type="text" class="fill-blank" data-answer="a" placeholder="____"> pen to write with.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She is <input type="text" class="fill-blank" data-answer="an" placeholder="____"> excellent student.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="The" placeholder="____"> book on the table is mine.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> We saw <input type="text" class="fill-blank" data-answer="an" placeholder="____"> elephant at the zoo.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> <input type="text" class="fill-blank" data-answer="The" placeholder="____"> sun rises in the east.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> He wants to be <input type="text" class="fill-blank" data-answer="a" placeholder="____"> doctor.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('articles-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('articles-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="articles-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="articles-exercise-score"></p>
    <div id="articles-exercise-feedback"></div>
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
  min-width: 60px;
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
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
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
  background: white;
  border-radius: 5px;
  border-left: 4px solid #007bff;
}

.results-section p {
  margin: 5px 0;
  padding: 5px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 3px;
}
</style>

---

## Related Materials

- **[Articles Grammar Lesson](/grammar/beginner/articles/)** - Learn the rules and theory
- **[More Practice with Nouns](/grammar/beginner/plural-nouns/)** - Articles work with nouns
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics