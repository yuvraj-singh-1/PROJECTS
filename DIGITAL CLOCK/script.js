"use strict";
let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let period = document.querySelector(".event");

const clock = () => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  let timePeriod = hour > 12 ? "PM" : "AM";
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hrs.innerHTML = hour;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  period.innerHTML = timePeriod;
};
setInterval(clock, 1000);
