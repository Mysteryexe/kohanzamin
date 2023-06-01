const places = document.getElementsByTagName("card")
const page = window.location.href
function gotoPlace(place){
    var name=place.getAttribute("value")
    console.log(name, "clicked")
    window.location.href = `${page}#${name}`
}