import { sliderElement } from './effects.js';

const sizeUp = document.querySelector('.scale__control--bigger');
const sizeDown = document.querySelector('.scale__control--smaller');
const changheFieldSize = document.querySelector('.scale__control--value');
const imgSizeChange = document.querySelector('.img-upload__preview');


sizeUp.addEventListener('click', () => {
  const currentValue = parseInt(changheFieldSize.value, 10);
  let newValue = currentValue + 25;
  if (newValue > 100) {
    newValue = 100;
  }
  sliderElement.noUiSlider.set(100);
  changheSize(newValue);
});

sizeDown.addEventListener('click', () => {
  const currentValue = parseInt(changheFieldSize.value, 10);
  let newValue = currentValue - 25;
  if (newValue < 25) {
    newValue = 25;
  }
  sliderElement.noUiSlider.set(100);
  changheSize(newValue);
});

function changheSize(value) {
  changheFieldSize.value = `${value}%`;
  imgSizeChange.style = `transform: scale(${value / 100})`;
}

function resetScale() {
  changheSize(100);
}

export {resetScale};
