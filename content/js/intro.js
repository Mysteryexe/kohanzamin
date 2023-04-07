const timeline = document.getElementsByTagName("timeline")[0];
const ptrs = document.getElementsByTagName("ptr")

function animateBars(x){
  x =( x / window.innerHeight)* window.innerHeight/10
  for (let i = 0; i < ptrs.length; i++) {
    setTimeout(() => {
      if (i % 2==0){
        ptrs[i].style.backgroundPosition= `0px ${x}px`
      }else{
        ptrs[i].style.backgroundPosition= `${x}px 0px`
      }
    }, 150);
  }
}

function intro() {
  let distance = window.scrollY;
  let passed = (window.scrollY + (window.innerHeight/2)) / timeline.offsetHeight;
  document.documentElement.style.setProperty('--passed', passed );
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
intro();

window.addEventListener("scroll", function () {
  intro();
});
