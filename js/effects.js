import { resetScale } from './size.js';

const effects = document.querySelectorAll('.effects__radio');
const picture = document.querySelector('.img-upload__preview');

for (let i = 0; i < effects.length; i++) {
  const effect = effects[i];
  effect.addEventListener('change', changeEffects);
}

function changeEffects(evt) {
  for (const className of picture.classList) {
    if (className.startsWith('effects__preview--')) {
      picture.classList.remove(className);
    }
  }
  picture.classList.add(`effects__preview--${evt.target.value}`);
  resetScale();
  setSlider(evt.target.value);
}


//слайдер

export const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.classList.add('visually-hidden');
sliderValue.value = 100;

sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
  currentValuetEffect(sliderValue.value);
});

function setSlider(arg) {
  if (arg === 'none') {
    sliderElement.classList.add('visually-hidden');
    picture.style.filter = '';
  }
  if (arg === 'chrome') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  }
  if (arg === 'sepia') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  }
  if (arg === 'marvin') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    });
  }
  if (arg === 'phobos') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    });
  }
  if (arg === 'heat') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    });
  }
}

function currentValuetEffect(value) {
  for (const className of picture.classList) {
    if (className === 'effects__preview--chrome') {
      picture.style = `filter: grayscale(${value})`;
    }
    if (className === 'effects__preview--sepia') {
      picture.style = `filter: sepia(${value})`;
    }
    if (className === 'effects__preview--marvin') {
      picture.style = `filter: invert(${value}%)`;
    }
    if (className === 'effects__preview--phobos') {
      picture.style = `filter: blur(${value}px)`;
    }
    if (className === 'effects__preview--heat') {
      picture.style = `filter: brightness(${value})`;
    }
  }
}

export function escapeClearEffects() {
  sliderElement.classList.add('visually-hidden');
  for (const className of picture.classList) {
    if (className.startsWith('effects__preview--')) {
      picture.classList.remove(className);
    }
  }
}
