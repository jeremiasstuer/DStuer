// Read more & Read less //
var hidetextbtns = document.getElementById("hidetextbtn");
var hidetext = document.getElementById("hidetext");
hidetextbtns === null || hidetextbtns === void 0 ? void 0 : hidetextbtns.addEventListener("click", toggleText);
function toggleText() {
    hidetext === null || hidetext === void 0 ? void 0 : hidetext.classList.toggle("show");
    if (hidetext === null || hidetext === void 0 ? void 0 : hidetext.classList.contains("show")) {
        hidetextbtns.innerHTML = "Leer menos!";
    }
    else {
        hidetextbtns.innerHTML = "Leer m\u00E1s!";
    }
}
// Validación de formulario //
var formElement = document.getElementById("form");
var nombres = document.getElementById("nombre");
var apellidos = document.getElementById("apellido");
var emails = document.getElementById("email");
var avisos = document.getElementById("warnings");
formElement.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    var nombrevalue = (nombres.value);
    var apellidovalue = (apellidos.value);
    var emailvalue = (emails.value);
    var emailvalidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (nombrevalue.length < 2) {
        console.log("El nombre no es valido");
    }
    else {
        console.log("Tu email es: ".concat(nombrevalue));
    }
    if (apellidovalue.length < 2) {
        console.log("El apellido no es valido");
    }
    else {
        console.log("Tu apellido es: ".concat(apellidovalue));
    }
    if (!emailvalidation.test(emailvalue)) {
        console.log("El email no es valido");
    }
    else {
        console.log("Tu email es: ".concat(emailvalue));
    }
    formElement.reset();
}
