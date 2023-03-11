function getRandom (min, max) {
  if (min < 0 || max < 0) {
    return('Необходимо использовать только неотрицательные числа');
  }
  if (max<=min) {
    return('Максимальная граница диапазона должна быть больше минимальной');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getLength (str, maxLength) {
  if (str !== String(str)) {
    return('Вы ввели не строку!');
  }
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
