---
layout: layouts/page.njk
title: Ellipsis & Substitution Exercises
description: Interactive exercises to practice ellipsis and substitution for avoiding repetition. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Advanced
collection: grammar
---

# Ellipsis & Substitution Exercises

Practice using ellipsis and substitution with these interactive exercises. Complete the sentences by avoiding repetition through omission or substitution and get instant feedback on your answers.

## Exercise Instructions

Use ellipsis and substitution to avoid repetition:
- **Ellipsis**: Omit repeated words (I can swim, but she can't ___)
- **Substitution with "do"**: Use "do/does/did" to replace verbs
- **Substitution with "one/ones"**: Replace repeated nouns
- **So/Neither/Nor**: Avoid repeating entire clauses

<div class="interactive-exercise" id="ellipsis-substitution-exercise" data-exercise-id="ellipsis-substitution-advanced">
  <div class="exercise-item">
    <p><strong>1.</strong> John can speak French, but Mary <input type="text" class="fill-blank" data-answer="can't" placeholder="______">. (ellipsis)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> I don't like coffee, and my sister doesn't <input type="text" class="fill-blank" data-answer="either" placeholder="______">. (substitution)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> "Are you coming to the party?" "I hope <input type="text" class="fill-blank" data-answer="so" placeholder="______">." (ellipsis)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> I need a new pen. Do you have <input type="text" class="fill-blank" data-answer="one" placeholder="______">? (substitution)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> She works harder than I <input type="text" class="fill-blank" data-answer="do" placeholder="______">. (substitution)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> "I love chocolate." "<input type="text" class="fill-blank" data-answer="So do I" placeholder="______">." (avoiding repetition)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> Which shoes do you prefer - the black <input type="text" class="fill-blank" data-answer="ones" placeholder="______"> or the brown <input type="text" class="fill-blank" data-answer="ones" placeholder="______">? (substitution)</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('ellipsis-substitution-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('ellipsis-substitution-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="ellipsis-substitution-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="ellipsis-substitution-exercise-score"></p>
    <div id="ellipsis-substitution-exercise-feedback"></div>
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
  min-width: 100px;
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

- **[Ellipsis-substitution Quiz](/quiz/advanced/ellipsis-substitution-quiz/)** - Test your knowledge with a quiz

- **[Ellipsis & Substitution Grammar Lesson](/grammar/advanced/ellipsis-substitution/)** - Learn the rules and theory
- **[Advanced Writing Style](/grammar/advanced/participle-clauses/)** - Other ways to improve writing flow
- **[More Advanced Exercises](/exercises/)** - Practice other advanced grammar topics