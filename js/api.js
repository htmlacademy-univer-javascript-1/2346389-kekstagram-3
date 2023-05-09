import { isEscapeKey } from './util.js';
import { openWindow } from './form.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessage.querySelector('.success__button');
const errorButton = errorMessage.querySelector('.error__button');

const onEscapeKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadSuccess();
  }
};

const onEscapeKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadError();
  }
};

export function openUploadSuccess(){
  document.addEventListener('click', closeUploadSuccess);
  document.body.addEventListener('keydown', onEscapeKeydownSuccess);
  successButton.addEventListener('click', closeUploadSuccess);
  document.body.append(successMessage);
  successMessage.classList.remove('hidden');
}

export function closeUploadSuccess(){
  document.removeEventListener('keydown', onEscapeKeydownSuccess);
  document.removeEventListener('click', closeUploadSuccess);
  successMessage.classList.add('hidden');
}

export function openUploadError(){
  document.addEventListener('click', closeUploadError);
  document.body.addEventListener('keydown', onEscapeKeydownError);
  errorButton.addEventListener('click', closeUploadError);
  document.body.append(errorMessage);
  errorMessage.classList.remove('hidden');
}

export function closeUploadError(){
  document.removeEventListener('keydown', onEscapeKeydownError);
  document.removeEventListener('click', closeUploadError);
  errorMessage.classList.add('hidden');
  openWindow();
}
