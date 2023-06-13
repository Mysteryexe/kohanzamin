const card = document.getElementsByTagName("cards")[0]
const cards = document.getElementsByTagName("card")
const page = window.location.hostname

function gotoPlace(place){
    if (place.classList == "active"){
        place.classList.remove("active")
        window.scrollTo(0,cardsY)
        // (window.scrollY + (window.innerHeight/2)) / timeline.offsetHeight;
    }else{
        var name=place.getAttribute("value")
        place.classList.add("active");
        console.log(name, "clicked")
        window.location.hash = `#${name}`
        console.log(window.scrollY)
        cardsY = window.scrollY
        setTimeout(() => {
            card.style.transition = "unset"
          }, 800);
    }
}

window.addEventListener("scroll", function () {
    intro();
});
  