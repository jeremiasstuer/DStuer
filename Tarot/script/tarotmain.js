// Boton Menu
var toggle = document.querySelector('.toggle');
var links = document.querySelector('.links');
toggle.addEventListener('click', function () {
    toggle.classList.toggle('rotate');
    links.classList.toggle('active');
});
//Boton mostrar cartas
var textBtn = document.getElementById("textBtn");
var arrowBot = document.querySelector(".flecha-abajo");
var mostrarCarta = document.querySelector(".hidden-cartas");
arrowBot.addEventListener("click", function () {
    if (mostrarCarta.style.display === 'none') {
        mostrarCarta.style.display = 'block';
        textBtn.innerText = "Oculta las cartas";
    }
    else {
        mostrarCarta.style.display = 'none';
        textBtn.innerText = "Conoce las cartas";
    }
});
//Boton validacion formulario
var form = document.getElementById("form");
var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail");
form.addEventListener('submit', validarFormulario);
function validarFormulario(evento) {
    evento.preventDefault();
    /*---- validacion nombre---- */
    var nombre = document.getElementById("nombre");
    var capNombre = nombre.value;
    if (capNombre === "" || capNombre.length < 4) {
        errorName.innerText = "Ingresa un nombre";
        nombre.classList.add("borde-error");
        return;
    }
    else {
        nombre.classList.remove("borde-error");
        errorName.innerText = "";
    }
    ;
    /*------------validacion email------*/
    var email = document.getElementById("email");
    var capEmail = email.value;
    if (!regex.test(capEmail)) {
        email.classList.add("borde-error");
        errorEmail.innerText = "Email no valido";
        return;
    }
    else {
        email.classList.remove("borde-error");
        errorEmail.innerText = "";
    }
    var btnForm = document.getElementById("btnForm");
    btnForm.style.background = "green";
}
