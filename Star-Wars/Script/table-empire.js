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
var buttonsHidde = document.querySelectorAll("button.button2");
buttonsHidde.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var _a;
        if ((_a = btn.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains("hiddePara")) {
            this.previousElementSibling.classList.remove('hiddePara');
            this.textContent = "Ver menos";
        }
        else {
            this.previousElementSibling.classList.add('hiddePara');
            this.textContent = "Conocer Mas";
        }
    });
});
