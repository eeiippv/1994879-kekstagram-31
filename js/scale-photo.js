import { scaleValueElement, uploadPreviewImgElement } from './selectors-key';

const Scale = {
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
  STEP: 25
};

const getPhotoScale = () => parseInt(scaleValueElement.value, 10);

const setPhotoScale = (value) => {
  scaleValueElement.value = `${value}%`;
  uploadPreviewImgElement.style.transform = `scale(${value / 100})`;
};

const onScaleBiggerClick = () => setPhotoScale(Math.min(Scale.MAX, getPhotoScale() + Scale.STEP));

const onScaleSmallerClick = () => setPhotoScale(Math.max(Scale.MIN, getPhotoScale() - Scale.STEP));

const scaleDefault = () => setPhotoScale(Scale.DEFAULT);

export { onScaleBiggerClick, onScaleSmallerClick, scaleDefault };
