import Handlebars from "handlebars";
import {BASE_URL} from "./config";
export function displayPicture(pictureInformations) {
    const source = document.getElementById('photoTemplate').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({
        id: pictureInformations.picture.photo.id,
        src: `${BASE_URL}${pictureInformations.picture.photo.url.href}`,
        titre: pictureInformations.picture.photo.titre,
        description: pictureInformations.picture.photo.descr,
        type: pictureInformations.picture.photo.type,
        defX: pictureInformations.picture.photo.width,
        defY: pictureInformations.picture.photo.height,
        categorie: pictureInformations.category.categorie.nom,
        commentaires: pictureInformations.comments.comments.map(commentaire => `${commentaire.pseudo} : ${commentaire.content}`)
    });

    const photoElement = document.querySelector('#la_photo');
    photoElement.innerHTML = html;
}
