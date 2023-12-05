// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const refs = {
  listGallery: document.querySelector('.gallery'),
};

// refs.listGallery.addEventListener('click', selectImg);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            // data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

refs.listGallery.innerHTML = createMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
