import { playTune,mapedKeys } from './playTune.js';
import { handleVolume } from './handlVolume.js';
import { showHideKeys } from './showHideKeys.js';



export const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");




pianoKeys.forEach((key)=>{
    
    key.addEventListener("click",()=>{
        playTune(key.dataset.key);
        mapedKeys.push(key.dataset.key);
       
    })
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (!mapedKeys.includes(key)) {
        mapedKeys.push(key);
       
    };
    playTune(key);
});


volumeSlider.addEventListener("input",handleVolume);

keysCheck.addEventListener("click",showHideKeys);