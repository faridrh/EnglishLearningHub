---
layout: layouts/page.njk
title: Reported Speech
description: Learn how to report what someone said without using their exact words.
level: Intermediate
---

# Reported Speech

Reported speech (also called indirect speech) is used to tell someone what another person said, without using the exact words. When we use reported speech, we usually change the tense and pronouns.

## Basic Structure

**Direct Speech:** "I am tired," she said.
**Reported Speech:** She said (that) she was tired.

## Tense Changes

When the reporting verb is in the past tense, we usually move the tenses "back":

### Present to Past
- **Direct:** "I work here."
- **Reported:** He said he worked there.

### Past to Past Perfect
- **Direct:** "I worked late."
- **Reported:** She said she had worked late.

### Present Perfect to Past Perfect
- **Direct:** "I have finished."
- **Reported:** He said he had finished.

### Future to Conditional
- **Direct:** "I will come."
- **Reported:** She said she would come.

## Pronoun Changes

Change pronouns to match the new perspective:

- **Direct:** "I like your car."
- **Reported:** He said he liked my car.

## Time and Place Changes

Time and place references often change:

- **today** → that day
- **yesterday** → the day before / the previous day
- **tomorrow** → the next day / the following day
- **here** → there
- **this** → that

## Reporting Questions

### Yes/No Questions
- **Direct:** "Are you coming?"
- **Reported:** She asked if/whether I was coming.

### Wh-Questions
- **Direct:** "Where do you live?"
- **Reported:** He asked where I lived.

## Reporting Commands

Use **tell/ask + someone + to + infinitive**:

- **Direct:** "Close the door."
- **Reported:** He told me to close the door.

- **Direct:** "Don't be late."
- **Reported:** She asked me not to be late.

## Common Reporting Verbs

- **say** (+ that): He said that he was busy.
- **tell** (+ someone + that): She told me that she was leaving.
- **ask** (for questions): They asked if we were ready.
- **explain**: The teacher explained that the test was postponed.
- **suggest**: He suggested that we should go early.

## Practice Examples

1. **Direct:** "I have never been to Paris," said Mary.
   **Reported:** Mary said she had never been to Paris.

2. **Direct:** "Can you help me?" asked John.
   **Reported:** John asked if I could help him.

3. **Direct:** "Don't touch that!" shouted the guard.
   **Reported:** The guard told us not to touch that.

4. **Direct:** "I will call you tomorrow," she promised.
   **Reported:** She promised she would call me the next day.

## Special Cases

### Modal Verbs
- **can** → could
- **may** → might
- **must** → had to
- **will** → would
- **shall** → should

### No Tense Change
When the reporting verb is in the present tense or when the statement is still true:
- **Direct:** "The earth is round," said the teacher.
- **Reported:** The teacher says/said the earth is round.

## Common Mistakes

1. Don't use quotation marks in reported speech
2. Remember to change pronouns appropriately
3. Don't forget to adjust time expressions
4. Use 'if' or 'whether' for yes/no questions, not 'that'

## Interactive Practice Exercises

Transform these direct speech sentences into reported speech. Type your answers and get instant feedback:

<div class="interactive-exercise" id="reported-speech-exercise" data-exercise-id="reported-speech-intermediate">
  <div class="exercise-item">
    <p><strong>1.</strong> "I am reading a good book," she said. → She said she <input type="text" class="fill-blank" data-answer="was reading" placeholder="____________"> a good book.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> "Did you see the movie?" he asked. → He asked if I <input type="text" class="fill-blank" data-answer="had seen" placeholder="____________"> the movie.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> "Don't forget to lock the door," my mother told me. → My mother told me <input type="text" class="fill-blank" data-answer="not to forget" placeholder="____________"> to lock the door.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> "We will arrive at 6 PM," they said. → They said they <input type="text" class="fill-blank" data-answer="would arrive" placeholder="____________"> at 6 PM.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> "Where is the nearest bank?" the tourist asked. → The tourist asked where the nearest bank <input type="text" class="fill-blank" data-answer="was" placeholder="____">.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> "I have finished my homework," Tom said. → Tom said he <input type="text" class="fill-blank" data-answer="had finished" placeholder="____________"> his homework.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> "Can you help me?" she asked. → She asked if I <input type="text" class="fill-blank" data-answer="could help" placeholder="____________"> her.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>8.</strong> "I went to Paris last year," he said. → He said he <input type="text" class="fill-blank" data-answer="had gone" placeholder="____________"> to Paris the year before.</p>
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