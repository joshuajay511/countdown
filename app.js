const christmas = '25 December 2022';
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function countdown() {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  day.innerHTML = `${days}`;
  hour.innerHTML = `${hours}`;
  minute.innerHTML = `${minutes}`;
  second.innerHTML = `${seconds}`;
}

countdown();

setInterval(() => {
  countdown()
}, 1000);