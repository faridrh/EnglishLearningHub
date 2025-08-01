---
layout: layouts/page.njk
title: Passive Voice Exercises
description: Interactive exercises to practice passive voice constructions. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Passive Voice Exercises

Practice using the passive voice with these interactive exercises. Transform active sentences to passive or complete passive constructions and get instant feedback on your answers.

## Exercise Instructions

Complete the sentences using the correct passive voice form:
- **Present Simple Passive**: am/is/are + past participle
- **Past Simple Passive**: was/were + past participle
- **Present Perfect Passive**: has/have been + past participle
- **Modal Passive**: modal + be + past participle

<div class="interactive-exercise" id="passive-voice-exercise" data-exercise-id="passive-voice-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> The house <input type="text" class="fill-blank" data-answer="was built" placeholder="____________"> (build) in 1995.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> English <input type="text" class="fill-blank" data-answer="is spoken" placeholder="____________"> (speak) all over the world.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> The reports <input type="text" class="fill-blank" data-answer="have been finished" placeholder="____________"> (finish) by the team.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> The windows <input type="text" class="fill-blank" data-answer="should be cleaned" placeholder="____________"> (should/clean) before the guests arrive.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The letters <input type="text" class="fill-blank" data-answer="are delivered" placeholder="____________"> (deliver) every morning at 9 AM.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> This painting <input type="text" class="fill-blank" data-answer="was painted" placeholder="____________"> (paint) by a famous artist.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> The problem <input type="text" class="fill-blank" data-answer="can be solved" placeholder="____________"> (can/solve) with better communication.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('passive-voice-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('passive-voice-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="passive-voice-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="passive-voice-exercise-score"></p>
    <div id="passive-voice-exercise-feedback"></div>
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
  min-width: 140px;
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

- **[Passive Voice Grammar Lesson](/grammar/intermediate/passive-voice/)** - Learn the rules and theory
- **[Active vs Passive Voice](/grammar/intermediate/passive-voice/)** - Understanding when to use each
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics