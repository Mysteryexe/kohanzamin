const timeline = document.getElementsByTagName("timeline")[0];
const ptrs = document.getElementsByTagName("ptr")

function animateBars(x){
  x =( x / window.innerHeight)* window.innerHeight/10
  setTimeout(() => {
    ptrs[0].style.backgroundPosition= `0% ${x}px`
    ptrs[1].style.backgroundPosition= `0% ${x}px`
    ptrs[2].style.backgroundPosition= `${x}px 0%`
    ptrs[3].style.backgroundPosition= `${x}px 0%`
  }, 20);

}

function intro() {
  let distance = window.scrollY;
  let passed = (distance + window.innerHeight) / timeline.offsetHeight;
  if (distance + window.innerHeight >= timeline.offsetHeight) {
    timeline.classList.add("done");
  } else {
    timeline.classList.remove("done");
    animateBars(distance);
  }
  // personMove(distance);
}

// function personMove(distance) {
//   distance = parseInt(distance / 100);
//   personImg.src = `/new/frame${distance % 7}.png`;
// }

window.addEventListener("scroll", function () {
  intro();
});
