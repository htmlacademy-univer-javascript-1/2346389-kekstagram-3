import { isEscapeKey } from './util.js';

const addButton = document.querySelector('#upload-file');
const escapeButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

addButton.addEventListener('change', () => {
  openWindow();
});

escapeButton.addEventListener('click', () => {
  closeWindow();
});


function cleanForm() {
  addButton.value = '';
  hashtag.value = '';
  comment.value = '';
}

const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.addEventListener('keydown', onEscapeKeydown);
}

function closeWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  cleanForm();
}
