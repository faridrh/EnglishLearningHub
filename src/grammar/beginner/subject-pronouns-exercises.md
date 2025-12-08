---
layout: layouts/page.njk
title: Subject Pronouns Exercises
description: Interactive exercises to practice subject pronouns (I, you, he, she, it, we, they). Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Subject Pronouns Exercises

Practice using subject pronouns with these 5 comprehensive interactive exercises. Master choosing, replacing, and identifying the correct subject pronouns (I, you, he, she, it, we, they) with instant feedback on your answers.

## Exercise Instructions

Replace the underlined noun(s) with the correct subject pronoun:
- **I** = the speaker
- **you** = the person you're talking to
- **he** = one male person
- **she** = one female person
- **it** = one thing/animal
- **we** = the speaker + other people
- **they** = more than one person/thing

<div class="interactive-exercise" id="subject-pronouns-exercise" data-exercise-id="subject-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> <strong>Maria</strong> is a teacher. <input type="text" class="fill-blank" data-answer="She" placeholder="____"> works at a school.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <strong>The car</strong> is expensive. <input type="text" class="fill-blank" data-answer="It" placeholder="______"> costs $50,000.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <strong>My brother and I</strong> are students. <input type="text" class="fill-blank" data-answer="We" placeholder="______"> study at the same university.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> <strong>David and Emma</strong> are getting married. <input type="text" class="fill-blank" data-answer="They" placeholder="______"> are very happy.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> <strong>My father</strong> is a doctor. <input type="text" class="fill-blank" data-answer="He" placeholder="______"> works at the hospital.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> <strong>The books</strong> are on the shelf. <input type="text" class="fill-blank" data-answer="They" placeholder="______"> belong to my sister.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('subject-pronouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('subject-pronouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="subject-pronouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="subject-pronouns-exercise-score"></p>
    <div id="subject-pronouns-exercise-feedback"></div>
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
  min-width: 80px;
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

## 📝 **Exercise 2: Choose the Correct Subject Pronoun**

**Instructions**: Choose the correct subject pronoun to complete each sentence.

<div class="interactive-exercise" id="choose-pronouns-exercise" data-exercise-id="choose-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> <input type="text" class="fill-blank" data-answer="I" placeholder="______"> am a student. (Farid)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="She" placeholder="______"> is my sister. (Leyla)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="They" placeholder="______"> are playing football. (Ali and Murad)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> <input type="text" class="fill-blank" data-answer="It" placeholder="______"> is raining today. (The weather)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> <input type="text" class="fill-blank" data-answer="We" placeholder="______"> are going to the cinema. (My friends and I)</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('choose-pronouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('choose-pronouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="choose-pronouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="choose-pronouns-exercise-score"></p>
    <div id="choose-pronouns-exercise-feedback"></div>
  </div>
</div>

---

## 📝 **Exercise 3: Replace the Noun with a Subject Pronoun**

**Instructions**: Rewrite each sentence by replacing the subject with a subject pronoun.

<div class="interactive-exercise" id="replace-pronouns-exercise" data-exercise-id="replace-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> Sarah is cooking dinner. → <input type="text" class="fill-blank" data-answer="She" placeholder="______"> is cooking dinner.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The dog is barking. → <input type="text" class="fill-blank" data-answer="It" placeholder="______"> is barking.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> My brother and I are studying. → <input type="text" class="fill-blank" data-answer="We" placeholder="______"> are studying.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> The book is on the table. → <input type="text" class="fill-blank" data-answer="It" placeholder="______"> is on the table.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> Tom and Jerry are funny. → <input type="text" class="fill-blank" data-answer="They" placeholder="______"> are funny.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('replace-pronouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('replace-pronouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="replace-pronouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="replace-pronouns-exercise-score"></p>
    <div id="replace-pronouns-exercise-feedback"></div>
  </div>
</div>

---

## 📝 **Exercise 4: Fill in the Blanks with Subject Pronouns**

**Instructions**: Fill in the blanks with the correct subject pronoun.

<div class="interactive-exercise" id="blanks-pronouns-exercise" data-exercise-id="blanks-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> <input type="text" class="fill-blank" data-answer="I" placeholder="______"> am from Azerbaijan.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> <input type="text" class="fill-blank" data-answer="He" placeholder="______"> is my teacher. (Mr. Ali)</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> <input type="text" class="fill-blank" data-answer="They" placeholder="______"> are my parents.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> <input type="text" class="fill-blank" data-answer="It" placeholder="______"> is a beautiful flower.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> <input type="text" class="fill-blank" data-answer="We" placeholder="______"> are learning English.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('blanks-pronouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('blanks-pronouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="blanks-pronouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="blanks-pronouns-exercise-score"></p>
    <div id="blanks-pronouns-exercise-feedback"></div>
  </div>
</div>

---

## 📝 **Exercise 5: Match Subject Pronouns to Contexts**

**Instructions**: Choose the correct subject pronoun for each context.

<div class="interactive-exercise" id="match-pronouns-exercise" data-exercise-id="match-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> My friend Ahmad is tall. → <input type="text" class="fill-blank" data-answer="He" placeholder="______"> is tall.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> The cat is sleeping. → <input type="text" class="fill-blank" data-answer="It" placeholder="______"> is sleeping.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> Ali and I are friends. → <input type="text" class="fill-blank" data-answer="We" placeholder="______"> are friends.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> You and your sister are smart. → <input type="text" class="fill-blank" data-answer="You" placeholder="______"> are smart.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The boys are playing. → <input type="text" class="fill-blank" data-answer="They" placeholder="______"> are playing.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('match-pronouns-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('match-pronouns-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="match-pronouns-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="match-pronouns-exercise-score"></p>
    <div id="match-pronouns-exercise-feedback"></div>
  </div>
</div>

---

## Related Materials

- **[Subject-pronouns Quiz](/quiz/beginner/subject-pronouns-quiz/)** - Test your knowledge with a quiz

- **[Subject Pronouns Grammar Lesson](/grammar/beginner/subject-pronouns/)** - Learn the rules and theory
- **[Object Pronouns](/grammar/intermediate/relative-clauses/)** - Learn about other pronouns
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics