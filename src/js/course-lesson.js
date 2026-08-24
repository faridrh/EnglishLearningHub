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
      // Progress-tracked practice buttons handle their own speak + progress.
      if (
        button.classList.contains("alphabet-key") ||
        button.classList.contains("practice-word-btn") ||
        button.classList.contains("practice-track-btn")
      ) {
        return;
      }

      button.addEventListener("click", function () {
        speak(button.getAttribute("data-speak") || "");
      });
    });
  }

  function setupSentenceBuilder(builder) {
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
        if (feedback) {
          feedback.textContent = emptyMessage;
          feedback.classList.remove("is-success");
        }
        return;
      }

      var sentence = fillTemplate(speakTemplate, values, "").replace(/\s+/g, " ").trim();
      if (feedback) {
        feedback.textContent = feedbackPrefix + " " + sentence;
        feedback.classList.add("is-success");
      }
      speak(sentence);
    }

    inputs.forEach(function (input) {
      input.addEventListener("input", function () {
        renderPreview(getValues());
      });
      input.addEventListener("change", function () {
        renderPreview(getValues());
      });
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          buildSentence();
        }
      });
    });

    if (buildButton) {
      buildButton.addEventListener("click", buildSentence);
    }

    renderPreview(getValues());
  }

  function setupSentenceBuilders() {
    var builders = document.querySelectorAll('[data-exercise-type="sentence"]');
    builders.forEach(setupSentenceBuilder);
  }

  function updateProgress(el, practiced, total, label) {
    if (!el) return;
    el.innerHTML =
      label + ": <strong>" + practiced + "</strong> / " + total +
      (practiced >= total ? ' <span class="lesson-progress-done">✓ Great work!</span>' : "");
  }

  function setupTrackedButtons(buttons, progressEl, progressLabel) {
    var practiced = {};

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var id =
          button.getAttribute("data-track-id") ||
          button.getAttribute("data-letter") ||
          button.getAttribute("data-word") ||
          button.getAttribute("data-speak") ||
          "";
        speak(button.getAttribute("data-speak") || id);
        practiced[id] = true;
        button.classList.add("is-practiced");
        updateProgress(progressEl, Object.keys(practiced).length, buttons.length, progressLabel);
      });
    });
  }

  function setupAlphabetPractice() {
    var exercises = document.querySelectorAll('[data-exercise-type="alphabet-practice"]');

    exercises.forEach(function (exercise) {
      setupSentenceBuilder(exercise);

      var letterButtons = exercise.querySelectorAll(".alphabet-key");
      var wordButtons = exercise.querySelectorAll(".practice-word-btn");
      var letterProgress = exercise.querySelector('[data-role="letter-progress"]');
      var wordProgress = exercise.querySelector('[data-role="word-progress"]');

      setupTrackedButtons(letterButtons, letterProgress, "Letters practiced");
      setupTrackedButtons(wordButtons, wordProgress, "Words practiced");
    });
  }

  function setupMultiPractice() {
    var exercises = document.querySelectorAll('[data-exercise-type="multi-practice"]');

    exercises.forEach(function (exercise) {
      setupSentenceBuilder(exercise);

      var steps = exercise.querySelectorAll(".lesson-step");
      steps.forEach(function (step) {
        var buttons = step.querySelectorAll(".practice-track-btn");
        if (!buttons.length) return;

        var progressEl = step.querySelector('[data-role="step-progress"]');
        var label =
          (progressEl && progressEl.getAttribute("data-progress-label")) || "Practiced";
        setupTrackedButtons(buttons, progressEl, label);
      });
    });
  }

  function setupDragDropArticles() {
    var exercises = document.querySelectorAll('[data-exercise-type="dragdrop-articles"]');

    exercises.forEach(function (exercise) {
      var wordBank = exercise.querySelector('[data-role="word-bank"]');
      var words = exercise.querySelectorAll(".lesson-word");
      var zones = exercise.querySelectorAll(".lesson-drop-zone");
      var zoneA = exercise.querySelector('[data-zone-target="a"]');
      var zoneAn = exercise.querySelector('[data-zone-target="an"]');
      var checkButton = exercise.querySelector('[data-action="check"]');
      var resetButton = exercise.querySelector('[data-action="reset"]');
      var feedback = exercise.querySelector('[data-role="feedback"]');
      var initialOrder = Array.from(words).map(function (word) {
        return word.id;
      });
      var selectedWord = null;

      function setFeedback(message, isSuccess) {
        if (!feedback) return;
        feedback.textContent = message;
        if (isSuccess) {
          feedback.classList.add("is-success");
        } else {
          feedback.classList.remove("is-success");
        }
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
          var parentZone = word.closest(".lesson-drop-zone");
          if (!parentZone) return;

          placed += 1;
          var zoneArticle = parentZone.getAttribute("data-zone");
          var expected = word.getAttribute("data-article");

          if (zoneArticle === expected) {
            correct += 1;
            word.style.backgroundColor = "#dcfce7";
            word.style.borderColor = "#16a34a";
            word.style.color = "#166534";
          } else {
            word.style.backgroundColor = "#fee2e2";
            word.style.borderColor = "#dc2626";
            word.style.color = "#991b1b";
          }
        });

        if (placed < words.length) {
          setFeedback("Place all words into a or an first.");
          return;
        }

        if (correct === words.length) {
          setFeedback("Great job. All answers are correct.", true);
          speak("Great job. All answers are correct.");
        } else {
          setFeedback("You got " + correct + " out of " + words.length + " correct. Try again.");
        }
      }

      words.forEach(function (word) {
        word.addEventListener("dragstart", function (event) {
          event.dataTransfer.setData("text/plain", word.id);
        });

        word.addEventListener("click", function () {
          clearWordStyles();
          selectedWord = word;
          word.style.outline = "2px solid #1d4ed8";
        });
      });

      zones.forEach(function (zone) {
        zone.addEventListener("dragover", function (event) {
          event.preventDefault();
        });

        zone.addEventListener("drop", function (event) {
          event.preventDefault();
          var draggedId = event.dataTransfer.getData("text/plain");
          var draggedWord = document.getElementById(draggedId);
          if (draggedWord) {
            clearWordStyles();
            moveWordToZone(draggedWord, zone.getAttribute("data-zone"));
          }
        });

        zone.addEventListener("click", function () {
          if (selectedWord) {
            clearWordStyles();
            moveWordToZone(selectedWord, zone.getAttribute("data-zone"));
            selectedWord = null;
          }
        });
      });

      if (checkButton) checkButton.addEventListener("click", checkAnswers);
      if (resetButton) resetButton.addEventListener("click", resetExercise);

      resetExercise();
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffleList(items) {
    var copy = items.slice();
    var i;
    var j;
    var tmp;
    for (i = copy.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    if (copy.length > 1) {
      var same = true;
      for (i = 0; i < copy.length; i += 1) {
        if (copy[i] !== items[i]) {
          same = false;
          break;
        }
      }
      if (same) return shuffleList(items);
    }
    return copy;
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    var i;
    for (i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function setupSentenceOrder() {
    var exercises = document.querySelectorAll('[data-exercise-type="sentence-order"]');

    exercises.forEach(function (exercise) {
      var dataEl = exercise.querySelector('[data-role="sentence-order-data"]');
      var items;
      try {
        items = JSON.parse((dataEl && dataEl.textContent) || "[]");
      } catch (err) {
        items = [];
      }
      if (!items.length) return;

      var counterEl = exercise.querySelector('[data-role="counter"]');
      var scoreEl = exercise.querySelector('[data-role="score"]');
      var promptEl = exercise.querySelector('[data-role="prompt"]');
      var answerEl = exercise.querySelector('[data-role="answer"]');
      var bankEl = exercise.querySelector('[data-role="bank"]');
      var feedbackEl = exercise.querySelector('[data-role="feedback"]');
      var roundEl = exercise.querySelector('[data-role="round"]');
      var completeEl = exercise.querySelector('[data-role="complete"]');
      var summaryEl = exercise.querySelector('[data-role="summary"]');
      var resetBtn = exercise.querySelector('[data-action="reset"]');
      var showBtn = exercise.querySelector('[data-action="show-answer"]');
      var nextBtn = exercise.querySelector('[data-action="next"]');
      var restartBtn = exercise.querySelector('[data-action="restart"]');

      var index = 0;
      var correctCount = 0;
      var bank = [];
      var chosen = [];
      var locked = false;
      var resolved = false;
      var advanceTimer = null;

      function current() {
        return items[index];
      }

      function expectedWords() {
        return current().words || [];
      }

      function speakCurrent() {
        speak(current().speakText || expectedWords().join(" "));
      }

      function setFeedback(message, state) {
        if (!feedbackEl) return;
        feedbackEl.textContent = message || "";
        feedbackEl.classList.remove("is-success", "is-error");
        if (state === "success") feedbackEl.classList.add("is-success");
        if (state === "error") feedbackEl.classList.add("is-error");
      }

      function clearTimer() {
        if (advanceTimer) {
          window.clearTimeout(advanceTimer);
          advanceTimer = null;
        }
      }

      function updateMeta() {
        if (counterEl) {
          counterEl.textContent = "Sentence " + (index + 1) + " / " + items.length;
        }
        if (scoreEl) scoreEl.textContent = "Correct: " + correctCount;
      }

      function renderChips() {
        if (!answerEl || !bankEl) return;

        answerEl.classList.remove("is-empty");
        if (!chosen.length) {
          answerEl.classList.add("is-empty");
          answerEl.innerHTML = '<span class="sentence-order-placeholder">Tap the words below</span>';
        } else {
          answerEl.innerHTML = chosen
            .map(function (chip) {
              return (
                '<button type="button" class="sentence-order-chip is-placed" data-chip-id="' +
                chip.id +
                '"' +
                (locked ? " disabled" : "") +
                ">" +
                escapeHtml(chip.text) +
                "</button>"
              );
            })
            .join("");
        }

        bankEl.innerHTML = bank
          .filter(function (chip) {
            return !chosen.some(function (picked) {
              return picked.id === chip.id;
            });
          })
          .map(function (chip) {
            return (
              '<button type="button" class="sentence-order-chip" data-chip-id="' +
              chip.id +
              '"' +
              (locked ? " disabled" : "") +
              ">" +
              escapeHtml(chip.text) +
              "</button>"
            );
          })
          .join("");
      }

      function startRound() {
        clearTimer();
        locked = false;
        resolved = false;
        chosen = [];
        bank = shuffleList(expectedWords()).map(function (text, i) {
          return { id: "c" + i, text: text };
        });
        if (promptEl) promptEl.textContent = current().prompt || "";
        if (nextBtn) nextBtn.hidden = true;
        if (resetBtn) resetBtn.disabled = false;
        if (showBtn) showBtn.disabled = false;
        if (answerEl) answerEl.classList.remove("is-correct", "is-wrong");
        setFeedback("");
        updateMeta();
        renderChips();
      }

      function chosenTexts() {
        return chosen.map(function (chip) {
          return chip.text;
        });
      }

      function markCorrect() {
        locked = true;
        if (!resolved) {
          correctCount += 1;
          resolved = true;
          updateMeta();
        }
        if (answerEl) {
          answerEl.classList.add("is-correct");
          answerEl.classList.remove("is-wrong", "is-empty");
        }
        setFeedback("Correct!", "success");
        speakCurrent();
        if (resetBtn) resetBtn.disabled = true;
        if (showBtn) showBtn.disabled = true;
        if (nextBtn) {
          nextBtn.hidden = false;
          nextBtn.textContent = index >= items.length - 1 ? "See results" : "Next sentence";
        }
        renderChips();
        clearTimer();
        advanceTimer = window.setTimeout(goNext, 1600);
      }

      function markWrong() {
        if (answerEl) {
          answerEl.classList.add("is-wrong");
          answerEl.classList.remove("is-correct");
        }
        setFeedback("Not quite. Tap a word to change it, or reset.", "error");
      }

      function maybeCheck() {
        if (locked) return;
        if (chosen.length !== expectedWords().length) {
          if (answerEl) answerEl.classList.remove("is-wrong", "is-correct");
          setFeedback("");
          return;
        }
        if (arraysEqual(chosenTexts(), expectedWords())) {
          markCorrect();
        } else {
          markWrong();
        }
      }

      function goNext() {
        clearTimer();
        if (index >= items.length - 1) {
          showComplete();
          return;
        }
        index += 1;
        startRound();
      }

      function showComplete() {
        clearTimer();
        if (roundEl) roundEl.hidden = true;
        if (completeEl) completeEl.hidden = false;
        if (summaryEl) {
          summaryEl.textContent = "You got " + correctCount + " / " + items.length + " correct.";
        }
        if (counterEl) counterEl.textContent = "Finished";
      }

      function restart() {
        index = 0;
        correctCount = 0;
        if (roundEl) roundEl.hidden = false;
        if (completeEl) completeEl.hidden = true;
        startRound();
      }

      if (bankEl) {
        bankEl.addEventListener("click", function (event) {
          var btn = event.target.closest("[data-chip-id]");
          if (!btn || btn.disabled || locked) return;
          var id = btn.getAttribute("data-chip-id");
          var chip = bank.find(function (item) {
            return item.id === id;
          });
          if (!chip) return;
          chosen.push(chip);
          renderChips();
          maybeCheck();
        });
      }

      if (answerEl) {
        answerEl.addEventListener("click", function (event) {
          var btn = event.target.closest("[data-chip-id]");
          if (!btn || btn.disabled || locked) return;
          var id = btn.getAttribute("data-chip-id");
          chosen = chosen.filter(function (chip) {
            return chip.id !== id;
          });
          renderChips();
          maybeCheck();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          if (locked) return;
          chosen = [];
          if (answerEl) answerEl.classList.remove("is-wrong", "is-correct");
          setFeedback("");
          renderChips();
        });
      }

      if (showBtn) {
        showBtn.addEventListener("click", function () {
          if (locked) return;
          clearTimer();
          locked = true;
          resolved = true;
          chosen = expectedWords().map(function (text, i) {
            return { id: "ans" + i, text: text };
          });
          if (answerEl) {
            answerEl.classList.remove("is-wrong", "is-empty");
            answerEl.classList.add("is-correct");
          }
          setFeedback("Answer: " + expectedWords().join(" "));
          speakCurrent();
          if (resetBtn) resetBtn.disabled = true;
          showBtn.disabled = true;
          if (nextBtn) {
            nextBtn.hidden = false;
            nextBtn.textContent = index >= items.length - 1 ? "See results" : "Next sentence";
          }
          renderChips();
        });
      }

      if (nextBtn) nextBtn.addEventListener("click", goNext);
      if (restartBtn) restartBtn.addEventListener("click", restart);

      startRound();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupTtsButtons();
    setupSentenceBuilders();
    setupAlphabetPractice();
    setupMultiPractice();
    setupDragDropArticles();
    setupSentenceOrder();
  });
})();
