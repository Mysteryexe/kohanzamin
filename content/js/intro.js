const timeline = document.getElementsByTagName("timeline")[0];
const personImg = timeline.getElementsByClassName("personImg")[0];

function intro() {
  let distance = window.scrollY;
  let passed = (distance + window.innerHeight) / timeline.offsetHeight;
  if (distance + window.innerHeight >= timeline.offsetHeight) {
    timeline.classList.add("done");
  } else {
    timeline.classList.remove("done");
  }
  personMove(distance);
}

function personMove(distance) {
  distance = parseInt(distance / 100);
  personImg.src = `/new/frame${distance % 7}.png`;
}
window.addEventListener("scroll", function () {
  intro();
});
