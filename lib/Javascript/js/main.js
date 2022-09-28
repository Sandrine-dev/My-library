//Navigation
function myFunction() {
  var nav = document.getElementById("MyTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

window.onscroll = function () {
  fixed();
};
var navbar = document.getElementById("MyTopnav");
var sticky = navbar.offsetTop;

function fixed() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixNavigation");
  } else {
    navbar.classList.remove("fixNavigation");
  }
}

  function toggleDiv(divId) {
      $("#"+divId).toggle();
      $('.toggle').not($("#"+divId)).hide();
  }
