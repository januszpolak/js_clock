const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours() % 12;

  let hourDeg = hours * 30 + 0.5 * minutes;
  let minDeg = minutes * 6;
  let secDeg = seconds * 6;

  hr.style.transform = "rotate(" + hourDeg + "deg)";
  min.style.transform = "rotate(" + minDeg + "deg)";
  sec.style.transform = "rotate(" + secDeg + "deg)";
};

setInterval(() => {
  setClock();
}, 1000);
