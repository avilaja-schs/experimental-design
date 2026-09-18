// script.js
// Wires up the dropdown, buttons, and scenario display.
// Relies on the `scenarios` object defined in scenarios.js.

(function () {
  "use strict";

  const topicSelect = document.getElementById("topicSelect");
  const generateBtn = document.getElementById("generateBtn");
  const readAloudBtn = document.getElementById("readAloudBtn");
  const copyBtn = document.getElementById("copyBtn");
  const fontSmallerBtn = document.getElementById("fontSmallerBtn");
  const fontLargerBtn = document.getElementById("fontLargerBtn");
  const scenarioOutput = document.getElementById("scenarioOutput");

  // ---- Safety check: make sure the expected page elements exist ----
  if (!topicSelect || !generateBtn || !scenarioOutput) {
    console.error(
      "Biology Scenario Generator: one or more expected elements " +
      "(#topicSelect, #generateBtn, #scenarioOutput) were not found. " +
      "Check that index.html was not accidentally modified."
    );
    return;
  }

  // ---- Safety check: make sure scenarios.js actually loaded ----
  // If this file is missing, misnamed, or failed to upload, `scenarios`
  // will be undefined. Rather than silently leaving the dropdown empty,
  // show a clear message so the problem is obvious right away.
  if (typeof scenarios === "undefined" || Object.keys(scenarios).length === 0) {
    scenarioOutput.innerHTML =
      '<p style="color:#b3261e; font-weight:600;">' +
      "This page could not find its scenario data (scenarios.js). " +
      "Check that scenarios.js was uploaded to the same folder as " +
      "index.html, that its filename is spelled exactly right " +
      "(lowercase, no extra characters), and that this page loads it " +
      'over http:// or https:// rather than being opened as a bare file.' +
      "</p>";
    generateBtn.disabled = true;
    topicSelect.disabled = true;
    return;
  }

  let currentText = "";
  // Track the last shown index per topic so we try not to repeat
  // the same scenario twice in a row for the same topic.
  const lastIndexByTopic = {};

  // ---- Populate the dropdown from scenarios.js ----
  function populateDropdown() {
    const topics = Object.keys(scenarios);
    topics.forEach(function (topic) {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.appendChild(option);
    });
  }

  // ---- Pick a random scenario object, avoiding an immediate repeat ----
  // Each scenario is now an object: { text, iv, dv, ivChoices, dvChoices, explanation }
  function pickScenario(topic) {
    const list = scenarios[topic];
    if (!list || list.length === 0) {
      return { text: "No scenarios are available for this topic yet." };
    }
    if (list.length === 1) {
      return list[0];
    }
    let index;
    do {
      index = Math.floor(Math.random() * list.length);
    } while (index === lastIndexByTopic[topic]);
    lastIndexByTopic[topic] = index;
    return list[index];
  }

  // ---- Display a scenario ----
  function showScenario() {
    const topic = topicSelect.value;
    if (!topic) {
      return;
    }
    const scenario = pickScenario(topic);
    currentText = scenario.text;

    scenarioOutput.innerHTML = "";

    const label = document.createElement("span");
    label.className = "scenario-topic-label";
    label.textContent = topic;

    const paragraph = document.createElement("p");
    paragraph.textContent = currentText;

    scenarioOutput.appendChild(label);
    scenarioOutput.appendChild(document.createElement("br"));
    scenarioOutput.appendChild(paragraph);

    readAloudBtn.disabled = false;
    copyBtn.disabled = false;

    // Stop any speech that might already be playing before showing new text.
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  // ---- Read the current scenario aloud (Web Speech API) ----
  function readAloud() {
    if (!currentText || !window.speechSynthesis) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentText);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }

  // ---- Copy the current scenario text to the clipboard ----
  function copyText() {
    if (!currentText) {
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(currentText).then(function () {
        flashButtonLabel(copyBtn, "✅ Copied!");
      }).catch(function () {
        fallbackCopy(currentText);
      });
    } else {
      fallbackCopy(currentText);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      flashButtonLabel(copyBtn, "✅ Copied!");
    } catch (err) {
      /* Clipboard not available; silently ignore. */
    }
    document.body.removeChild(textarea);
  }

  function flashButtonLabel(button, tempLabel) {
    const original = button.textContent;
    button.textContent = tempLabel;
    setTimeout(function () {
      button.textContent = original;
    }, 1500);
  }

  // ---- Text size controls ----
  let fontSizePx = 19;
  const MIN_FONT = 14;
  const MAX_FONT = 30;

  function applyFontSize() {
    document.documentElement.style.setProperty("--font-base-size", fontSizePx + "px");
  }

  function increaseFont() {
    fontSizePx = Math.min(MAX_FONT, fontSizePx + 2);
    applyFontSize();
  }

  function decreaseFont() {
    fontSizePx = Math.max(MIN_FONT, fontSizePx - 2);
    applyFontSize();
  }

  // ---- Event listeners ----
  generateBtn.addEventListener("click", showScenario);
  readAloudBtn.addEventListener("click", readAloud);
  copyBtn.addEventListener("click", copyText);
  fontLargerBtn.addEventListener("click", increaseFont);
  fontSmallerBtn.addEventListener("click", decreaseFont);

  // Also allow pressing Enter/change on the dropdown to generate right away.
  topicSelect.addEventListener("change", showScenario);

  // ---- Init ----
  populateDropdown();
  if (topicSelect.options.length > 0) {
    topicSelect.selectedIndex = 0;
  }
})();
