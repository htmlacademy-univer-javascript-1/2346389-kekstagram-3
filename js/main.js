function getRandom(min, max) {
  if (min < 0 || max < 0) {
    return('Необходимо использовать только неотрицательные числа');
  }
  if (max<=min) {
    return('Максимальная граница диапазона должна быть больше минимальной');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

getRandom(5, 10);
getRandom(15, 20);

function getLength(str, maxLength) {
  if (str !== String(str)) {
    return('Вы ввели не строку!');
  }
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}

getLength('123', 5);
getLength('123', 2);

function photoNum() {
  const x = getRandom(1, 25);
  return x;
}

function yearNum() {
  const x = getRandom(2000, 2010);
  return x;
}

const generatePhoto = (number) => ({
  id: number,
  url: 'photos/' + photoNum() + '.jpg',
  description: 'Сборная по водному поло ' + yearNum() + 'г.',
  likes: getRandom(15, 200),
  comments: getRandom(0, 200),
});

const data = [];

const generatePhotos = (number) => {
  for(let i = 1; i <= number; i++) {
    data[i] = generatePhoto(i);
    // eslint-disable-next-line no-console
    console.log(data[i]);
  }
};

// eslint-disable-next-line no-console
generatePhotos(25);
