import {loadPicture} from "./lib/photoloader";
import {displayPicture} from "./lib/ui";

export async function getPicture(id) {
  const pictureInformations = await loadPicture(id);
  displayPicture(pictureInformations);
}

getPicture(window.location.hash ? window.location.hash.substr(1): 105);

