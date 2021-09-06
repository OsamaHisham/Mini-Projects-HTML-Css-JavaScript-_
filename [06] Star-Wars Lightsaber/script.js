const blade = document.querySelector ('.blade');
// const sound =  new Audio('./Audio/Lightsaber_Turn On_Sound_Effect.mp3');
const sound =  new Audio('http://soundfxcenter.com/movies/star-wars/8d82b5_Lightsaber_Igniting_Sound_Effect.mp3');

const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const purple = document.getElementById('purple');
const red = document.getElementById('red');


document.querySelector('.switch-btn').addEventListener('click', () => {

  blade.classList.toggle('open-blade');

  if (blade.classList.contains('open-blade') != false) {  
    sound.play();
  }



  if (green.checked) {
  document.documentElement.style.setProperty('--blade-hue', '120');
  }
  else if (blue.checked) {
    document.documentElement.style.setProperty('--blade-hue', '195');
  }
  else if (yellow.checked) {
    document.documentElement.style.setProperty('--blade-hue', '60');
  }
  else if (purple.checked) {
    document.documentElement.style.setProperty('--blade-hue', '290');
  }
  else if (red.checked) {
    document.documentElement.style.setProperty('--blade-hue', '360');
  }


});


const allButtons = document.querySelectorAll('[name="color"]');

allButtons[0].addEventListener('click', () => {

  document.documentElement.style.setProperty('--blade-hue', '120');
})
allButtons[1].addEventListener('click', () => {

  document.documentElement.style.setProperty('--blade-hue', '195');
})
allButtons[2].addEventListener('click', () => {

  document.documentElement.style.setProperty('--blade-hue', '60');
})
allButtons[3].addEventListener('click', () => {

  document.documentElement.style.setProperty('--blade-hue', '290');
})
allButtons[4].addEventListener('click', () => {

  document.documentElement.style.setProperty('--blade-hue', '360');
})



