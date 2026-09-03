---
layout: layouts/page.njk
title: Plural Nouns Exercises
description: Interactive exercises to practice plural nouns. Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Plural Nouns Exercises

Practice forming plural nouns with these two interactive exercises. Master regular plurals, -es endings, irregular forms, and contextual usage with instant feedback on your answers.

## Exercise Instructions

Write the plural form of the noun in parentheses:
- Most nouns: add **-s** (cat → cats)
- Nouns ending in -s, -x, -z, -ch, -sh: add **-es** (box → boxes)
- Nouns ending in consonant + y: change **y to ies** (city → cities)
- Some irregular plurals: **man → men, child → children**

<div class="interactive-exercise" id="plural-nouns-exercise" data-exercise-id="plural-nouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I have three <select class="select-blank" data-answer="books">
      <option value="">-- choose --</option>
      <option value="books">books</option>
      <option value="book">book</option>
      <option value="bookes">bookes</option>
      <option value="boxes">boxes</option>
    </select> (book) on my desk.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The <select class="select-blank" data-answer="children">
      <option value="">-- choose --</option>
      <option value="children">children</option>
      <option value="childs">childs</option>
      <option value="child">child</option>
      <option value="childrenes">childrenes</option>
    </select> (child) are playing in the park.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> She bought two <select class="select-blank" data-answer="boxes">
      <option value="">-- choose --</option>
      <option value="boxes">boxes</option>
      <option value="boxs">boxs</option>
      <option value="box">box</option>
      <option value="boxen">boxen</option>
    </select> (box) of chocolates.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> How many <select class="select-blank" data-answer="cities">
      <option value="">-- choose --</option>
      <option value="cities">cities</option>
      <option value="city">city</option>
      <option value="citys">citys</option>
      <option value="cityes">cityes</option>
    </select> (city) have you visited?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The <select class="select-blank" data-answer="women">
      <option value="">-- choose --</option>
      <option value="women">women</option>
      <option value="womans">womans</option>
      <option value="woman">woman</option>
      <option value="womens">womens</option>
    </select> (woman) are discussing the project.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> There are many <select class="select-blank" data-answer="dishes">
      <option value="">-- choose --</option>
      <option value="dishes">dishes</option>
      <option value="dishs">dishs</option>
      <option value="dish">dish</option>
      <option value="disehs">disehs</option>
    </select> (dish) on the table.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('plural-nouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('plural-nouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="plural-nouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="plural-nouns-exercise-score"></p>
    <div id="plural-nouns-exercise-feedback"></div>
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
  min-width: 100px;
  margin: 0 5px;
  transition: border-color 0.3s;
}

.select-blank {
  border: 2px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 5px;
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

.select-blank.correct {
  border-color: #28a745;
  background-color: #d4edda;
}

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

## 📝 **Exercise 5: Fill in the Blanks with Correct Plural Nouns**

**Instructions**: Fill in the blanks with the correct plural form of the noun in parentheses.

<div class="interactive-exercise" id="fill-blanks-plurals-exercise" data-exercise-id="fill-blanks-plurals-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I saw three <input type="text" class="fill-blank" data-answer="butterflies" placeholder="______"> in the garden. (butterfly)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The <input type="text" class="fill-blank" data-answer="children" placeholder="______"> are playing in the park. (child)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> We bought some fresh <input type="text" class="fill-blank" data-answer="tomatoes" placeholder="______"> from the market. (tomato)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> My <input type="text" class="fill-blank" data-answer="shoes" placeholder="______"> are very comfortable. (shoe)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The <input type="text" class="fill-blank" data-answer="geese" placeholder="______"> flew south for the winter. (goose)</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('fill-blanks-plurals-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('fill-blanks-plurals-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="fill-blanks-plurals-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="fill-blanks-plurals-exercise-score"></p>
    <div id="fill-blanks-plurals-exercise-feedback"></div>
  </div>
</div>

---

## Related Materials

- **[Plural-nouns Quiz](/quiz/beginner/plural-nouns-quiz/)** - Test your knowledge with a quiz

- **[Plural Nouns Grammar Lesson](/grammar/beginner/plural-nouns/)** - Learn the rules and theory
- **[Articles with Plural Nouns](/grammar/beginner/articles/)** - Using articles with plurals
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics