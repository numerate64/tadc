/* Combinatorial adventure generator with typewriter output and saved favorites. */
const output = document.querySelector("#adventure-text");
const generateButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");
const favoriteButton = document.querySelector("#favorite");
const statusNode = document.querySelector("#adventure-status");
const favoritesList = document.querySelector("#favorites-list");
let currentAdventure = "";
let typingTimer = 0;

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

function buildAdventure() {
  const parts = CIRCUS_DATA.adventureParts;
  return `You must escort ${randomItem(parts.objects)} through ${randomItem(parts.locations)}, evade ${randomItem(parts.enemies)}, and finish ${randomItem(parts.goals)}. Your reward: ${randomItem(parts.rewards)}.`;
}

function typeAdventure(text) {
  clearInterval(typingTimer);
  output.textContent = "";
  output.classList.add("cursor");
  let index = 0;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    output.textContent = text;
    output.classList.remove("cursor");
    return;
  }
  typingTimer = setInterval(() => {
    output.textContent += text[index++];
    if (index >= text.length) {
      clearInterval(typingTimer);
      output.classList.remove("cursor");
    }
  }, 16);
}

function renderFavorites() {
  const favorites = CircusAchievements.state().favorites;
  favoritesList.innerHTML = favorites.length ? favorites.map((text, index) => `
    <article class="favorite-item"><p>${text}</p><button class="btn btn-small btn-danger" type="button" data-remove="${index}">Remove</button></article>
  `).join("") : '<div class="card"><p>No favorites yet. The insurance company is relieved.</p></div>';
  favoritesList.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      CircusAchievements.update((state) => { state.favorites.splice(Number(button.dataset.remove), 1); });
      renderFavorites();
    });
  });
}

generateButton.addEventListener("click", () => {
  currentAdventure = buildAdventure();
  typeAdventure(currentAdventure);
  copyButton.disabled = false;
  favoriteButton.disabled = false;
  const state = CircusAchievements.update((saved) => { saved.stats.adventures += 1; });
  CircusAchievements.unlock("first_adventure");
  if (state.stats.adventures >= 10) CircusAchievements.unlock("chaos_agent");
  statusNode.textContent = `Adventure #${state.stats.adventures.toLocaleString()} generated. Safety rating: decorative.`;
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentAdventure);
    statusNode.textContent = "Adventure copied. Responsibility not included.";
  } catch {
    statusNode.textContent = "Clipboard access was blocked. Select the adventure text to copy it manually.";
  }
});

favoriteButton.addEventListener("click", () => {
  if (!currentAdventure) return;
  const state = CircusAchievements.update((saved) => {
    if (!saved.favorites.includes(currentAdventure)) saved.favorites.unshift(currentAdventure);
    saved.favorites = saved.favorites.slice(0, 30);
  });
  if (state.favorites.length >= 5) CircusAchievements.unlock("collector");
  statusNode.textContent = "Adventure secured in the local vault.";
  renderFavorites();
});

renderFavorites();
