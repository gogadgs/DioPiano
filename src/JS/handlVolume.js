
import { audio } from './playTune.js';

export const handleVolume = (e)=>{
    audio.volume = e.target.value
        console.log(e.target.value);
}
