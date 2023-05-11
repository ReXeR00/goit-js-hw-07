import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`)
const gallery=createGallery(galleryItems)

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
     return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
 }).join(``)    
}
// console.log(createGallery(galleryItems))

galleryList.insertAdjacentHTML(`afterbegin`, gallery)

galleryList.addEventListener(`click`, new SimpleLightbox('.gallery a', { captionsData: `alt`, captionPosition: `bottom`, captionDelay: 250 })
);