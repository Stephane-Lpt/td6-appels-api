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
  const galerie = await next();
  display_galerie(galerie);
});

document.querySelector('#prevButton').addEventListener('click', async () => {
  const galerie = await prev();
  display_galerie(galerie);
});

document.querySelector('#firstButton').addEventListener('click', async () => {
  const galerie = await first();
  display_galerie(galerie);
});

document.querySelector('#lastButton').addEventListener('click', async () => {
  const galerie = await last();
  display_galerie(galerie);
});

getPicture(window.location.hash ? window.location.hash.substr(1): 105);

