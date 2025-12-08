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

## Exercise 2: Complete the Sentences

Choose the correct past perfect form to complete each sentence. Pay attention to the time sequence of events.

<div class="interactive-exercise" id="past-perfect-exercise-2" data-exercise-id="past-perfect-intermediate-2">
  <div class="exercise-item">
    <p><strong>1.</strong> By the time the train arrived, we <input type="text" class="fill-blank" data-answer="had eaten" placeholder="______"> already <input type="text" class="fill-blank" data-answer="eaten" placeholder="______"> our breakfast.</p>
    <div class="explanation" style="display: none;">
      <p><strong>Correct Answer:</strong> had eaten</p>
      <p><strong>Explanation:</strong> The past perfect tense is used to describe an action that was completed before another action in the past. Here, 'had eaten' is correct because the breakfast was finished before the train arrived.</p>
    </div>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She <input type="text" class="fill-blank" data-answer="had" placeholder="______"> already <input type="text" class="fill-blank" data-answer="read" placeholder="______"> the book before the teacher assigned it.</p>
    <div class="explanation" style="display: none;">
      <p><strong>Correct Answer:</strong> had read</p>
      <p><strong>Explanation:</strong> The past perfect tense 'had read' is used to indicate that the action of reading the book was completed before the teacher assigned it.</p>
    </div>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> They <input type="text" class="fill-blank" data-answer="had" placeholder="______"> not <input type="text" class="fill-blank" data-answer="done" placeholder="______"> the homework before the class started.</p>
    <div class="explanation" style="display: none;">
      <p><strong>Correct Answer:</strong> had done</p>
      <p><strong>Explanation:</strong> The past perfect tense 'had done' is correct because it shows that the homework was not completed before the class started.</p>
    </div>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> We <input type="text" class="fill-blank" data-answer="had" placeholder="______"> already <input type="text" class="fill-blank" data-answer="seen" placeholder="______"> the movie when they invited us to watch it.</p>
    <div class="explanation" style="display: none;">
      <p><strong>Correct Answer:</strong> had seen</p>
      <p><strong>Explanation:</strong> The past perfect tense 'had seen' is used to indicate that the action of watching the movie was completed before they invited us.</p>
    </div>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers2('past-perfect-exercise-2')" class="check-btn">Check Answers</button>
    <button onclick="showExplanations('past-perfect-exercise-2')" class="explanation-btn">Show Explanations</button>
    <button onclick="resetExercise2('past-perfect-exercise-2')" class="reset-btn">Reset</button>
  </div>
  
  <div id="past-perfect-exercise-2-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="past-perfect-exercise-2-score"></p>
    <div id="past-perfect-exercise-2-feedback"></div>
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

function checkAnswers2(exerciseId) {
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
    
    if (userAnswer === correctAnswer || 
        (correctAnswer === 'had eaten' && userAnswer === 'had already eaten') ||
        (correctAnswer === 'had read' && userAnswer === 'had already read') ||
        (correctAnswer === 'had done' && userAnswer === 'had not done') ||
        (correctAnswer === 'had seen' && userAnswer === 'had already seen')) {
      input.classList.add('correct');
      correct++;
    } else {
      input.classList.add('incorrect');
      feedback += `<p><strong>Question ${Math.floor(index/2) + 1}:</strong> Your answer: "${input.value}" | Correct answer: "${input.dataset.answer}"</p>`;
    }
  });
  
  resultsDiv.style.display = 'block';
  scoreP.textContent = `Score: ${Math.floor(correct/2)}/4 (${Math.round((correct/8)*100)}%)`;
  
  if (correct === total) {
    feedbackDiv.innerHTML = '<p style="color: green; font-weight: bold;">Excellent! All answers are correct! 🎉</p>';
  } else {
    feedbackDiv.innerHTML = feedback;
  }
}

function showExplanations(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const explanations = exercise.querySelectorAll('.explanation');
  
  explanations.forEach(explanation => {
    if (explanation.style.display === 'none') {
      explanation.style.display = 'block';
    } else {
      explanation.style.display = 'none';
    }
  });
}

function resetExercise2(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const inputs = exercise.querySelectorAll('.fill-blank');
  const resultsDiv = document.getElementById(exerciseId + '-results');
  const explanations = exercise.querySelectorAll('.explanation');
  
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('correct', 'incorrect');
  });
  
  explanations.forEach(explanation => {
    explanation.style.display = 'none';
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

.explanation {
  margin-top: 10px;
  padding: 12px;
  background: #e8f4f8;
  border: 1px solid #b8e6ff;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
}

.explanation p {
  margin: 5px 0;
  background: none;
  border: none;
  padding: 0;
}

.explanation-btn {
  background: #17a2b8;
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

.explanation-btn:hover {
  background: #138496;
}
</style>

---

## Related Materials

- **[Past-perfect Quiz](/quiz/intermediate/past-perfect-quiz/)** - Test your knowledge with a quiz

- **[Past Perfect Grammar Lesson](/grammar/intermediate/past-perfect/)** - Learn the rules and theory
- **[Past Perfect vs Simple Past](/grammar/intermediate/past-perfect/)** - Understanding the difference
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics