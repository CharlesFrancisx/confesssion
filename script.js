const yesBtn = document.getElementById("yes-btn");
const popUp = document.getElementById("pop-up-cont");
const noBtn = document.getElementById("no-btn");
const confession = document.getElementById("confession");

yesBtn.addEventListener("click", function () {
  popUp.style.display = "flex";
  confession.style.display = "none";
});

noBtn.addEventListener("click", function () {
  const currentWidth = parseInt(window.getComputedStyle(yesBtn).width);
  const currentHeight = parseInt(window.getComputedStyle(yesBtn).height);
  const currentFontSize = parseInt(window.getComputedStyle(yesBtn).height);
  yesBtn.style.width = currentWidth + 30 + "px";
  yesBtn.style.height = currentHeight + 20 + "px";
  yesBtn.style.fontSize = currentFontSize + 20 + "px";
});
