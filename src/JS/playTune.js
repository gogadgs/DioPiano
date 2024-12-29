export let audio = new Audio("src/tunes/");
export let mapedKeys = [];

export const playTune = (key)=>{
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    console.log(mapedKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
};

export default {playTune,mapedKeys};