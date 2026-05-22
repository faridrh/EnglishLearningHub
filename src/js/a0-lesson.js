(function () {
  function supported() {
    return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function speak(text) {
    if (!supported() || !text) return;

    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function fillTemplate(template, values, blankValue) {
    return (template || "").replace(/\{([a-zA-Z0-9_]+)\}/g, function (_, key) {
      var value = values[key];
      return value && value.trim() ? value.trim() : blankValue;
    });
  }

  function setupTtsButtons() {
    var buttons = document.querySelectorAll("[data-speak]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        speak(button.getAttribute("data-speak") || "");
      });
    });
  }

  function setupSentenceBuilders() {
    var builders = document.querySelectorAll('[data-exercise-type="sentence"]');

    builders.forEach(function (builder) {
      var inputs = builder.querySelectorAll("[data-field-name]");
      var preview = builder.querySelector('[data-role="preview"]');
      var feedback = builder.querySelector('[data-role="feedback"]');
      var buildButton = builder.querySelector('[data-action="build-sentence"]');
      var displayTemplate = builder.getAttribute("data-display-template") || "";
      var speakTemplate = builder.getAttribute("data-speak-template") || displayTemplate;
      var emptyMessage = builder.getAttribute("data-empty-message") || "Please complete all fields.";
      var feedbackPrefix = builder.getAttribute("data-feedback-prefix") || "Built sentence:";

      function getValues() {
        var values = {};
        inputs.forEach(function (input) {
          var fieldName = input.getAttribute("data-field-name");
          values[fieldName] = (input.value || "").trim();
        });
        return values;
      }

      function hasEmpty(values) {
        return Object.keys(values).some(function (key) {
          return !values[key];
        });
      }

      function renderPreview(values) {
        if (preview) {
          preview.textContent = fillTemplate(displayTemplate, values, "_____");
        }
      }

      function buildSentence() {
        var values = getValues();
        renderPreview(values);

        if (hasEmpty(values)) {
          if (feedback) feedback.textContent = emptyMessage;
          return;
        }

        var sentence = fillTemplate(speakTemplate, values, "").replace(/\s+/g, " ").trim();
        if (feedback) feedback.textContent = feedbackPrefix + " " + sentence;
        speak(sentence);
      }

      inputs.forEach(function (input) {
        input.addEventListener("input", function () {
          renderPreview(getValues());
        });
        input.addEventListener("change", function () {
          renderPreview(getValues());
        });
      });

      if (buildButton) {
        buildButton.addEventListener("click", buildSentence);
      }

      renderPreview(getValues());
    });
  }

  function setupDragDropArticles() {
    var exercises = document.querySelectorAll('[data-exercise-type="dragdrop-articles"]');

    exercises.forEach(function (exercise) {
      var wordBank = exercise.querySelector('[data-role="word-bank"]');
      var words = exercise.querySelectorAll('.lesson-word');
      var zones = exercise.querySelectorAll('.lesson-drop-zone');
      var zoneA = exercise.querySelector('[data-zone-target="a"]');
      var zoneAn = exercise.querySelector('[data-zone-target="an"]');
      var checkButton = exercise.querySelector('[data-action="check"]');
      var resetButton = exercise.querySelector('[data-action="reset"]');
      var feedback = exercise.querySelector('[data-role="feedback"]');
      var initialOrder = Array.from(words).map(function (word) {
        return word.id;
      });
      var selectedWord = null;

      function setFeedback(message) {
        if (feedback) feedback.textContent = message;
      }

      function clearWordStyles() {
        words.forEach(function (word) {
          word.style.outline = "";
          word.style.backgroundColor = "";
          word.style.borderColor = "";
          word.style.color = "";
        });
      }

      function moveWordToZone(word, zoneName) {
        var target = zoneName === "a" ? zoneA : zoneAn;
        if (target) target.appendChild(word);
      }

      function resetExercise() {
        clearWordStyles();
        initialOrder.forEach(function (id) {
          var word = document.getElementById(id);
          if (wordBank && word) wordBank.appendChild(word);
        });
        selectedWord = null;
        setFeedback("Drag each word to the correct article box.");
      }

      function checkAnswers() {
        var correct = 0;
        var placed = 0;

        words.forEach(function (word) {
          var parentZone = word.closest('.lesson-drop-zone');
          if (!parentZone) return;

          placed += 1;
          var zoneArticle = parentZone.getAttribute('data-zone');
          var expected = word.getAttribute('data-article');

          if (zoneArticle === expected) {
            correct += 1;
            word.style.backgroundColor = '#dcfce7';
            word.style.borderColor = '#16a34a';
            word.style.color = '#166534';
          } else {
            word.style.backgroundColor = '#fee2e2';
            word.style.borderColor = '#dc2626';
            word.style.color = '#991b1b';
          }
        });

        if (placed < words.length) {
          setFeedback('Place all words into a or an first.');
          return;
        }

        if (correct === words.length) {
          setFeedback('Great job. All answers are correct.');
          speak('Great job. All answers are correct.');
        } else {
          setFeedback('You got ' + correct + ' out of ' + words.length + ' correct. Try again.');
        }
      }

      words.forEach(function (word) {
        word.addEventListener('dragstart', function (event) {
          event.dataTransfer.setData('text/plain', word.id);
        });

        word.addEventListener('click', function () {
          clearWordStyles();
          selectedWord = word;
          word.style.outline = '2px solid #1d4ed8';
        });
      });

      zones.forEach(function (zone) {
        zone.addEventListener('dragover', function (event) {
          event.preventDefault();
        });

        zone.addEventListener('drop', function (event) {
          event.preventDefault();
          var draggedId = event.dataTransfer.getData('text/plain');
          var draggedWord = document.getElementById(draggedId);
          if (draggedWord) {
            clearWordStyles();
            moveWordToZone(draggedWord, zone.getAttribute('data-zone'));
          }
        });

        zone.addEventListener('click', function () {
          if (selectedWord) {
            clearWordStyles();
            moveWordToZone(selectedWord, zone.getAttribute('data-zone'));
            selectedWord = null;
          }
        });
      });

      if (checkButton) checkButton.addEventListener('click', checkAnswers);
      if (resetButton) resetButton.addEventListener('click', resetExercise);

      resetExercise();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupTtsButtons();
    setupSentenceBuilders();
    setupDragDropArticles();
  });
})();
