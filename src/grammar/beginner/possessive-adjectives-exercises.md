---
layout: layouts/page.njk
title: Possessive Adjectives Exercises
description: Interactive exercises to practice possessive adjectives (my, your, his, her, its, our, their). Complete sentences, get instant feedback, and improve your English grammar skills.
level: Beginner
collection: grammar
---

# Possessive Adjectives Exercises

Practice using possessive adjectives with these two interactive exercises. Master choosing, matching, and correcting possessive adjectives (my, your, his, her, its, our, their) with instant feedback on your answers.

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
    <p><strong>1.</strong> I love <select class="select-blank" data-answer="my">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> family very much.</p>
  </div>
  
  <div class="exercise-item">
    <p><strong>2.</strong> Sarah is washing <select class="select-blank" data-answer="her">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> car in the driveway.</p>
  </div>

  <div class="exercise-item">
    <p><strong>3.</strong> The students are doing <select class="select-blank" data-answer="their">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> homework.</p>
  </div>

  <div class="exercise-item">
    <p><strong>4.</strong> Can you please show me <select class="select-blank" data-answer="your">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> passport?</p>
  </div>

  <div class="exercise-item">
    <p><strong>5.</strong> The dog is playing with <select class="select-blank" data-answer="its">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> toy.</p>
  </div>

  <div class="exercise-item">
    <p><strong>6.</strong> My brother forgot <select class="select-blank" data-answer="his">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> keys at home.</p>
  </div>

  <div class="exercise-item">
    <p><strong>7.</strong> We are planning <select class="select-blank" data-answer="our">
      <option value="">-- choose --</option>
      <option value="my">my</option>
      <option value="your">your</option>
      <option value="his">his</option>
      <option value="her">her</option>
      <option value="its">its</option>
      <option value="our">our</option>
      <option value="their">their</option>
    </select> vacation for next summer.</p>
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
  min-width: 80px;
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