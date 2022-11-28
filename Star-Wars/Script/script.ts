
const music = document.getElementById("music") as HTMLAudioElement;
music.volume = 0.3
function mute() {
const aud = document.getElementById("music") as HTMLAudioElement;
if (aud.muted == false) {aud.muted = true}
else {aud.muted = false}
}

const soundOne = document.getElementById("audioOne") as HTMLAudioElement;
soundOne.volume = 0.2; 
const soundTwo = document.getElementById("audioTwo") as HTMLAudioElement;
soundTwo.volume = 0.2;
const soundThree = document.getElementById("audioThree") as HTMLAudioElement; 
soundThree.volume = 0.2;
const soundFour = document.getElementById("audioFour") as HTMLAudioElement;
soundFour.volume = 0.2;
const soundFive = document.getElementById("audioFive") as HTMLAudioElement;

function playSoundOne() {
  soundOne.play();
  }
  
function pauseSoundOne(){
  soundOne.pause();
  soundOne.currentTime = 0;
}

function playSoundTwo() {
  soundTwo.play();
}
function pauseSoundTwo(){
  soundTwo.pause();
  soundTwo.currentTime= 0;
}

function playSoundThree() {
  soundThree.play();
 }
function pauseSoundThree(){
  soundThree.pause();
  soundThree.currentTime= 0;
}

function playSoundFour() {
  soundFour.play();
}
function pauseSoundFour(){
  soundFour.pause();
  soundFour.currentTime= 0;
}
 
function playSoundFive() {
  soundFive.play();
}
function pauseSoundFive(){
  soundFive.pause();
  soundFive.currentTime= 0;
  }
