---
layout: layouts/page.njk
title: Present Simple Exercises
description: Interactive exercises to practice the present simple tense. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Present Simple Exercises

Practice using the present simple tense with these 5 comprehensive interactive exercises. Master affirmative sentences, negatives, yes/no questions, and wh-questions with instant feedback on your answers.

## Exercise Instructions

Complete each sentence using the present simple tense. Remember:
- Use the base form for I/you/we/they
- Add **-s** or **-es** for he/she/it
- Use **do/does** for questions and **don't/doesn't** for negatives

<div class="interactive-exercise" id="present-simple-exercise" data-exercise-id="present-simple-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> She <select class="select-blank" data-answer="works">
      <option value="">-- choose --</option>
      <option value="works">works</option>
      <option value="work">work</option>
      <option value="is working">is working</option>
      <option value="working">working</option>
    </select> (work) in a hospital.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> They <select class="select-blank" data-answer="don't live">
      <option value="">-- choose --</option>
      <option value="don't live">don't live</option>
      <option value="do not live">do not live</option>
      <option value="live">live</option>
      <option value="doesn't live">doesn't live</option>
    </select> (not live) in New York.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <select class="select-blank" data-answer="Do">
      <option value="">-- choose --</option>
      <option value="Do">Do</option>
      <option value="Does">Does</option>
      <option value="Are">Are</option>
      <option value="Did">Did</option>
    </select> you <select class="select-blank" data-answer="speak">
      <option value="">-- choose --</option>
      <option value="speak">speak</option>
      <option value="speaks">speaks</option>
      <option value="speaking">speaking</option>
      <option value="spoke">spoke</option>
    </select> (speak) English?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> The sun <select class="select-blank" data-answer="rises">
      <option value="">-- choose --</option>
      <option value="rises">rises</option>
      <option value="rise">rise</option>
      <option value="is rising">is rising</option>
      <option value="rised">rised</option>
    </select> (rise) in the east.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> They <select class="select-blank" data-answer="don't watch">
      <option value="">-- choose --</option>
      <option value="don't watch">don't watch</option>
      <option value="do not watch">do not watch</option>
      <option value="watch">watch</option>
      <option value="doesn't watch">doesn't watch</option>
    </select> (not watch) TV very often.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <select class="select-blank" data-answer="Does">
      <option value="">-- choose --</option>
      <option value="Does">Does</option>
      <option value="Do">Do</option>
      <option value="Is">Is</option>
      <option value="Did">Did</option>
    </select> he <select class="select-blank" data-answer="live">
      <option value="">-- choose --</option>
      <option value="live">live</option>
      <option value="lives">lives</option>
      <option value="living">living</option>
      <option value="lived">lived</option>
    </select> (live) in London?</p>
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
  const inputs = exercise.querySelectorAll('.fill-blank, .select-blank');
  const resultsDiv = document.getElementById(exerciseId + '-results');
  const scoreP = document.getElementById(exerciseId + '-score');
  const feedbackDiv = document.getElementById(exerciseId + '-feedback');
  
  let correct = 0;
  let total = inputs.length;
  let feedback = '';
  
  inputs.forEach((input, index) => {
    const userAnswer = (input.value || '').toString().trim().toLowerCase();
    const correctAnswer = (input.dataset.answer || '').toString().toLowerCase();
    
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

## 📝 **Exercise 5: Wh- Questions**

**Instructions**: Complete the questions using Present Simple and the correct question word.

<div class="interactive-exercise" id="wh-questions-exercise" data-exercise-id="wh-questions-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> <input type="text" class="fill-blank" data-answer="Where" placeholder="______"> do you live? (place)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="What" placeholder="______"> does she do on weekends? (activity)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="How" placeholder="______"> do they go to school? (transport)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> <input type="text" class="fill-blank" data-answer="What" placeholder="______"> does he eat for breakfast? (food)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> <input type="text" class="fill-blank" data-answer="When" placeholder="______"> do we start the meeting? (time)</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('wh-questions-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('wh-questions-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="wh-questions-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="wh-questions-exercise-score"></p>
    <div id="wh-questions-exercise-feedback"></div>
  </div>
</div>

---

## Related Materials

- **[Present-simple Quiz](/quiz/beginner/present-simple-quiz/)** - Test your knowledge with a quiz

- **[Present Simple Grammar Lesson](/grammar/beginner/present-simple/)** - Learn the rules and theory
- **[Present Simple vs Present Continuous](/grammar/beginner/present-continuous/)** - Compare the two tenses
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics