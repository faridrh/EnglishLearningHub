---
layout: layouts/page.njk
title: Plural Nouns Exercises
description: Interactive exercises to practice plural nouns. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Plural Nouns Exercises

Practice forming plural nouns with these interactive exercises. Complete the sentences using the correct plural form and get instant feedback on your answers.

## Exercise Instructions

Write the plural form of the noun in parentheses:
- Most nouns: add **-s** (cat → cats)
- Nouns ending in -s, -x, -z, -ch, -sh: add **-es** (box → boxes)
- Nouns ending in consonant + y: change **y to ies** (city → cities)
- Some irregular plurals: **man → men, child → children**

<div class="interactive-exercise" id="plural-nouns-exercise" data-exercise-id="plural-nouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I have three <input type="text" class="fill-blank" data-answer="books" placeholder="______"> (book) on my desk.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The <input type="text" class="fill-blank" data-answer="children" placeholder="______"> (child) are playing in the park.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> She bought two <input type="text" class="fill-blank" data-answer="boxes" placeholder="______"> (box) of chocolates.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> How many <input type="text" class="fill-blank" data-answer="cities" placeholder="______"> (city) have you visited?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The <input type="text" class="fill-blank" data-answer="women" placeholder="______"> (woman) are discussing the project.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> There are many <input type="text" class="fill-blank" data-answer="dishes" placeholder="______"> (dish) on the table.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('plural-nouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('plural-nouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="plural-nouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="plural-nouns-exercise-score"></p>
    <div id="plural-nouns-exercise-feedback"></div>
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

- **[Plural Nouns Grammar Lesson](/grammar/beginner/plural-nouns/)** - Learn the rules and theory
- **[Articles with Plural Nouns](/grammar/beginner/articles/)** - Using articles with plurals
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics