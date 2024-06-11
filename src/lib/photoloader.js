import {API_PATH, BASE_URL} from "./config";
const PHOTOS_ENDPOINT = "/photos"


export async function loadResource(uri) {
    try {
        const response = await fetch(`${uri}`, { credentials: 'include' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

export async function loadPicture(idPicture) {
    const picture = await loadResource(`${BASE_URL}${API_PATH}${PHOTOS_ENDPOINT}/${idPicture}`);
    const category = await loadResource(`${BASE_URL}${picture.links.categorie.href}` );
    const comments = await loadResource(`${BASE_URL}${picture.links.comments.href}`);
    let pictureInformations = {picture, category, comments}
    console.log(pictureInformations.category)
    return pictureInformations;
}