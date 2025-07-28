---
layout: layouts/page.njk
title: Present Simple Tense
description: Learn how to form and use the present simple tense for habits, facts, and routines.
level: Beginner
---

# Present Simple Tense

The present simple tense is one of the most commonly used tenses in English. It's used to express habits, general truths, repeated actions, and fixed arrangements.

## When to Use the Present Simple

1. **For habits and routines**
   - I usually wake up at 7 AM every day.
   - She always drinks coffee in the morning.

2. **For general truths and facts**
   - Water boils at 100 degrees Celsius.
   - The Earth revolves around the Sun.

3. **For timetables and schedules**
   - The train leaves at 9:30 PM.
   - The store opens at 8 AM tomorrow.

4. **For instructions and directions**
   - First, you press the button, then you wait for the light.
   - You turn left at the traffic light and continue straight.

## How to Form the Present Simple

### Affirmative Sentences

- **I/You/We/They + verb (base form)**
  - I work in a hospital.
  - They live in London.

- **He/She/It + verb + s/es**
  - He works in a hospital.
  - She lives in London.

### Spelling Rules for Adding -s

1. Most verbs: add -s
   - work → works, play → plays, run → runs

2. Verbs ending in -ch, -sh, -ss, -x, -z: add -es
   - watch → watches, wash → washes, kiss → kisses, fix → fixes, buzz → buzzes

3. Verbs ending in consonant + y: change y to i and add -es
   - study → studies, try → tries, carry → carries

4. Verbs ending in vowel + y: just add -s
   - play → plays, enjoy → enjoys, say → says

### Negative Sentences

Negative sentences in the present simple use "do not" (don't) or "does not" (doesn't) + the base form of the verb.

- **I/You/We/They + do not (don't) + verb (base form)**
  - I don't work on Sundays.
  - They don't live in Paris.

- **He/She/It + does not (doesn't) + verb (base form)**
  - He doesn't work on Sundays.
  - She doesn't live in Paris.

### Questions

Questions in the present simple use "do" or "does" + subject + base form of the verb.

- **Do + I/you/we/they + verb (base form)?**
  - Do you work on weekends?
  - Do they live in Tokyo?

- **Does + he/she/it + verb (base form)?**
  - Does he work on weekends?
  - Does she live in Tokyo?

## Common Time Expressions Used with the Present Simple

- always, usually, often, sometimes, rarely, never
- every day/week/month/year
- on Mondays/Tuesdays/etc.
- in the morning/afternoon/evening
- at night/at the weekend
- once/twice a week

## Examples in Context

- I **work** from Monday to Friday, but I **don't work** on weekends.
- She **teaches** English and **loves** her job.
- **Do** you **like** coffee?
- He **doesn't understand** the question.
- The museum **closes** at 6 PM today.
- How often **do** you **visit** your grandparents?

## Interactive Practice Exercises

Complete these sentences using the present simple tense:

<div class="interactive-exercise" id="present-simple-exercise" data-exercise-id="present-simple-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I <input type="text" class="fill-blank" data-answer="work" placeholder="______"> (work) in an office.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She <input type="text" class="fill-blank" data-answer="doesn't like" placeholder="______"> (not like) coffee.</p>
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

#feedback p {
  margin: 5px 0;
  padding: 5px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 3px;
}
</style>

Remember, mastering the present simple tense is essential for effective communication in English!