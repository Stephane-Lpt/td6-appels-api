import Handlebars from "handlebars";
import {BASE_URL} from "./config";
import {loadPicture} from "./photoloader";
import {displayPicture} from "./ui";

export const display_galerie = (galerie) => {
    const source = document.getElementById('galleryTemplate').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({
        photos: galerie.photos.map(photo => ({
            id: photo.photo.id,
            title: photo.photo.titre,
            file: photo.photo.file,
            thumbnail: `${BASE_URL}${photo.photo.thumbnail.href}`,
            original: `${BASE_URL}${photo.photo.original.href}`
        }))
    });

    const galleryElement = document.querySelector('#gallery');
    galleryElement.innerHTML = html;

    const photos = galleryElement.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('click', async () => {
            const photoId = photo.getAttribute('data-photoid');
            const nouvellePhoto = await loadPicture(photoId);
            displayPicture(nouvellePhoto);

            const lightbox = document.querySelector('#lightbox');
            lightbox.style.display = 'block';
            const lightboxContent = document.querySelector('#lightboxContent');
            lightboxContent.innerHTML = `
                <img src="${BASE_URL}${nouvellePhoto.picture.photo.url.href}">
                <div style="color: white; text-align: center; padding: 10px 0;">${photo.title}</div>
            `;
        });
    });
}