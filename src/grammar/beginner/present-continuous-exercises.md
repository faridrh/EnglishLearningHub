---
layout: layouts/page.njk
title: Present Continuous Exercises
description: Interactive exercises to practice the present continuous tense. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Present Continuous Exercises

Practice using the present continuous tense with these interactive exercises. Complete the sentences using the correct form of the present continuous and get instant feedback on your answers.

## Exercise Instructions

Complete each sentence using the present continuous tense. Remember:
- Use **am/is/are + verb-ing**
- For negative sentences, use **am not/isn't/aren't + verb-ing**
- For questions, put **am/is/are** before the subject

<div class="interactive-exercise" id="present-continuous-exercise" data-exercise-id="present-continuous-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I <input type="text" class="fill-blank" data-answer="am studying" placeholder="______"> (study) English right now.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She <input type="text" class="fill-blank" data-answer="is not working" placeholder="______"> (not work) today.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="Are" placeholder="______"> they <input type="text" class="fill-blank" data-answer="coming" placeholder="______"> (come) to the party?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> Look! It <input type="text" class="fill-blank" data-answer="is raining" placeholder="______"> (rain) outside.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> We <input type="text" class="fill-blank" data-answer="are watching" placeholder="______"> (watch) a movie tonight.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <input type="text" class="fill-blank" data-answer="Is" placeholder="______"> he <input type="text" class="fill-blank" data-answer="sleeping" placeholder="______"> (sleep) now?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('present-continuous-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('present-continuous-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="present-continuous-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="present-continuous-exercise-score"></p>
    <div id="present-continuous-exercise-feedback"></div>
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

- **[Present Continuous Grammar Lesson](/grammar/beginner/present-continuous/)** - Learn the rules and theory
- **[Present Simple vs Present Continuous](/grammar/beginner/present-simple/)** - Compare the two tenses
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics