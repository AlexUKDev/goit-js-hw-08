// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainerRef = document.querySelector('div.gallery');

function createHtmlTamplate({preview, original, description }) {
  let htmlTamplate = 
    `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `;
  
  return htmlTamplate;
}

function renderFullTamplate() {
   const fullTamplate = galleryItems.map((item)=> {
    return createHtmlTamplate(item);
  }).join('');

  galleryContainerRef.insertAdjacentHTML('beforeend', fullTamplate);
}

renderFullTamplate();

galleryContainerRef.addEventListener('click', onImgClick)


let gallery = new SimpleLightbox ('.gallery a',{ 
  captionType:'attr',
  captionsData: "alt", 
  captionDelay: 250 
});

function onImgClick(e){
  // отменяем дефолтное поведение ссылок
  e.preventDefault();
  //  фильтр цели делигации
  if (e.target.nodeName !== "IMG"){
    return
  }
  // console.log(e.target)

  //   // получаем ссылку большого размера для отображения в галерее
  // let originalImgUrl = e.target.dataset.source;

gallery.on('show.simplelightbox', function () {
	// Do something…
});
}