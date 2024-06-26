import { templateElement, picturesContainerElement, templateImgElement, templateLikesElement, templateCommentsElement } from './selectors-key';
import { renderElements } from './util';
import { showPhotoById } from './gallery';

const PICTURE_CLASS = '.picture';
const THUMBNAIL_KEY = 'thumbnail';

const getThumbnail = ({ id, url, description, likes , comments }) => {
  templateImgElement.dataset.id = id;
  templateImgElement.dataset.key = THUMBNAIL_KEY;
  templateImgElement.src = url;
  templateImgElement.alt = description;
  templateLikesElement.textContent = likes.toString();
  templateCommentsElement.textContent = comments.length.toString();
  return templateElement.cloneNode(true);
};

const onPicturesContainerElementClick = (evt) => {
  if (evt.target.dataset.key === THUMBNAIL_KEY) {
    showPhotoById(Number(evt.target.dataset.id));
  }
};

const clearThumbnails = () => {
  picturesContainerElement.querySelectorAll(PICTURE_CLASS).forEach((pictureElement) => pictureElement.remove());
};

const renderThumbnails = (photos) => {
  clearThumbnails();
  renderElements(photos, getThumbnail, picturesContainerElement);
  picturesContainerElement.addEventListener('click', onPicturesContainerElementClick);
};

export { renderThumbnails };
