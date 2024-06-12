import {loadResource} from "./photoloader";
import {BASE_URL, API_PATH} from "./config";

let galleryData = null;

export const load = async () => {
    galleryData = await loadResource(`${BASE_URL}${API_PATH}/photos`)
    return galleryData;
}

export async function next() {
    if(galleryData){
        if (galleryData.links.next) {
            galleryData = await loadResource(`${BASE_URL}${galleryData.links.next.href}` );
            console.log(galleryData)
        }
    }
    return galleryData;
}

export async function prev() {
    if(galleryData) {
        if (galleryData.links.prev) {
            galleryData = await loadResource(`${BASE_URL}${galleryData.links.prev.href}`);
        }
    }
    return galleryData;
}

export async function first() {
    if(galleryData) {
        if (galleryData.links.first) {
            galleryData = await loadResource(`${BASE_URL}${galleryData.links.first.href}`);
        }
    }
    return galleryData;
}

export async function last() {
    if(galleryData) {
        if (galleryData.links.last) {
            galleryData = await loadResource(`${BASE_URL}${galleryData.links.last.href}`);
        }
    }
    return galleryData;
}