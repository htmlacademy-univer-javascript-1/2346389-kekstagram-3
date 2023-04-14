const template = document.querySelector('#picture');
const container = document.querySelector('.pictures');

export const render = (arr) => {

  const pictureFragment = document.createDocumentFragment();

  arr.forEach(({url, likes, comments}) => {
    const picture = template.cloneNode(true).content;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(picture);
  });

  container.appendChild(pictureFragment);

};
