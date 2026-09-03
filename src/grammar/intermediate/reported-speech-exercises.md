---
layout: layouts/page.njk
title: Reported Speech Exercises
description: Interactive exercises to practice reported speech (indirect speech). Complete sentences, get instant feedback, and improve your English grammar skills.
level: Intermediate
collection: grammar
---

# Reported Speech Exercises

Practice using reported speech with these interactive exercises. Transform direct speech to reported speech and get instant feedback on your answers.

## Exercise Instructions

Convert direct speech to reported speech. Remember:
- **Backshift tenses**: present → past, past → past perfect
- **Change pronouns**: I → he/she, you → I/he/she
- **Change time expressions**: today → that day, tomorrow → the next day
- **Use appropriate reporting verbs**: said, told, asked, etc.

## Exercise 1: Choose the Correct Reported Form

<div class="interactive-exercise" id="reported-speech-dropdown-exercise" data-exercise-id="reported-speech-dropdown-intermediate">
  <div class="exercise-item"><p><strong>1.</strong> "I am tired," she said. She said that she <select class="select-blank" data-answer="was tired"><option value="">-- choose --</option><option value="is tired">is tired</option><option value="was tired">was tired</option><option value="had tired">had tired</option></select>.</p></div>
  <div class="exercise-item"><p><strong>2.</strong> "We will call you tomorrow," they promised. They promised that they <select class="select-blank" data-answer="would call"><option value="">-- choose --</option><option value="will call">will call</option><option value="would call">would call</option><option value="called">called</option></select> us.</p></div>
  <div class="exercise-item"><p><strong>3.</strong> "I have finished my homework," the student said. He said that he <select class="select-blank" data-answer="had finished"><option value="">-- choose --</option><option value="has finished">has finished</option><option value="finished">finished</option><option value="had finished">had finished</option></select> his homework.</p></div>
  <div class="exercise-item"><p><strong>4.</strong> "Don't be late!" the teacher told us. The teacher told us <select class="select-blank" data-answer="not to be late"><option value="">-- choose --</option><option value="not be late">not be late</option><option value="not to be late">not to be late</option><option value="to not late">to not late</option></select>.</p></div>
  <div class="exercise-item"><p><strong>5.</strong> "Where do you live?" she asked him. She asked him <select class="select-blank" data-answer="where he lived"><option value="">-- choose --</option><option value="where does he live">where does he live</option><option value="where he lived">where he lived</option><option value="where he lives">where he lives</option></select>.</p></div>
  <div class="exercise-controls"><button onclick="checkAnswers('reported-speech-dropdown-exercise')" class="check-btn">Check Answers</button><button onclick="resetExercise('reported-speech-dropdown-exercise')" class="reset-btn">Reset</button></div>
  <div id="reported-speech-dropdown-exercise-results" class="results-section" style="display: none;"><h4>Results:</h4><p id="reported-speech-dropdown-exercise-score"></p><div id="reported-speech-dropdown-exercise-feedback"></div></div>
</div>

<div class="interactive-exercise" id="reported-speech-exercise" data-exercise-id="reported-speech-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> "I am tired," she said.<br>
    She said that she <input type="text" class="fill-blank" data-answer="was tired" placeholder="____________">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> "We will call you tomorrow," they promised.<br>
    They promised that they <input type="text" class="fill-blank" data-answer="would call" placeholder="____________"> us <input type="text" class="fill-blank" data-answer="the next day" placeholder="____________">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> "Are you coming to the party?" he asked me.<br>
    He asked me <input type="text" class="fill-blank" data-answer="if I was coming" placeholder="____________"> to the party.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> "I have finished my homework," the student said.<br>
    The student said that he <input type="text" class="fill-blank" data-answer="had finished" placeholder="____________"> his homework.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> "Don't be late!" the teacher told us.<br>
    The teacher told us <input type="text" class="fill-blank" data-answer="not to be late" placeholder="____________">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> "Where do you live?" she asked him.<br>
    She asked him <input type="text" class="fill-blank" data-answer="where he lived" placeholder="____________">.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('reported-speech-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('reported-speech-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="reported-speech-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="reported-speech-exercise-score"></p>
    <div id="reported-speech-exercise-feedback"></div>
  </div>
</div>

<script>
function checkAnswers(exerciseId) {
  const exercise = document.getElementById(exerciseId);
  const inputs = exercise.querySelectorAll('.fill-blank, .select-blank');
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
  const inputs = exercise.querySelectorAll('.fill-blank, .select-blank');
  const resultsDiv = document.getElementById(exerciseId + '-results');
  
  inputs.forEach(input => {
    if (input.tagName === 'SELECT') {
      input.selectedIndex = 0;
    } else {
      input.value = '';
    }
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

.fill-blank,
.select-blank {
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
  border-color: #333;
}

.fill-blank.correct,
.select-blank.correct {
  border-color: #28a745;
  background-color: #d4edda;
}

.fill-blank.incorrect,
.select-blank.incorrect {
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

- **[Reported-speech Quiz](/quiz/intermediate/reported-speech-quiz/)** - Test your knowledge with a quiz

- **[Reported Speech Grammar Lesson](/grammar/intermediate/reported-speech/)** - Learn the rules and theory
- **[Direct vs Indirect Speech](/grammar/intermediate/reported-speech/)** - Understanding the differences
- **[More Intermediate Exercises](/exercises/)** - Practice other intermediate grammar topics