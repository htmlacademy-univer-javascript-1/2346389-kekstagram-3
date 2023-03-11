let getRandom = function (min, max) {
  if (min < 0 || max < 0) {
    console.log('Необходимо использовать только неотрицательные числа');
  }
  if (max<=min) {
    console.log('Максимальная граница диапазона должна быть больше минимальной');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let getLength = function (str, maxLength) {
  if (str !== String(str)) {
    console.log('Вы ввели не строку!');
  }
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
