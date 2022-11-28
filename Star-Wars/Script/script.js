var music = document.getElementById("music");
music.volume = 0.3;
function mute() {
    var aud = document.getElementById("music");
    if (aud.muted == false) {
        aud.muted = true;
    }
    else {
        aud.muted = false;
    }
}
var soundOne = document.getElementById("audioOne");
soundOne.volume = 0.2;
var soundTwo = document.getElementById("audioTwo");
soundTwo.volume = 0.2;
var soundThree = document.getElementById("audioThree");
soundThree.volume = 0.2;
var soundFour = document.getElementById("audioFour");
soundFour.volume = 0.2;
var soundFive = document.getElementById("audioFive");
function playSoundOne() {
    soundOne.play();
}
function pauseSoundOne() {
    soundOne.pause();
    soundOne.currentTime = 0;
}
function playSoundTwo() {
    soundTwo.play();
}
function pauseSoundTwo() {
    soundTwo.pause();
    soundTwo.currentTime = 0;
}
function playSoundThree() {
    soundThree.play();
}
function pauseSoundThree() {
    soundThree.pause();
    soundThree.currentTime = 0;
}
function playSoundFour() {
    soundFour.play();
}
function pauseSoundFour() {
    soundFour.pause();
    soundFour.currentTime = 0;
}
function playSoundFive() {
    soundFive.play();
}
function pauseSoundFive() {
    soundFive.pause();
    soundFive.currentTime = 0;
}
