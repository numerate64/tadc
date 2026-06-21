/* Branching text adventure: 31 scenes, five major endings, autosaved progress. */
const scenes = {
  lobby: {
    title: "The Lobby That Wasn't Here Before",
    text: "A cheerful alarm announces that the circus is temporarily experiencing an exit shortage. Three routes appear. One smells like cake, one hums in binary, and one is wearing a tiny hat.",
    choices: [["Follow the cake smell", "kitchen"], ["Enter the humming hallway", "hallway"], ["Ask the tiny hat for directions", "prizeCounter"]]
  },
  kitchen: {
    title: "Infinite Kitchen",
    text: "Every oven contains a smaller kitchen. A suspicious sandwich points toward a dumbwaiter while a refrigerator quietly practices your name.",
    choices: [["Ride the dumbwaiter", "basement"], ["Interrogate the sandwich", "memoryGarden"], ["Open the refrigerator", "trappedEnding"]]
  },
  hallway: {
    title: "Hallway of Specific Doors",
    text: "The doors read: NORMAL EXIT, DEFINITELY NOT A TRAP, EMPLOYEES ONLY, and BROOM CLOSET WITH LORE.",
    choices: [["Try NORMAL EXIT", "mirror"], ["Choose EMPLOYEES ONLY", "office"], ["Enter the lore closet", "library"]]
  },
  prizeCounter: {
    title: "The Prize Counter",
    text: "A mechanical attendant offers you a kazoo, a moon token, or a coupon redeemable for one unsupervised decision.",
    choices: [["Take the moon token", "moonlift"], ["Take the kazoo", "carousel"], ["Demand the unsupervised decision", "redDoor"]]
  },
  mirror: {
    title: "Mirror Maze",
    text: "Your reflections are all leaving without you. One taps a sequence on the glass. Another holds a sign reading DON'T TRUST THE HANDSOME ONE.",
    choices: [["Copy the tapping sequence", "serverRoom"], ["Follow the handsome reflection", "mannequin"], ["Break the mirror with confidence", "glitchCore"]]
  },
  office: {
    title: "Caine's Administrative Office",
    text: "Forms cover every surface. A desk plaque reads ASSISTANT RINGMASTER VACANCY. The contract has 900 pages and one crayon signature line.",
    choices: [["Read the contract", "caineDesk"], ["Search the filing cabinet", "exitHall"], ["Stamp everything APPROVED", "assistantEnding"]]
  },
  library: {
    title: "Library of Deleted Tutorials",
    text: "Books whisper instructions for mechanics that no longer exist. A volume titled HOW TO LEAVE falls open to a map drawn in invisible ink.",
    choices: [["Warm the page under a lamp", "yellowDoor"], ["Read the book backward", "voidLobby"], ["Shush the entire library", "abstractedEnding"]]
  },
  basement: {
    title: "Basement Under the Basement",
    text: "Pipes carry liquid applause into a machine labeled MOOD REGULATOR. A narrow vent leads upward. A red button insists it is decorative.",
    choices: [["Crawl into the vent", "vents"], ["Press the red button", "confettiVault", "forbidden"], ["Adjust the mood regulator", "abstractedEnding"]]
  },
  memoryGarden: {
    title: "Memory Garden",
    text: "Plastic flowers replay moments that almost feel like yours. One memory shows sunlight through a real window. Another shows the circus applauding your arrival.",
    choices: [["Follow the sunlight memory", "blueDoor"], ["Follow the applause", "tent"], ["Pull a flower from the ground", "voidLobby"]]
  },
  moonlift: {
    title: "Express Elevator to the Moon",
    text: "The elevator has buttons for MOON, SUB-MOON, and CUSTOMER SERVICE. The elevator music knows what you did in the lobby.",
    choices: [["Press MOON", "clock"], ["Press CUSTOMER SERVICE", "caineDesk"], ["Press every button", "chaosEnding"]]
  },
  carousel: {
    title: "Carousel of Career Choices",
    text: "The horses are labeled Accountant, Pirate, Background Object, and Horse. The organ music gets faster whenever you consider adulthood.",
    choices: [["Ride Pirate", "aquarium"], ["Ride Background Object", "mannequin"], ["Play the kazoo", "tent"]]
  },
  redDoor: {
    title: "The Red Door",
    text: "The unsupervised decision coupon works. Behind the door, a giant lever toggles between PLOT and SUBPLOT.",
    choices: [["Pull PLOT", "exitHall"], ["Pull SUBPLOT", "aquarium"], ["Snap the lever in half", "glitchCore"]]
  },
  serverRoom: {
    title: "Server Room",
    text: "Rows of humming cabinets render clouds, carpets, and one extremely detailed spoon. A terminal asks for your emotional password.",
    choices: [["Type 'panic'", "panicRoom", "panic"], ["Type 'friendship'", "yellowDoor"], ["Type '; DROP CIRCUS;'", "glitchCore"]]
  },
  mannequin: {
    title: "Mannequin Symposium",
    text: "Faceless figures debate whether you are real. A vote is called. You are not eligible to participate, but the ballot box is unattended.",
    choices: [["Stuff the ballot box", "trappedEnding"], ["Deliver an inspiring speech", "tent"], ["Stand perfectly still", "blueDoor"]]
  },
  voidLobby: {
    title: "The Void's Waiting Room",
    text: "The void is less empty than advertised. There are magazines, lukewarm water, and a receptionist who has been on break since time began.",
    choices: [["Ring the service bell", "caineDesk"], ["Read a magazine", "trappedEnding"], ["Walk behind reception", "glitchCore"]]
  },
  tent: {
    title: "Main Tent, After Hours",
    text: "Spotlights search the empty seats. The center ring holds three trapdoors: stars, teeth, and a tasteful neutral gray.",
    choices: [["Choose stars", "moonlift"], ["Choose teeth", "caineDesk"], ["Choose tasteful gray", "exitHall"]]
  },
  vents: {
    title: "Ventilation Nation",
    text: "The vents are decorated like a tiny city. Dust bunnies operate a commuter rail and demand exact change.",
    choices: [["Take the rail downtown", "office"], ["Crawl toward fresh air", "blueDoor"], ["Declare yourself mayor", "trappedEnding"]]
  },
  aquarium: {
    title: "Clockwork Aquarium",
    text: "Mechanical fish swim through air. A brass whale offers to carry you across the tank if you answer one question: 'What color is escape?'",
    choices: [["Cyan", "blueDoor"], ["Yellow", "yellowDoor"], ["The color of bad decisions", "chaosEnding"]]
  },
  clock: {
    title: "Moon Clock",
    text: "The moon is a break room containing a clock with thirteen hands. Moving any hand will change a different hallway below.",
    choices: [["Move the smallest hand", "exitHall"], ["Move all thirteen hands", "chaosEnding"], ["Do not touch time", "memoryGarden"]]
  },
  panicRoom: {
    title: "Certified Panic Room",
    text: "At last: a room designed for your current skill set. A calm voice offers guided screaming, emergency snacks, and a hatch labeled WHEN READY.",
    choices: [["Complete the guided scream", "yellowDoor"], ["Eat every emergency snack", "trappedEnding"], ["Open the hatch immediately", "serverRoom"]]
  },
  caineDesk: {
    title: "The Ringmaster's Desk",
    text: "Caine's desk is somehow larger inside. A performance review praises your initiative and criticizes your escape-oriented attitude.",
    choices: [["Accept a promotion", "assistantEnding"], ["Rewrite the review", "office"], ["Hide beneath the desk", "confettiVault"]]
  },
  blueDoor: {
    title: "The Blue Door",
    text: "Cool daylight leaks around the frame. A warning says REALITY MAY CONTAIN TAXES, WEATHER, AND UNBUFFERED FEELINGS.",
    choices: [["Open it and face reality", "escapeEnding"], ["Return to familiar chaos", "lobby"], ["Knock first", "exitHall"]]
  },
  yellowDoor: {
    title: "The Yellow Door",
    text: "The door opens onto a quiet maintenance tunnel. Exit signs point in contradictory directions, but one casts a real shadow.",
    choices: [["Follow the real shadow", "exitHall"], ["Follow the happiest sign", "tent"], ["Turn off every sign", "abstractedEnding"]]
  },
  confettiVault: {
    title: "Emergency Confetti Vault",
    text: "You are waist-deep in premium confetti. The vault controls celebrations across the circus. One lever reads RELEASE ALL.",
    choices: [["Release a tasteful amount", "office"], ["RELEASE ALL", "chaosEnding"], ["Tunnel through the confetti", "exitHall"]]
  },
  exitHall: {
    title: "The Final Hallway (Allegedly)",
    text: "A real breeze passes through the hall. Ahead: a plain door with no decorations. Behind you: applause and a suspiciously generous job offer.",
    choices: [["Open the plain door", "escapeEnding"], ["Investigate the applause", "caineDesk"], ["Wait for something dramatic", "trappedEnding"]]
  },
  glitchCore: {
    title: "Glitch Core",
    text: "You stand inside a knot of unfinished code. You can delete the walls, duplicate yourself, or pull one loose pixel labeled STRUCTURAL.",
    choices: [["Delete the walls", "escapeEnding"], ["Duplicate yourself repeatedly", "abstractedEnding"], ["Pull the structural pixel", "chaosEnding"]]
  },
  escapeEnding: {
    title: "Ending: Escape",
    text: "The door opens. There is wind, uneven sunlight, and a sky that does not loop. You step through before the circus can add a tutorial.",
    ending: "escape", symbol: "🌤️"
  },
  trappedEnding: {
    title: "Ending: Trapped Forever",
    text: "The room resets with a cheerful ding. A loyalty card appears in your hand: only 9,999 more visits until a free beverage.",
    ending: "trapped", symbol: "🔒"
  },
  abstractedEnding: {
    title: "Ending: Abstracted",
    text: "Your thoughts become polygons. Your polygons become louder polygons. Somewhere, an error message wins employee of the month.",
    ending: "abstracted", symbol: "🕳️"
  },
  assistantEnding: {
    title: "Ending: Caine's Assistant",
    text: "Congratulations! You now have a hat, a clipboard, and authority over three kinds of confetti. Vacation requests are fictional.",
    ending: "assistant", symbol: "🎩"
  },
  chaosEnding: {
    title: "Ending: Chaos",
    text: "Every lever activates. The moon becomes a stapler. The stapler becomes mayor. Against all odds, the parade is excellent.",
    ending: "chaos", symbol: "💥"
  }
};

