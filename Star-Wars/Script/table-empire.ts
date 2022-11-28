const music = document.getElementById("music") as HTMLAudioElement;
music.volume = 0.3
function mute() {
const aud = document.getElementById("music") as HTMLAudioElement;
if (aud.muted == false) {aud.muted = true}
else {aud.muted = false}
}

