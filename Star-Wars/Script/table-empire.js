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
