import { getRandom } from './util.js';

const generatePhoto = (number) => ({
  id: number,
  url: `photos/${  photoNum()  }.jpg`,
  description: `Сборная по водному поло ${  yearNum()  }г.`,
  likes: getRandom(15, 200),
  comments: getRandom(0, 200),
});

export const generatePhotos = (number) => {
  const data = [];
  for (let i = 0; i < number; i++) {
    data[i] = generatePhoto(i + 1);
  }
  return data;
};

function photoNum() {
  const x = getRandom(1, 25);
  return x;
}

function yearNum() {
  const x = getRandom(2000, 2010);
  return x;
}
