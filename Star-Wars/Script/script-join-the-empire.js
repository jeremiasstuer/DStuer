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
var form = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario .formulario-input");
inputs.forEach(function (input) {
    input.addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
});
form.addEventListener("submit", function (e) { return handleSubmit(e); });
function handleSubmit(e) {
    e.preventDefault();
    var inputData = new FormData(form);
    var name = inputData.get("nameInput");
    var apellido = inputData.get("lastNameInput");
    var email = document.getElementById("mail");
    var paraNombre = document.getElementById("paraNombre");
    var paraApellido = document.getElementById("paraApellido");
    var paraEmail = document.getElementById("paraMail");
    var regexMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (name !== "") {
        paraNombre.classList.add("paraWrongOk");
    }
    else {
        paraNombre.innerHTML = "El Nombre es invalido";
    }
    if (apellido !== "") {
        paraApellido.classList.add("paraWrongOk");
    }
    else {
        paraApellido.innerHTML = "El Apellido es invalido";
    }
    if (regexMail.test(email.value)) {
        paraEmail.classList.add("paraWrongOk");
    }
    else {
        paraEmail.innerHTML = "El E-mail es invalido";
    }
    if (name !== "" && apellido !== "" && regexMail.test(email.value)) {
        window.location.assign("http://127.0.0.1:3000/index.html");
    }
}
