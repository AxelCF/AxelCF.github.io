function playSound(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  console.log(key);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

let sounds = Array.from(document.querySelectorAll(".key"));

sounds.forEach((sound) =>
  sound.addEventListener("click", function () {
    let audio = document.querySelector(
      `audio[data-key="${this.getAttribute("data-key")}"]`
    );
    console.log(sound);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    sound.classList.add("playing");
  })
);

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

let keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
