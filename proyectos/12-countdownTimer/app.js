// arrays predeterminados months y weekdays
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway"); // me trae el dia de salida
const deadline = document.querySelector(".deadline"); // me trae el deadline
const items = document.querySelectorAll(".deadline-format h4"); // trae las clases de los h4 incluidos en dline-format
// console.log(items); -> veo lo que trae items

// voy a setear de forma dinamica cuando va a ser la fecha del sorteo
let futureDate = new Date(2022, 1, 10, 17, 30, 0); // los meses son index 0 ponemos la fecha del sorteo
// console.log(futureDate);
// voy a sacar todos los datos de futureDate

const year = futureDate.getFullYear(); // para acceder al año
const hours = futureDate.getHours(); // horas
const minutes = futureDate.getMinutes(); // minutos

const month = months[futureDate.getMonth()]; // me trae el mes numero aca entra a jugar nuestro array months
const date = futureDate.getDate();

// para obtener el nombre del dia
const weekday = weekdays[futureDate.getDay()]; // me trae un numero del 0 al 6 y ahi juega mi array weekdays

// defino lo que va a decir en el index en giveaway
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in mili secs
const futureTime = futureDate.getTime(); // representa con un num el dia del sorteo
// console.log(futureTime);

// va a restar el num de la fecha del sorteo con el de la del dia que se consulta
function getRemainingTime() {
  const today = new Date().getTime(); // le pido que me traiga un num que represente el dia actual
  // console.log(today);
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  // si el valor es menor que diez quiero que me lo muestre con un 0 delante
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  // le asigno a items (q es un array [days, hours, minutes, secs]) los valores de values
  // index va a ser igual para items y values
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  // que pasa si t es menor que 0
  if (t < 0) {
    clearInterval(countdown); // importante abajo que definimos countdown antes de llamar a esta funcion
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

/* countdown -> setInterval(function, intervalo) -> le digo que llame a la funcion cada segundo
1s = 1000ms */
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
