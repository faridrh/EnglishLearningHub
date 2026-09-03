---
layout: layouts/page.njk
title: Present Continuous Exercises
description: Interactive exercises to practice the present continuous tense.
level: Beginner
collection: grammar
---

# Present Continuous Exercises

Practice the present continuous tense with these interactive exercises.

## Exercise Instructions

Complete each sentence using the present continuous tense:
- Use **am/is/are + verb-ing**.
- For negative sentences, use **am not/isn't/aren't + verb-ing**.
- For questions, put **am/is/are** before the subject.

## Exercise 1: Choose the Correct Form

<div class="interactive-exercise" id="present-continuous-exercise" data-exercise-id="present-continuous-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I <select class="select-blank" data-answer="am studying"><option value="">-- choose --</option><option value="am studying">am studying</option><option value="is studying">is studying</option><option value="are studying">are studying</option><option value="study">study</option></select> for my exam.</p>
  </div>
  <div class="exercise-item">
    <p><strong>2.</strong> She <select class="select-blank" data-answer="is not working"><option value="">-- choose --</option><option value="is not working">is not working</option><option value="is working">is working</option><option value="are not working">are not working</option><option value="not working">not working</option></select> today.</p>
  </div>
  <div class="exercise-item">
    <p><strong>3.</strong> <select class="select-blank" data-answer="Are"><option value="">-- choose --</option><option value="Are">Are</option><option value="Is">Is</option><option value="Am">Am</option><option value="Do">Do</option></select> they playing football?</p>
  </div>
  <div class="exercise-item">
    <p><strong>4.</strong> We <select class="select-blank" data-answer="are watching"><option value="">-- choose --</option><option value="are watching">are watching</option><option value="is watching">is watching</option><option value="watch">watch</option><option value="watching">watching</option></select> a movie tonight.</p>
  </div>
  <div class="exercise-item">
    <p><strong>5.</strong> He <select class="select-blank" data-answer="is cooking"><option value="">-- choose --</option><option value="is cooking">is cooking</option><option value="am cooking">am cooking</option><option value="are cooking">are cooking</option><option value="cooks">cooks</option></select> dinner now.</p>
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

---

## Exercise 2: Wh- Questions

Complete each question with the correct question word.

<div class="interactive-exercise" id="wh-continuous-exercise" data-exercise-id="wh-continuous-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> <input type="text" class="fill-blank" data-answer="What" placeholder="______"> are you doing?</p>
  </div>
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="Where" placeholder="______"> is she going?</p>
  </div>
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="Who" placeholder="______"> are they talking to?</p>
  </div>
  <div class="exercise-item">
    <p><strong>4.</strong> <input type="text" class="fill-blank" data-answer="What" placeholder="______"> is he eating?</p>
  </div>
  <div class="exercise-item">
    <p><strong>5.</strong> <input type="text" class="fill-blank" data-answer="When" placeholder="______"> are we meeting?</p>
  </div>
  <div class="exercise-controls">
    <button onclick="checkAnswers('wh-continuous-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('wh-continuous-exercise')" class="reset-btn">Reset</button>
  </div>
  <div id="wh-continuous-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="wh-continuous-exercise-score"></p>
    <div id="wh-continuous-exercise-feedback"></div>
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
  let feedback = '';

  inputs.forEach((input, index) => {
    const userAnswer = (input.value || '').trim().toLowerCase();
    const correctAnswer = (input.dataset.answer || '').trim().toLowerCase();
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
  scoreP.textContent = `Score: ${correct}/${inputs.length} (${Math.round(correct / inputs.length * 100)}%)`;
  feedbackDiv.innerHTML = correct === inputs.length
    ? '<p style="color: green; font-weight: bold;">Excellent! All answers are correct.</p>'
    : feedback;
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
  margin: 0 5px;
}

.fill-blank {
  min-width: 60px;
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

.check-btn,
.reset-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
}

.reset-btn {
  background: #6c757d;
}

.results-section {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 5px;
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

- **[Present Continuous Quiz](/quiz/beginner/present-continuous-quiz/)** - Test your knowledge
- **[Present Continuous Grammar Lesson](/grammar/beginner/present-continuous/)** - Learn the rules
- **[More Beginner Exercises](/exercises/)** - Practice other grammar topics
