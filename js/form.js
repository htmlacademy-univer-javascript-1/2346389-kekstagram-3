import { isEscapeKey } from './util.js';
import { resetScale } from './size.js';
import { resetEffect } from './effects.js';
import { validateComment, validateHashtag } from './validate.js';
import { openUploadError } from './api.js';
import { openUploadSuccess } from './api.js';
import { showCommentError } from './error.js';
import { showHashtagError } from './error.js';
import { pristine } from './validate.js';

const addButton = document.querySelector('#upload-file');
const escapeButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

addButton.addEventListener('change', () => {
  openWindow();
});

escapeButton.addEventListener('click', () => {
  closeWindow(true);
});


function cleanForm() {
  addButton.value = '';
  hashtag.value = '';
  comment.value = '';
  resetEffect();
  resetScale();
}

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow(true);
  }
};

export function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.body.addEventListener('keydown', onEscapeKeydown);
}

export function closeWindow(sure) {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  if (sure) {
    cleanForm();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    fetch('https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          openUploadSuccess();
          closeWindow(true);
          unblockSubmitButton();
        } else {
          openUploadError();
          closeWindow(false);
          unblockSubmitButton();
        }
      })
      .catch(openUploadError);
  }
  if (!validateComment(comment.value)) {
    showCommentError();
  }
  if (!validateHashtag(hashtag.value)) {
    showHashtagError();
  }
});
