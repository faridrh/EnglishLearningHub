---
layout: layouts/page.njk
title: Relative Clauses Exercises
description: Interactive exercises to practice relative clauses with who, which, that, where, when. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Relative Clauses Exercises

Practice using relative clauses with these interactive exercises. Complete the sentences using the correct relative pronoun and get instant feedback on your answers.

## Exercise Instructions

Choose the correct relative pronoun:
- **who/that** = for people (subject/object)
- **which/that** = for things (subject/object)
- **where** = for places
- **when** = for time
- **whose** = for possession

<div class="interactive-exercise" id="relative-clauses-exercise" data-exercise-id="relative-clauses-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> The woman <input type="text" class="fill-blank" data-answer="who" placeholder="______"> lives next door is a doctor.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> This is the book <input type="text" class="fill-blank" data-answer="which" placeholder="______"> I was telling you about.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> Do you remember the day <input type="text" class="fill-blank" data-answer="when" placeholder="______"> we first met?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> That's the restaurant <input type="text" class="fill-blank" data-answer="where" placeholder="______"> we had our anniversary dinner.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The student <input type="text" class="fill-blank" data-answer="whose" placeholder="______"> project won first prize is very talented.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> The car <input type="text" class="fill-blank" data-answer="that" placeholder="______"> he bought last year is already broken.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> I know a place <input type="text" class="fill-blank" data-answer="where" placeholder="______"> we can get excellent coffee.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('relative-clauses-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('relative-clauses-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="relative-clauses-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="relative-clauses-exercise-score"></p>
    <div id="relative-clauses-exercise-feedback"></div>
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
  min-width: 80px;
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

- **[Relative-clauses Quiz](/quiz/intermediate/relative-clauses-quiz/)** - Test your knowledge with a quiz

- **[Relative Clauses Grammar Lesson](/grammar/intermediate/relative-clauses/)** - Learn the rules and theory
- **[Advanced Relative Structures](/grammar/advanced/cleft-sentences/)** - Cleft sentences and emphasis
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics