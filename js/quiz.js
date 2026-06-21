/* Weighted 15-question personality quiz and share-card renderer. */
const questions = [
  {
    text: "A door appears where no door existed five seconds ago. You…",
    answers: [
      ["Ask why it is breathing before cautiously opening it.", { Pomni: 3, Gangle: 1 }],
      ["Open it immediately and stand behind someone else.", { Jax: 3, Caine: 1 }],
      ["Make sure everyone is together before deciding.", { Ragatha: 3, Pomni: 1 }],
      ["Consult the nearest pillow fort.", { Kinger: 3, Zooble: 1 }]
    ]
  },
  {
    text: "Your ideal role in a group adventure is…",
    answers: [
      ["The reluctant navigator with three backup plans.", { Pomni: 3, Zooble: 1 }],
      ["Morale officer and emotional first-aid kit.", { Ragatha: 3, Gangle: 1 }],
      ["Agent of consequences.", { Jax: 3, Caine: 2 }],
      ["The person who opted out but was carried along anyway.", { Zooble: 3, Gangle: 1 }]
    ]
  },
  {
    text: "A giant rubber duck begins giving orders. Your first response?",
    answers: [
      ["Obey. It sounds unusually qualified.", { Kinger: 3, Gangle: 1 }],
      ["Challenge it to a duel for leadership.", { Jax: 3, Zooble: 1 }],
      ["Ask whether it has a detailed itinerary.", { Caine: 3, Ragatha: 1 }],
      ["Quietly search for the person controlling it.", { Pomni: 3, Zooble: 1 }]
    ]
  },
  {
    text: "Choose a coping mechanism.",
    answers: [
      ["Deep breathing and checking every exit twice.", { Pomni: 3, Gangle: 1 }],
      ["Aggressive optimism.", { Ragatha: 3, Caine: 1 }],
      ["Comedy at someone else's expense.", { Jax: 3, Zooble: 1 }],
      ["Construct a fortress and forget why.", { Kinger: 3, Gangle: 1 }]
    ]
  },
  {
    text: "The circus announces a mandatory talent show. You perform…",
    answers: [
      ["An original tragedy with handmade masks.", { Gangle: 3, Ragatha: 1 }],
      ["A disappearing act where you simply leave.", { Zooble: 3, Pomni: 1 }],
      ["A 90-minute multimedia spectacular.", { Caine: 3, Kinger: 1 }],
      ["Pranks. The talent is plausible deniability.", { Jax: 3, Caine: 1 }]
    ]
  },
  {
    text: "Pick the most trustworthy object.",
    answers: [
      ["A slightly cracked comedy mask.", { Gangle: 3, Ragatha: 1 }],
      ["A chess piece whispering stock tips.", { Kinger: 3, Caine: 1 }],
      ["A plain cardboard box labeled 'Definitely Normal.'", { Jax: 2, Pomni: 2 }],
      ["None of them. Objects must earn trust.", { Zooble: 3, Pomni: 1 }]
    ]
  },
  {
    text: "Your friend is having a terrible digital day. You…",
    answers: [
      ["Listen, reassure them, and stay nearby.", { Ragatha: 3, Gangle: 2 }],
      ["Distract them with a dangerous but funny plan.", { Jax: 3, Caine: 1 }],
      ["Share your own panic so they feel less alone.", { Pomni: 3, Gangle: 1 }],
      ["Offer blunt advice and practical help.", { Zooble: 3, Ragatha: 1 }]
    ]
  },
  {
    text: "What is your relationship with rules?",
    answers: [
      ["Rules keep people safe. Usually. Maybe.", { Ragatha: 3, Pomni: 1 }],
      ["Rules are side quests with worse rewards.", { Jax: 3, Zooble: 1 }],
      ["I create the rules and revise them mid-sentence!", { Caine: 3, Kinger: 1 }],
      ["I forgot the rules, but I remember a lovely insect collection.", { Kinger: 3, Gangle: 1 }]
    ]
  },
  {
    text: "You find a red button labeled DO NOT PRESS.",
    answers: [
      ["Guard it so nobody presses it.", { Ragatha: 3, Pomni: 1 }],
      ["Press it before the label finishes rendering.", { Jax: 3, Caine: 2 }],
      ["Detach the arm nearest to the button.", { Zooble: 3, Pomni: 1 }],
      ["Write a short play about the temptation to press it.", { Gangle: 3, Kinger: 1 }]
    ]
  },
  {
    text: "How do you feel about being the center of attention?",
    answers: [
      ["Excellent. Please direct all spotlights toward me.", { Caine: 3, Jax: 1 }],
      ["Fine, if it helps everyone else.", { Ragatha: 3, Gangle: 1 }],
      ["No. Absolutely not. Is that camera moving?", { Pomni: 3, Zooble: 1 }],
      ["Only when I have something genuinely strange to announce.", { Kinger: 3, Zooble: 1 }]
    ]
  },
  {
    text: "Pick a vacation destination.",
    answers: [
      ["A quiet room with a lock that works.", { Zooble: 3, Pomni: 2 }],
      ["A sunny picnic where everyone gets along.", { Ragatha: 3, Gangle: 1 }],
      ["The forbidden basement under the forbidden basement.", { Jax: 3, Caine: 1 }],
      ["A blanket fort during a thunderstorm.", { Kinger: 3, Gangle: 2 }]
    ]
  },
  {
    text: "When a plan fails spectacularly, you…",
    answers: [
      ["Immediately improvise a bigger plan with more fireworks.", { Caine: 3, Jax: 1 }],
      ["Try to repair the plan and everyone's feelings.", { Ragatha: 3, Gangle: 1 }],
      ["Say 'I knew it' and begin looking for exits.", { Pomni: 3, Zooble: 1 }],
      ["Laugh, because failure was secretly the plan.", { Jax: 3, Kinger: 1 }]
    ]
  },
  {
    text: "Which compliment sounds most like you?",
    answers: [
      ["You are surprisingly perceptive under pressure.", { Pomni: 3, Zooble: 1 }],
      ["You make difficult places feel kinder.", { Ragatha: 3, Gangle: 1 }],
      ["You are never boring, despite several formal complaints.", { Jax: 2, Caine: 3 }],
      ["Your weirdness occasionally contains ancient wisdom.", { Kinger: 3, Gangle: 1 }]
    ]
  },
  {
    text: "Choose a personal motto.",
    answers: [
      ["We can get through this together.", { Ragatha: 3, Gangle: 1 }],
      ["If it is funny, it was worth it.", { Jax: 3, Caine: 1 }],
      ["I would like to unsubscribe.", { Zooble: 3, Pomni: 2 }],
      ["Every crisis deserves an opening number!", { Caine: 3, Kinger: 1 }]
    ]
  },
  {
    text: "The exit finally appears. What do you do?",
    answers: [
      ["Test it carefully, then run.", { Pomni: 3, Zooble: 1 }],
      ["Hold it open and make sure everyone gets through.", { Ragatha: 3, Gangle: 2 }],
      ["Ask whether the exit has a prank setting.", { Jax: 3, Caine: 1 }],
      ["Wave goodbye to the darkness. It was a good listener.", { Kinger: 3, Gangle: 1 }]
    ]
  }
];

