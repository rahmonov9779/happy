const stage = document.querySelector(".envelope-wrap");
const sealButton = document.querySelector(".seal-button");
const replayButton = document.querySelector(".replay-button");

let opened = false;

function openEnvelope() {
  if (opened) return;
  opened = true;
  stage.classList.add("is-open");
  document.body.classList.add("play-mode");
  replayButton.textContent = "Повторить сцену";
}

function replayScene() {
  if (!opened) {
    openEnvelope();
    return;
  }

  stage.classList.remove("is-open");
  document.body.classList.remove("play-mode");
  replayButton.textContent = "Смотреть сцену";

  window.setTimeout(() => {
    stage.classList.add("is-open");
    document.body.classList.add("play-mode");
    replayButton.textContent = "Повторить сцену";
  }, 60);
}

sealButton.addEventListener("click", openEnvelope);
replayButton.addEventListener("click", replayScene);

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    if (document.activeElement === sealButton) {
      openEnvelope();
    }
  }
});
