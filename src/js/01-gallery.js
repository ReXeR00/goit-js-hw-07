import { galleryItems } from './gallery-items.js';
// Change code below this line

// 

const listGallery = document.querySelector(`.gallery`);
const gallery=createGallery(galleryItems)

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>{
   return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join(``)
}

// console.log(createGallery(galleryItems))
listGallery.insertAdjacentHTML(`afterbegin`, gallery)

listGallery.addEventListener(`click`, onPictureClick);

function onPictureClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains(`gallery__image`)) {
    return
  }
  // console.log(event.target)
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
    onShow: (instance) => {window.addEventListener(`keydown`, onModalCloseByEsc)},
    onClose: (instance) => {     window.removeEventListener(`keydown`, onModalCloseByEsc)}
  })
  
  instance.show()

  function onModalCloseByEsc({ code }) {
    if (code === `Escape`) {
      instance.close()
    }
  }
}