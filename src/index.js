import {loadPicture} from "./lib/photoloader";
import {displayPicture} from "./lib/ui";
import {load, next, prev, last, first} from "./lib/gallery";
import {display_galerie} from "./lib/gallery_ui";

export async function getPicture(id) {
  const pictureInformations = await loadPicture(id);
  displayPicture(pictureInformations);
}


document.querySelector('#loadGallery').addEventListener('click', async () => {
  const galerie = await load();
  display_galerie(galerie);
});


document.querySelector('#nextButton').addEventListener('click', async () => {
  const gallery = await next();
  display_galerie(gallery);
});

document.querySelector('#prevButton').addEventListener('click', async () => {
  const gallery = await prev();
  display_galerie(gallery);
});

document.querySelector('#firstButton').addEventListener('click', async () => {
  const gallery = await first();
  display_galerie(gallery);
});

document.querySelector('#lastButton').addEventListener('click', async () => {
  const gallery = await last();
  display_galerie(gallery);
});

getPicture(window.location.hash ? window.location.hash.substr(1): 105);

