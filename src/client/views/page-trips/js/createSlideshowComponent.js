import fetchImageData from './fetchImageData';

const createSlideshowComponent = (trip, i) => {
  // Handles slideShow components
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const preview = document.createElement('img');
  fetchImageData(trip).then((result) => {
    if (result.hits[0]) {
      Object.assign(preview, {
        src: `${result.hits[0].previewURL}`,
        className: 'card-preview',
        alt: `an image of ${trip.city}`,
      });
    }
  });
  preview.setAttribute('data-previewindex', `${i}`);
  card.appendChild(preview);
  return card;
};

export default createSlideshowComponent;
