// quiz.js
// "Random Test Practice" feature: pulls a random scenario from every topic
// in scenarios.js, asks the student to pick the independent variable (IV)
// and dependent variable (DV) from a dropdown of choices, and gives
// immediate green/confetti or red/explanation feedback.
//
// Relies on the `scenarios` object defined in scenarios.js, where each
// scenario is { text, iv, dv, ivChoices, dvChoices, explanation }.

(function () {
  "use strict";

  const randomTestBtn = document.getElementById("randomTestBtn");
  const quizPanel = document.getElementById("quizPanel");
  const quizTopicLabel = document.getElementById("quizTopicLabel");
  const quizScenarioText = document.getElementById("quizScenarioText");
  const ivSelect = document.getElementById("ivSelect");
  const dvSelect = document.getElementById("dvSelect");
  const quizPrompt = document.getElementById("quizPrompt");
  const submitAnswerBtn = document.getElementById("submitAnswerBtn");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const quizFeedback = document.getElementById("quizFeedback");
  const flashOverlay = document.getElementById("flashOverlay");
  const confettiCanvas = document.getElementById("confettiCanvas");

  if (!randomTestBtn || !quizPanel || typeof scenarios === "undefined") {
    // Main script.js already surfaces a clear error if scenarios.js is
    // missing, so the quiz feature just quietly does nothing here.
    return;
  }

  // ---- Build a flat pool of every scenario across every topic ----
  const quizPool = [];
  Object.keys(scenarios).forEach(function (topic) {
    scenarios[topic].forEach(function (scenario) {
      if (scenario && scenario.iv && scenario.dv) {
        quizPool.push({ topic: topic, scenario: scenario });
      }
    });
  });

  let currentQuestion = null;
  let lastQuestionText = null;

  // ---- Small helpers ----
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function populateSelect(selectEl, choices, placeholder) {
    selectEl.innerHTML = "";
    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = placeholder;
    selectEl.appendChild(placeholderOption);

    shuffle(choices).forEach(function (choice) {
      const option = document.createElement("option");
      option.value = choice;
      option.textContent = choice;
      selectEl.appendChild(option);
    });
    selectEl.selectedIndex = 0;
    selectEl.disabled = false;
  }

  // ---- Load a new random question ----
  function loadRandomQuestion() {
    if (quizPool.length === 0) {
      return;
    }
    let pick;
    if (quizPool.length === 1) {
      pick = quizPool[0];
    } else {
      do {
        pick = quizPool[Math.floor(Math.random() * quizPool.length)];
      } while (pick.scenario.text === lastQuestionText);
    }
    lastQuestionText = pick.scenario.text;
    currentQuestion = pick;

    quizPanel.hidden = false;
    quizTopicLabel.textContent = pick.topic;
    quizScenarioText.textContent = pick.scenario.text;

    populateSelect(ivSelect, pick.scenario.ivChoices, "-- Choose the independent variable --");
    populateSelect(dvSelect, pick.scenario.dvChoices, "-- Choose the dependent variable --");

    quizPrompt.textContent = "";
    quizFeedback.hidden = true;
    quizFeedback.className = "quiz-feedback";
    quizFeedback.innerHTML = "";

    submitAnswerBtn.hidden = false;
    nextQuestionBtn.hidden = true;

    clearFlash();

    quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- Check the student's answer ----
  function checkAnswer() {
    const chosenIV = ivSelect.value;
    const chosenDV = dvSelect.value;

    if (!chosenIV || !chosenDV) {
      quizPrompt.textContent = "Please choose an answer for both the IV and the DV before submitting.";
      return;
    }
    quizPrompt.textContent = "";

    const correct =
      chosenIV === currentQuestion.scenario.iv &&
      chosenDV === currentQuestion.scenario.dv;

    ivSelect.disabled = true;
    dvSelect.disabled = true;
    submitAnswerBtn.hidden = true;
    nextQuestionBtn.hidden = false;

    quizFeedback.hidden = false;

    if (correct) {
      quizFeedback.className = "quiz-feedback correct";
      quizFeedback.innerHTML =
        '<span class="feedback-title">🎉 Correct! Great job.</span>' +
        "<p>" + escapeHtml(currentQuestion.scenario.explanation) + "</p>";
      flashScreen("green");
      launchConfetti();
    } else {
      quizFeedback.className = "quiz-feedback incorrect";
      quizFeedback.innerHTML =
        '<span class="feedback-title">Not quite — try again next time!</span>' +
        '<p class="answer-line"><strong>Correct independent variable:</strong> ' + escapeHtml(currentQuestion.scenario.iv) + "</p>" +
        '<p class="answer-line"><strong>Correct dependent variable:</strong> ' + escapeHtml(currentQuestion.scenario.dv) + "</p>" +
        "<p>" + escapeHtml(currentQuestion.scenario.explanation) + "</p>";
      flashScreen("red");
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // ---- Full-screen color flash ----
  let flashTimeout = null;
  function flashScreen(color) {
    clearFlash();
    flashOverlay.classList.add(color === "green" ? "flash-green" : "flash-red");
    flashTimeout = setTimeout(clearFlash, 900);
  }
  function clearFlash() {
    flashOverlay.classList.remove("flash-green", "flash-red");
    if (flashTimeout) {
      clearTimeout(flashTimeout);
      flashTimeout = null;
    }
  }

  // ---- Lightweight vanilla-JS confetti (no external library needed) ----
  const confettiColors = ["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#8e24aa"];
  let confettiParticles = [];
  let confettiAnimId = null;
  const ctx = confettiCanvas.getContext ? confettiCanvas.getContext("2d") : null;

  function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function launchConfetti() {
    if (!ctx) {
      return;
    }
    resizeCanvas();
    confettiParticles = [];
    const count = 140;
    for (let i = 0; i < count; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: -20 - Math.random() * confettiCanvas.height * 0.3,
        size: 6 + Math.random() * 6,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speedY: 2 + Math.random() * 3,
        speedX: (Math.random() - 0.5) * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }

    const duration = 2600;
    const start = performance.now();

    if (confettiAnimId) {
      cancelAnimationFrame(confettiAnimId);
    }

    function step(now) {
      const elapsed = now - start;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiParticles.forEach(function (p) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        if (elapsed > duration * 0.6) {
          p.opacity = Math.max(0, 1 - (elapsed - duration * 0.6) / (duration * 0.4));
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      if (elapsed < duration) {
        confettiAnimId = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiAnimId = null;
      }
    }

    confettiAnimId = requestAnimationFrame(step);
  }

  // ---- Event listeners ----
  randomTestBtn.addEventListener("click", loadRandomQuestion);
  submitAnswerBtn.addEventListener("click", checkAnswer);
  nextQuestionBtn.addEventListener("click", loadRandomQuestion);
})();
