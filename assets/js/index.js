window.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.piano-key[data-letter="${e.code[3]}"]`);
  // console.log(key);
  if (!audio) {
    return;
  }
  audio.play();
  audio.currentTime = 0;
  key.classList.add("piano-key-active");
});

window.addEventListener("mousedown", mouseOver);
window.addEventListener("mouseup", function () {
  const keys = document.querySelectorAll(".piano-key");
  //   console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    keys[i].removeEventListener("mouseover", keyPlay);
  }
});

function mouseOver() {
  // console.log(event);
  const keys = document.querySelectorAll(".piano-key");
  //   console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("mouseover", keyPlay);
  }
}

function keyPlay() {
  console.log(event);
  const audio = document.querySelector(
    `audio[data-key="${event.toElement.dataset.key}"]`
  );
  const key = event.target;
  //   console.log(event.target);
  if (!audio) {
    return;
  }
  audio.play();
  audio.currentTime = 0;
  key.classList.add("piano-key-active");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("piano-key-active");
}

const keys = document.querySelectorAll(".piano-key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
