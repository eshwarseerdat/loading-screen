const background = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

const blurring = function () {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let interval = setInterval(blurring, 30);
