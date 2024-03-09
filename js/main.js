const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio is "a" tunes

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; //passing audio in key base
    audio.play(); //playing audio
    

    const clickedKey = document.querySelector(`[data-key="${key}"]`);//getting clicked key element
    clickedKey.classList.add("active"); //adding active class to the clicked the key 
    setTimeout(() => {  //removing active class after 150ms from the clicked key elements
        clickedKey.classList.remove("active");
    },150);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); //adding data-key value to the allkeys array
    //calling playTune fnction with passing data-key value as an argent
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const pressedkey = (e) => {
    //if the pressed key is tn the allkeys arrays, only call then playtune function
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);