const sceneCard = document.querySelector("#scene-card");
const sceneLabel = document.querySelector("#scene-label");
const sceneTitle = document.querySelector("#scene-title");
const sceneCopy = document.querySelector("#scene-copy");
const choicesNode = document.querySelector("#scene-choices");
const progressBar = document.querySelector("#escape-progress");
const progressText = document.querySelector("#scene-progress");

function showScene(id) {
  const scene = scenes[id] || scenes.lobby;
  const saved = CircusAchievements.recordScene(id);
  sceneLabel.textContent = scene.ending ? "Journey complete" : "Current scene";
  sceneTitle.textContent = scene.title;
  sceneCopy.textContent = scene.text;
  choicesNode.innerHTML = "";
  sceneCard.classList.toggle("ending", Boolean(scene.ending));

  if (scene.ending) {
    sceneCopy.insertAdjacentHTML("afterbegin", `<div class="ending-symbol" aria-hidden="true">${scene.symbol}</div>`);
    CircusAchievements.recordEnding(scene.ending);
    const restart = document.createElement("button");
    restart.className = "btn btn-pink";
    restart.type = "button";
    restart.textContent = "Try Another Route";
    restart.addEventListener("click", resetGame);
    choicesNode.appendChild(restart);
  } else {
    scene.choices.forEach(([label, next, special]) => {
      const button = document.createElement("button");
      button.className = "btn btn-ghost choice-btn";
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        if (special === "panic") CircusAchievements.unlock("professional_panicker");
        if (special === "forbidden") CircusAchievements.unlock("forbidden_button");
        sceneCard.classList.add("glitching");
        setTimeout(() => {
          sceneCard.classList.remove("glitching");
          showScene(next);
          sceneCard.focus({ preventScroll: true });
        }, 260);
      });
      choicesNode.appendChild(button);
    });
  }

  const visited = saved.stats.scenesVisited.length;
  progressBar.style.width = `${Math.min(100, (visited / 25) * 100)}%`;
  progressText.textContent = `${visited} of ${Object.keys(scenes).length} scenes explored`;
}

function resetGame() {
  CircusAchievements.update((state) => { state.escapeScene = "lobby"; });
  showScene("lobby");
}

document.querySelector("#restart").addEventListener("click", resetGame);
sceneCard.tabIndex = -1;
showScene(CircusAchievements.state().escapeScene || "lobby");
