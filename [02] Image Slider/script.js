const Container = document.querySelector('.container');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const upButton = document.querySelector('.up-btn');
const downButton = document.querySelector('.down-btn');
const slidesCount = rightSlider.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlider.style.top = `-${(slidesCount-1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = Container.clientHeight;

  

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesCount - 1) {
      activeSlideIndex = 0;
    }
  }
  else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1; 
    }
  }
  console.log(activeSlideIndex);

  rightSlider.style.transform = `translateY(-${(activeSlideIndex) * sliderHeight}px)`;
  leftSlider.style.transform = `translateY(${(activeSlideIndex) * sliderHeight}px)`;
  


}

// Pressing up and down keys to trigger the slides

document.addEventListener("keyup", (x) => {
  let keyPressed = x.key;

  if (keyPressed === "ArrowUp") {
    changeSlide('up');
  }
  else if (keyPressed === "ArrowDown") {
    changeSlide('down');
  }
})