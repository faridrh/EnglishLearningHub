---
layout: layouts/page.njk
title: Inversion Exercises
description: Interactive exercises to practice inversion structures. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Advanced
collection: grammar
---

# Inversion Exercises

Practice using inversion structures with these interactive exercises. Complete the sentences using the correct inversion pattern and get instant feedback on your answers.

## Exercise Instructions

Use correct inversion structures:
- After negative adverbials: **Never/Rarely/Seldom + auxiliary + subject**
- After "only": **Only when/if + auxiliary + subject**
- Conditional inversion: **Had/Were/Should + subject** (without if)
- So/Neither: **So/Neither + auxiliary + subject**

<div class="interactive-exercise" id="inversion-exercise" data-exercise-id="inversion-advanced">
  <div class="exercise-item">
    <p><strong>1.</strong> Never <input type="text" class="fill-blank" data-answer="have I seen" placeholder="____________"> (I/see) such a beautiful sunset.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="Had I known" placeholder="____________"> (If I/know) about the meeting, I would have attended.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> Only when the rain stopped <input type="text" class="fill-blank" data-answer="did we leave" placeholder="____________"> (we/leave) the house.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> Rarely <input type="text" class="fill-blank" data-answer="does she go" placeholder="____________"> (she/go) to bed before midnight.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> "I can't swim." "Neither <input type="text" class="fill-blank" data-answer="can I" placeholder="______">." (I/can)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <input type="text" class="fill-blank" data-answer="Should you need" placeholder="____________"> (If you/need) any help, please call me.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> Not only <input type="text" class="fill-blank" data-answer="is he talented" placeholder="____________"> (he/be talented), but he's also very hardworking.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('inversion-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('inversion-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="inversion-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="inversion-exercise-score"></p>
    <div id="inversion-exercise-feedback"></div>
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
  margin: 18px 0;
  line-height: 1.8;
  font-size: 16px;
}

.fill-blank {
  border: 2px solid #ddd;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 16px;
  min-width: 140px;
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

- **[Inversion Quiz](/quiz/advanced/inversion-quiz/)** - Test your knowledge with a quiz

- **[Inversion Grammar Lesson](/grammar/advanced/inversion/)** - Learn the rules and theory
- **[Emphasis and Style](/grammar/advanced/cleft-sentences/)** - Other emphasis techniques
- **[More Advanced Exercises](/exercises/)** - Practice other advanced grammar topics