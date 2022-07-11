addEventListener("keydown", playSound);
addEventListener("keyup", removeStyles);

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!key) {
    console.error("Invalid Input! Try Again...");
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeStyles(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"`);
  if (!key) return;
  key.classList.remove("playing");
}
