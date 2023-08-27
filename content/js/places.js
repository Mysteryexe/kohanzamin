const card = document.getElementsByTagName("cards")[0];
const cards = document.getElementsByTagName("card");
const page = window.location.hostname;

function gotoPlace(place) {
  var name = place.getAttribute("value");
  var activated = document.getElementsByTagName(name)[0];
  if (place.classList == "active") {
    place.classList.remove("active");
    activated.classList.remove("visible");
    window.scrollTo(0, cardsY);
    // (window.scrollY + (window.innerHeight/2)) / timeline.offsetHeight;
  } else {
    place.classList.add("active");
    window.location.hash = `#${name}`;
    console.log(window.scrollY);
    cardsY = window.scrollY;
    setTimeout(() => {
      card.style.transition = "unset";
    }, 800);
    console.log(activated);
    activated.classList.add("visible");
  }
}

window.addEventListener("scroll", function () {
  intro();
});
