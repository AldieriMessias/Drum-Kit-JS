'use strict';

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);

}

const show = (sounds) => {
    Object.keys(sounds).forEach(createDiv)
}




const playSound = (letter) =>{
    const audio = new Audio(`./sounds/${sounds[letter]}`);
    audio.play();
}

const addEffect = (letter) => document.getElementById(letter).classList.add('active')

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
}


const activeDiv = (e) => {
    //console.log(e.target.id);
    // console.log(e);
    // let letter = ''
    // if(e.type == 'click'){
    //      letter = e.target.id;
    // }else{
    //      letter = e.key.toUpperCase();
    // }

    const letter = e.type == 'click' ? e.target.id : e.key.toUpperCase();

    const okLetter = sounds.hasOwnProperty(letter);
    if(okLetter){
    addEffect(letter);
    playSound(letter);
    removeEffect(letter);
    }
}

show(sounds);
document.getElementById('container').addEventListener('click', activeDiv)

window.addEventListener('keydown',activeDiv)