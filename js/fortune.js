/* Date-seeded fortune: stable for the user's entire local calendar day. */
const today = new Date();
const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

function hashDate(text) {
  let hash = 2166136261;
  for (const character of text) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

const fortune = CIRCUS_DATA.fortunes[hashDate(dateKey) % CIRCUS_DATA.fortunes.length];
document.querySelector("#fortune-text").textContent = fortune;
document.querySelector("#fortune-date").textContent = today.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
document.querySelector("#copy-fortune").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(`My Daily Circus Fortune: “${fortune}”`);
    document.querySelector("#fortune-status").textContent = "Fortune copied. It is now somebody else's problem too.";
  } catch {
    document.querySelector("#fortune-status").textContent = "The clipboard rejected destiny.";
  }
});
