import { NAV_TOOGLER, NAV_ELEMENT, NAV_CONTENT, DROPDOWN_TOGGLERS } from "./elements.js";

function toggleMobilNav(){
    NAV_TOOGLER.classList.toggle('change')
    NAV_ELEMENT.classList.toggle('visible')
}

export function setUpNav(){
    NAV_TOOGLER.addEventListener('click', toggleMobilNav)
    NAV_ELEMENT.addEventListener('click', toggleMobilNav)
}

export function setUpDropdowns(){
    NAV_CONTENT.forEach(el => {
        el.addEventListener('click', (e)=>e.stopPropagation())
    })
    
    DROPDOWN_TOGGLERS.forEach( toggler => {
        const btn = toggler.querySelector('button')
        let isVisible = false
        
        function addVisible(){
            if(!isVisible){
                toggler.classList.add('visible')
                isVisible= true
            }
        }
        
        function removeVisible(){
            if(isVisible){
                toggler.classList.remove('visible')
                isVisible = false
            }
        }

        toggler.addEventListener('mouseover', addVisible)
        toggler.addEventListener('mouseleave', removeVisible)

    })
}