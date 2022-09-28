//Animation

const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondElement = document.getElementById("second_hand");

function animate() {
  const date = new Date();

  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

//Afficher date

var dtJour = new Date();

document.getElementById("Today").innerHTML = getDateCompact(dtJour);

document.getElementById("dtJour").innerHTML = dateFunction(dtJour);

document.getElementById("dtClear").innerHTML = dateClear();

document.getElementById("dtDay").innerHTML = dateDay();

function dateFunction(dtJour) {
  return dtJour;
}

function dateDay(){
  return dtJour.getDay();
}

function dateClear(){
  return dtJour.getDate() + " " + dtJour.getMonth() + " " + dtJour.getFullYear();
}

document.getElementById("dtCompact").innerHTML = getDateCompact(dtJour);

function getDateCompact(dt) {
  var Y = dt.getFullYear();
  var M = dt.getMonth() + 1; //on rajoute un pour être sûr d'avoir le bon mois car 0 correspond à Janvier.

  if (M < 10) {
    M = "0" + M;
  } //Pour pouvoir afficher le 0 devant les neuf premier mois et obtenir 01 , 02 ... etc
  var D = dt.getDate();

  if (D < 10) {
    D = "0" + D;
  }
  return D + "/" + M + "/" + Y;
}


var jours = Array(
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
);

var mois = Array(
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
);


document.getElementById("dtFullDate").innerHTML= getFullDate();

function getFullDate(){
  return jours[dtJour.getDay()] + " " + dtJour.getDate() + " " + mois[dtJour.getMonth()] + " " + dtJour.getFullYear();
};


document.getElementById("dtHour").innerHTML = getHour();

function getHour(){
  return dtJour.getHours() + " h " + dtJour.getMinutes() + " m " + dtJour.getSeconds() + " s " + dtJour.getMilliseconds() + " ms";
}


function printHorloge() {
  if (document.getElementById) {
    updadteHorloge();
  }
}

function updadteHorloge(){
  var dt = new Date();
  var h = dt.getHours();

  if (h < 10) {
    h = "0" + h;
  }
  var m = dt.getMinutes();

  if (m < 10) {
    m = "0" + m;
  }
  var s = dt.getSeconds();

  if (s < 10) {
    m = "0" + s;
  }
  document.getElementById("instantTime").innerHTML = h + "h" + m + "m" + s + "s";

  setTimeout("updadteHorloge()", 1000)
};

printHorloge();

