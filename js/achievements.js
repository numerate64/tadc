/* Persistent achievement engine shared by every page. */
(() => {
  const STORAGE_KEY = "digitalCircusHubState";
  const defaults = {
    achievements: {},
    stats: { adventures: 0, quizRetakes: 0, scenesVisited: [], endings: [] },
    latestQuiz: null,
    favorites: [],
    escapeScene: "lobby"
  };

  const catalog = {
    first_adventure: { icon: "🎟️", title: "First Adventure", description: "Generate your first totally safe adventure." },
    chaos_agent: { icon: "💥", title: "Chaos Agent", description: "Reach maximum mischief or discover the Chaos Ending." },
    master_explorer: { icon: "🗺️", title: "Master Explorer", description: "Visit at least 15 unique escape scenes." },
    escape_artist: { icon: "🚪", title: "Escape Artist", description: "Find a genuine way out of the circus." },
    professional_panicker: { icon: "😱", title: "Professional Panicker", description: "Make panic a deliberate strategic choice." },
    caine_favorite: { icon: "🦷", title: "Caine's Favorite", description: "Earn a promotion nobody sensible requested." },
    personality_found: { icon: "🪞", title: "Identity Crisis Resolved", description: "Complete the personality quiz." },
    collector: { icon: "⭐", title: "Scenario Collector", description: "Save five favorite adventures." },
    completionist: { icon: "🎪", title: "Ending Enthusiast", description: "Discover all five major endings." },
    glitch_whisperer: { icon: "⌨️", title: "Glitch Whisperer", description: "Enter a classic secret code.", hidden: true },
    forbidden_button: { icon: "🔴", title: "Button Enjoyer", description: "Press the button that specifically said not to.", hidden: true }
  };

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        ...defaults,
        ...saved,
        achievements: { ...defaults.achievements, ...(saved.achievements || {}) },
        stats: { ...defaults.stats, ...(saved.stats || {}) }
      };
    } catch {
      return structuredClone(defaults);
    }
  }

  function save(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  function state() { return load(); }
  function update(mutator) {
    const next = load();
    mutator(next);
    save(next);
    return next;
  }

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < 42; i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.top = "-18px";
      piece.style.background = ["#ff3cac","#20e3ff","#9d4edd","#ffe66d"][i % 4];
      piece.style.setProperty("--x", `${(Math.random() - .5) * 240}px`);
      piece.style.animationDelay = `${Math.random() * .25}s`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 1900);
    }
  }

  function toast(item) {
    let node = document.querySelector(".achievement-toast");
    if (!node) {
      node = document.createElement("aside");
      node.className = "achievement-toast";
      node.setAttribute("role", "status");
      node.setAttribute("aria-live", "polite");
      document.body.appendChild(node);
    }
    node.innerHTML = `<strong>Achievement unlocked!</strong><span>${item.icon} ${item.title}</span>`;
    requestAnimationFrame(() => node.classList.add("show"));
    setTimeout(() => node.classList.remove("show"), 3800);
    confetti();
  }

  function unlock(id) {
    const item = catalog[id];
    if (!item) return false;
    const current = load();
    if (current.achievements[id]) return false;
    current.achievements[id] = new Date().toISOString();
    save(current);
    toast(item);
    window.dispatchEvent(new CustomEvent("circus:achievement", { detail: id }));
    return true;
  }

  function recordScene(sceneId) {
    const next = update((s) => {
      if (!s.stats.scenesVisited.includes(sceneId)) s.stats.scenesVisited.push(sceneId);
      s.escapeScene = sceneId;
    });
    if (next.stats.scenesVisited.length >= 15) unlock("master_explorer");
    return next;
  }

  function recordEnding(ending) {
    const next = update((s) => {
      if (!s.stats.endings.includes(ending)) s.stats.endings.push(ending);
    });
    if (ending === "escape") unlock("escape_artist");
    if (ending === "assistant") unlock("caine_favorite");
    if (ending === "chaos") unlock("chaos_agent");
    if (next.stats.endings.length >= 5) unlock("completionist");
  }

  window.CircusAchievements = { catalog, state, update, unlock, recordScene, recordEnding, STORAGE_KEY };
})();
