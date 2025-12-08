---
layout: layouts/page.njk
title: Modal Verbs Exercises
description: Interactive exercises to practice modal verbs. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Modal Verbs Exercises

Practice using modal verbs with these interactive exercises. Complete the sentences using the correct modal verb and get instant feedback on your answers.

## Exercise Instructions

Choose the correct modal verb for each sentence. Consider the context and meaning:
- **must/have to** = obligation
- **can/could** = ability or possibility
- **may/might** = possibility or permission
- **should/ought to** = advice
- **would** = polite requests or hypothetical situations

<div class="interactive-exercise" id="modal-verbs-exercise" data-exercise-id="modal-verbs-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> You <input type="text" class="fill-blank" data-answer="must" placeholder="_____"> wear a seatbelt in the car. (obligation)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="May" placeholder="_____"> I borrow your pen? (formal permission)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> It <input type="text" class="fill-blank" data-answer="might" placeholder="_____"> rain later - look at those clouds. (possibility)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> When I was young, I <input type="text" class="fill-blank" data-answer="could" placeholder="_____"> climb trees easily. (past ability)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> You <input type="text" class="fill-blank" data-answer="should" placeholder="_____"> have called me yesterday. (advice about past)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <input type="text" class="fill-blank" data-answer="Can" placeholder="_____"> you help me with this heavy box? (request/ability)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> Students <input type="text" class="fill-blank" data-answer="mustn't" placeholder="_____"> use their phones during the exam. (prohibition)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>8.</strong> She <input type="text" class="fill-blank" data-answer="must" placeholder="_____"> be tired - she's been working all day. (logical deduction)</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('modal-verbs-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('modal-verbs-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="modal-verbs-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="modal-verbs-exercise-score"></p>
    <div id="modal-verbs-exercise-feedback"></div>
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
  border-color: #333;
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

- **[Modal-verbs Quiz](/quiz/intermediate/modal-verbs-quiz/)** - Test your knowledge with a quiz

- **[Modal Verbs Grammar Lesson](/grammar/intermediate/modal-verbs/)** - Learn the rules and theory
- **[Advanced Modal Usage](/grammar/advanced/subjunctive/)** - More complex modal constructions
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics