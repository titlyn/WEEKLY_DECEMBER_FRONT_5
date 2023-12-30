import { LOADER } from "./elements.js";

export function setUpLoader(){
    window.addEventListener('load', ()=>{
        LOADER.classList.add('loaded')
    })
}