---
layout: layouts/page.njk
title: Possessive Adjectives Exercises
description: Interactive exercises to practice possessive adjectives (my, your, his, her, its, our, their). Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Possessive Adjectives Exercises

Practice using possessive adjectives with these 5 comprehensive interactive exercises. Master choosing, matching, and correcting possessive adjectives (my, your, his, her, its, our, their) with instant feedback on your answers.

## Exercise Instructions

Choose the correct possessive adjective:
- **my** = belongs to me
- **your** = belongs to you
- **his** = belongs to him (male)
- **her** = belongs to her (female)
- **its** = belongs to it (thing/animal)
- **our** = belongs to us
- **their** = belongs to them

<div class="interactive-exercise" id="possessive-adjectives-exercise" data-exercise-id="possessive-adjectives-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I love <input type="text" class="fill-blank" data-answer="my" placeholder="____"> family very much.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> Sarah is washing <input type="text" class="fill-blank" data-answer="her" placeholder="____"> car in the driveway.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> The students are doing <input type="text" class="fill-blank" data-answer="their" placeholder="____"> homework.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> Can you please show me <input type="text" class="fill-blank" data-answer="your" placeholder="____"> passport?</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> The dog is playing with <input type="text" class="fill-blank" data-answer="its" placeholder="____"> toy.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>6.</strong> My brother forgot <input type="text" class="fill-blank" data-answer="his" placeholder="____"> keys at home.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>7.</strong> We are planning <input type="text" class="fill-blank" data-answer="our" placeholder="____"> vacation for next summer.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('possessive-adjectives-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('possessive-adjectives-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="possessive-adjectives-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="possessive-adjectives-exercise-score"></p>
    <div id="possessive-adjectives-exercise-feedback"></div>
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

## 📝 **Exercise 2: Fill in the Blanks with Possessive Adjectives**

**Instructions**: Complete the sentences using the correct possessive adjective (my, your, his, her, its, our, their).

<div class="interactive-exercise" id="fill-blanks-exercise" data-exercise-id="fill-blanks-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I have a dog. <input type="text" class="fill-blank" data-answer="Its" placeholder="______"> name is Max.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> She is my sister. <input type="text" class="fill-blank" data-answer="Her" placeholder="______"> favorite color is blue.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> We live in Baku. <input type="text" class="fill-blank" data-answer="Our" placeholder="______"> house is near the park.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> They are students. <input type="text" class="fill-blank" data-answer="Their" placeholder="______"> teacher is very kind.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> You have a bike. Is this <input type="text" class="fill-blank" data-answer="your" placeholder="______"> helmet?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('fill-blanks-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('fill-blanks-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="fill-blanks-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="fill-blanks-exercise-score"></p>
    <div id="fill-blanks-exercise-feedback"></div>
  </div>
</div>

---

## 📝 **Exercise 3: Match Subject Pronouns to Possessive Adjectives**

**Instructions**: Match each subject pronoun to its correct possessive adjective.

<div class="interactive-exercise" id="match-pronouns-exercise" data-exercise-id="match-pronouns-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> I → <input type="text" class="fill-blank" data-answer="my" placeholder="______"> book</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> You → <input type="text" class="fill-blank" data-answer="your" placeholder="______"> car</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> He → <input type="text" class="fill-blank" data-answer="his" placeholder="______"> phone</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> She → <input type="text" class="fill-blank" data-answer="her" placeholder="______"> bag</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> We → <input type="text" class="fill-blank" data-answer="our" placeholder="______"> house</p>
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

## 📝 **Exercise 4: Correct the Mistake**

**Instructions**: Each sentence has a mistake in the possessive adjective. Write the correct possessive adjective.

<div class="interactive-exercise" id="correct-mistakes-exercise" data-exercise-id="correct-mistakes-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> He is my brother. Her name is Sam. → <input type="text" class="fill-blank" data-answer="His" placeholder="______"> name is Sam.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> We love they dog. → We love <input type="text" class="fill-blank" data-answer="their" placeholder="______"> dog.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> I have a phone. Your screen is broken. → <input type="text" class="fill-blank" data-answer="Its" placeholder="______"> screen is broken.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> She is my friend. His house is big. → <input type="text" class="fill-blank" data-answer="Her" placeholder="______"> house is big.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> You are wearing my shoes. I want his back. → I want <input type="text" class="fill-blank" data-answer="them" placeholder="______"> back.</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('correct-mistakes-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('correct-mistakes-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="correct-mistakes-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="correct-mistakes-exercise-score"></p>
    <div id="correct-mistakes-exercise-feedback"></div>
  </div>
</div>

---

## 📝 **Exercise 5: Choose the Correct Possessive Adjective**

**Instructions**: Choose the correct possessive adjective to complete each sentence.

<div class="interactive-exercise" id="choose-correct-exercise" data-exercise-id="choose-correct-beginner">
  <div class="exercise-item">
    <p><strong>1.</strong> This is Anna. <input type="text" class="fill-blank" data-answer="Her" placeholder="______"> bag is on the chair.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> We are in class. <input type="text" class="fill-blank" data-answer="Our" placeholder="______"> teacher is explaining the lesson.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>3.</strong> I have a cat. <input type="text" class="fill-blank" data-answer="Its" placeholder="______"> fur is very soft.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>4.</strong> Tom and Jerry are funny. <input type="text" class="fill-blank" data-answer="Their" placeholder="______"> cartoons are popular.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>5.</strong> You have a new phone. Is this <input type="text" class="fill-blank" data-answer="your" placeholder="______"> charger?</p>
  </div>
  
  <div class="exercise-controls">
    <button onclick="checkAnswers('choose-correct-exercise')" class="check-btn">Check Answers</button>
    <button onclick="resetExercise('choose-correct-exercise')" class="reset-btn">Reset</button>
  </div>
  
  <div id="choose-correct-exercise-results" class="results-section" style="display: none;">
    <h4>Results:</h4>
    <p id="choose-correct-exercise-score"></p>
    <div id="choose-correct-exercise-feedback"></div>
  </div>
</div>

---

## Related Materials

- **[Possessive-adjectives Quiz](/quiz/beginner/possessive-adjectives-quiz/)** - Test your knowledge with a quiz

- **[Possessive Adjectives Grammar Lesson](/grammar/beginner/possessive-adjectives/)** - Learn the rules and theory
- **[Subject Pronouns](/grammar/beginner/subject-pronouns/)** - Related pronoun topics
- **[More Beginner Exercises](/exercises/)** - Practice other beginner grammar topics