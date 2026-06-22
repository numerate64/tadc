(() => {
  const render = (root) => {
    if (window.twemoji && root) {
      window.twemoji.parse(root, { folder: "svg", ext: ".svg" });
    }
  };

  const start = () => {
    const style = document.createElement("style");
    style.textContent =
      "img.emoji{height:1em;width:1em;margin:0 .06em;vertical-align:-.12em}";
    document.head.append(style);
    render(document.body);

    let queued = false;
    new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        render(document.body);
      });
    }).observe(document.body, { childList: true, characterData: true, subtree: true });
  };

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", start, { once: true })
    : start();
})();
