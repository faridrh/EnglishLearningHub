---
layout: layouts/page.njk
title: Present Simple Exercises
description: Interactive exercises to practice the present simple tense. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Present Simple Exercises

Practice using the present simple tense with these interactive exercises. Complete the sentences using the correct form of the present simple and get instant feedback on your answers.

## Exercise Instructions

Complete each sentence using the present simple tense. Remember:
- Use the base form for I/you/we/they
- Add **-s** or **-es** for he/she/it
- Use **do/does** for questions and **don't/doesn't** for negatives

<div class="interactive-exercise" id="present-simple-exercise" data-exercise-id="present-simple-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> She <input type="text" class="fill-blank" data-answer="works" placeholder="______"> (work) in a hospital.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> They <input type="text" class="fill-blank" data-answer="don't live" placeholder="______"> (not live) in New York.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="Do" placeholder="______"> you <input type="text" class="fill-blank" data-answer="speak" placeholder="______"> (speak) English?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> The sun <input type="text" class="fill-blank" data-answer="rises" placeholder="______"> (rise) in the east.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> They <input type="text" class="fill-blank" data-answer="don't watch" placeholder="______"> (not watch) TV very often.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <input type="text" class="fill-blank" data-answer="Does" placeholder="______"> he <input type="text" class="fill-blank" data-answer="live" placeholder="______"> (live) in London?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('present-simple-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('present-simple-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="present-simple-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="present-simple-exercise-score"></p>
    <div id="present-simple-exercise-feedback"></div>
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

- **[Present Simple Grammar Lesson](/grammar/beginner/present-simple/)** - Learn the rules and theory
- **[Present Simple vs Present Continuous](/grammar/beginner/present-continuous/)** - Compare the two tenses
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics