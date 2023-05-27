// //navbar
// $(".add-nav").load("./content/needed/nav.html");
//footer
// $("add-footer").load("./content/needed/footer.html");

document.getElementsByTagName("body")[0].style.overflow = "hidden";
document.querySelector("wrapper").style.visibility = "hidden";
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("wrapper").style.visibility = "hidden";
    document.querySelector("loader").style.visibility = "visible";
  } else {
    document.querySelector("wrapper").style.visibility = "visible";
    document.querySelector("loader").classList.add("invisible");
    document.getElementsByTagName("body")[0].style.overflow = "visible";
    setTimeout(() => {
      document.querySelector("loader").remove();
    }, 1200);
  }
}
// loading scene js inspired by www.mysteryexe.cf