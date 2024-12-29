
import { pianoKeys } from './index.js';

export const showHideKeys = (e)=>{

    pianoKeys.forEach(key => key.classList.toggle("hide"));

}