const state = { index: 0, scores: Object.fromEntries(Object.keys(CIRCUS_DATA.characters).map((name) => [name, 0])) };
const questionText = document.querySelector("#question-text");
const questionCount = document.querySelector("#question-count");
const answers = document.querySelector("#answers");
const progressFill = document.querySelector("#quiz-progress-fill");
const progressText = document.querySelector("#quiz-progress-text");
const percent = document.querySelector("#quiz-percent");
const questionCard = document.querySelector("#question-card");
const resultCard = document.querySelector("#result-card");
let latestResult = null;

function renderQuestion() {
  const question = questions[state.index];
  const progress = Math.round((state.index / questions.length) * 100);
  questionCount.textContent = `Question ${state.index + 1}`;
  questionText.textContent = question.text;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Question ${state.index + 1} of ${questions.length}`;
  percent.textContent = `${progress}%`;
  answers.innerHTML = "";
  question.answers.forEach(([label, weights]) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => choose(weights));
    answers.appendChild(button);
  });
}

function choose(weights) {
  Object.entries(weights).forEach(([name, points]) => { state.scores[name] += points; });
  state.index += 1;
  if (state.index < questions.length) {
    renderQuestion();
    questionCard.classList.add("glitching");
    setTimeout(() => questionCard.classList.remove("glitching"), 450);
  } else {
    showResult();
  }
}

function showResult() {
  const ranking = Object.entries(state.scores).sort((a, b) => b[1] - a[1]);
  const [name, score] = ranking[0];
  const character = CIRCUS_DATA.characters[name];
  const compatibility = Math.min(99, Math.round((score / 45) * 100));
  const chaos = Math.min(100, Math.round(character.stats.chaos * .75 + compatibility * .25));
  const sanity = Math.max(5, Math.round(character.stats.sanity * .8 + (100 - chaos) * .2));
  latestResult = { name, compatibility, chaos, sanity, description: character.description, emoji: character.emoji };

  document.querySelector("#quiz-progress").classList.add("hidden");
  questionCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  document.querySelector("#result-image").textContent = character.emoji;
  document.querySelector("#result-image").setAttribute("aria-label", `${name} character image placeholder`);
  document.querySelector("#result-name").textContent = name;
  document.querySelector("#result-description").textContent = character.description;
  document.querySelector("#result-meters").innerHTML = [
    ["Compatibility", compatibility], ["Chaos Score", chaos], ["Sanity Score", sanity]
  ].map(([label, value]) => `<div class="meter"><div class="meter-head"><span>${label}</span><strong>${value}%</strong></div><div class="meter-track"><div class="meter-fill" data-width="${value}"></div></div></div>`).join("");
  requestAnimationFrame(() => document.querySelectorAll(".meter-fill").forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; }));

  CircusAchievements.update((saved) => { saved.latestQuiz = latestResult; });
  CircusAchievements.unlock("personality_found");
  if (name === "Jax" && chaos >= 85) CircusAchievements.unlock("chaos_agent");
  progressFill.style.width = "100%";
}

function resetQuiz() {
  state.index = 0;
  Object.keys(state.scores).forEach((key) => { state.scores[key] = 0; });
  latestResult = null;
  resultCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  document.querySelector("#quiz-progress").classList.remove("hidden");
  CircusAchievements.update((saved) => { saved.stats.quizRetakes += 1; });
  renderQuestion();
}

function drawShareCard() {
  const canvas = document.querySelector("#share-canvas");
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, "#120d2c");
  gradient.addColorStop(.55, "#39135f");
  gradient.addColorStop(1, "#0c6075");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  ctx.strokeStyle = "#ffe66d";
  ctx.lineWidth = 12;
  ctx.strokeRect(28, 28, 1144, 574);
  ctx.fillStyle = "#20e3ff";
  ctx.font = "700 30px system-ui";
  ctx.fillText("THE DIGITAL CIRCUS HUB", 70, 92);
  ctx.fillStyle = "#fff8e7";
  ctx.font = "900 72px system-ui";
  ctx.fillText(`I got ${latestResult.name}!`, 70, 195);
  ctx.font = "120px system-ui";
  ctx.fillText(latestResult.emoji, 900, 210);
  ctx.font = "700 34px system-ui";
  ctx.fillStyle = "#ffe66d";
  ctx.fillText(`Compatibility ${latestResult.compatibility}%`, 70, 290);
  ctx.fillStyle = "#ff3cac";
  ctx.fillText(`Chaos ${latestResult.chaos}%`, 70, 350);
  ctx.fillStyle = "#20e3ff";
  ctx.fillText(`Sanity ${latestResult.sanity}%`, 70, 410);
  ctx.fillStyle = "#bdb7d8";
  ctx.font = "26px system-ui";
  ctx.fillText("Which Digital Circus Character Are You?", 70, 530);
  ctx.fillText(location.origin + location.pathname.replace("quiz.html", ""), 70, 570);
  return canvas;
}

document.querySelector("#retake-quiz").addEventListener("click", resetQuiz);
document.querySelector("#share-result").addEventListener("click", async () => {
  const text = `I got ${latestResult.name} on The Digital Circus Hub quiz — ${latestResult.compatibility}% compatible, ${latestResult.chaos}% chaos!`;
  try {
    if (navigator.share) await navigator.share({ title: "My Digital Circus result", text, url: location.href });
    else await navigator.clipboard.writeText(`${text} ${location.href}`);
    document.querySelector("#share-status").textContent = navigator.share ? "Share dialog opened." : "Result copied to clipboard.";
  } catch (error) {
    if (error.name !== "AbortError") document.querySelector("#share-status").textContent = "Sharing was blocked by this browser.";
  }
});
document.querySelector("#download-result").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `digital-circus-${latestResult.name.toLowerCase()}-result.png`;
  link.href = drawShareCard().toDataURL("image/png");
  link.click();
});

renderQuestion();
