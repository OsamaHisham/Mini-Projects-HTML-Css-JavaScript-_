const background = document.querySelector('.bg');
const lodingPercentage = document.querySelector('.loading-text');

let load = 0;

// Function for changing the loading percentage + blur of the background.

// Interval for running the function:
let percent = setInterval(blurPercentage, 32);

function blurPercentage () {
  load++;
  
  if(load > 99) {
    clearInterval(percent);
  }
  
  console.log(load);
  
  lodingPercentage.innerText = `${load}%`;
  lodingPercentage.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}