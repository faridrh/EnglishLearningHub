---
layout: layouts/page.njk
title: Past Perfect Exercises
description: Interactive exercises to practice the past perfect tense. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Past Perfect Exercises

Practice using the past perfect tense with these interactive exercises. Complete the sentences using the correct form of the past perfect and get instant feedback on your answers.

## Exercise Instructions

Complete each sentence using the past perfect tense. Remember:
- Use **had + past participle** for all subjects
- For negative sentences, use **had not (hadn't) + past participle**
- For questions, put **had** before the subject

<div class="interactive-exercise" id="past-perfect-exercise" data-exercise-id="past-perfect-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> By the time we got to the cinema, the film <input type="text" class="fill-blank" data-answer="had already started" placeholder="____________"> (already/start).</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She told me she <input type="text" class="fill-blank" data-answer="had never seen" placeholder="____________"> (never/see) such a beautiful sunset.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="Had" placeholder="____"> you <input type="text" class="fill-blank" data-answer="finished" placeholder="____________"> (finish) your homework before you went out?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> When I arrived at the party, most people <input type="text" class="fill-blank" data-answer="had already left" placeholder="____________"> (already/leave).</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> He <input type="text" class="fill-blank" data-answer="hadn't eaten" placeholder="____________"> (not/eat) anything all day, so he was very hungry.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> The train <input type="text" class="fill-blank" data-answer="had left" placeholder="____________"> (leave) by the time we reached the station.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> I realized I <input type="text" class="fill-blank" data-answer="had forgotten" placeholder="____________"> (forget) my keys when I got to the door.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>8.</strong> <input type="text" class="fill-blank" data-answer="Had" placeholder="____"> they <input type="text" class="fill-blank" data-answer="lived" placeholder="____________"> (live) in Paris before they moved to London?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('past-perfect-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('past-perfect-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="past-perfect-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="past-perfect-exercise-score"></p>
    <div id="past-perfect-exercise-feedback"></div>
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
  min-width: 120px;
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

- **[Past Perfect Grammar Lesson](/grammar/intermediate/past-perfect/)** - Learn the rules and theory
- **[Past Perfect vs Simple Past](/grammar/intermediate/past-perfect/)** - Understanding the difference
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics