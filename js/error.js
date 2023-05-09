function showError(message) {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = '100';
  errorContainer.style.position = 'absolute';
  errorContainer.style.left = '0';
  errorContainer.style.top = '0';
  errorContainer.style.right = '0';
  errorContainer.style.padding = '10px 3px';
  errorContainer.style.fontSize = '30px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'red';

  errorContainer.textContent = message;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, 3000);
}

export function showDownloadError() {
  showError('Не удалось загрузить изображения!');
}

export function showCommentError() {
  showError('Поле комментария не удовлетворяет требованиям!');
}

export function showHashtagError() {
  showError('Поле хэштэга не удовлетворяет требованиям!');
}
