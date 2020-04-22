function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function closePopup(id) {
  let overlay = document.getElementById("overlay-" + id);
  document.getElementById("body").classList.remove("stop-scrolling");
  overlay.style.width = "0vw";
  document.getElementById("overlay-button-" + id).style.opacity = "0";
  await sleep(700);
  overlay.style.zIndex = "-3";
}

async function openPopup(id) {
  let overlay = document.getElementById("overlay-" + id);
  overlay.style.zIndex = "1000";
  overlay.style.width = "100vw";
  overlay.style.opacity = "1";
  document.getElementById("overlay-button-" + id).style.opacity = "1";
  await sleep(700);
  document.getElementById("body").classList.add("stop-scrolling");
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;

  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    for (const x of Array(4).keys()) {
      closePopup(x + 1);
    }
  }
};