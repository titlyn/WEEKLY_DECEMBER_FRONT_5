import { NAV_TOOGLER, NAV_ELEMENT } from "./elements.js";

function toggleMobilNav(){
    NAV_TOOGLER.classList.toggle('change')
    NAV_ELEMENT.classList.toggle('visible')
}

export function setUpNav(){
    NAV_TOOGLER.addEventListener('click', toggleMobilNav)
}