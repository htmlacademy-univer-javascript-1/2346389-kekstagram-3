import { generatePhotos } from './data.js';
import { render } from './miniatures.js';
import './form.js';
import './validate.js';

render(generatePhotos(25));
