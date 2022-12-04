const music = document.getElementById("music") as HTMLAudioElement;
music.volume = 0.3
function mute() {
const aud = document.getElementById("music") as HTMLAudioElement;
if (aud.muted == false) {aud.muted = true}
else {aud.muted = false}
}

const buttonsHidde = document.querySelectorAll("button.button1");
buttonsHidde.forEach(btn => {
    btn.addEventListener('click', function(){
        if(btn.previousElementSibling?.classList.contains("hiddePara")){
            this.previousElementSibling.classList.remove('hiddePara');
            this.textContent = "Ver menos";
        }else{
            this.previousElementSibling.classList.add('hiddePara');
            this.textContent = "Conocer Mas"
        }
    })
});














