import { getPhotos } from './data.js';
import { showDownloadError } from './error.js';
import { render } from './miniatures.js';
import './form.js';
import './validate.js';
import './size.js';
import './effects.js';

getPhotos(render, showDownloadError);
