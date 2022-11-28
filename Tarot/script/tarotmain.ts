// Boton Menu

const toggle = document.querySelector('.toggle') as HTMLDivElement;
const links = document.querySelector('.links') as HTMLUListElement;

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
});

//Boton mostrar cartas

const textBtn=document.getElementById("textBtn") as HTMLParagraphElement;
const arrowBot = document.querySelector(".flecha-abajo") as HTMLDivElement;
const mostrarCarta = document.querySelector(".hidden-cartas") as HTMLElement;

arrowBot.addEventListener("click", ()=> {
    if(mostrarCarta.style.display === 'none'){
        mostrarCarta.style.display = 'block';
        textBtn.innerText= "Oculta las cartas"
    }else{
        mostrarCarta.style.display = 'none';
        textBtn.innerText= "Conoce las cartas"
    }
});


//Boton validacion formulario

const form = document.getElementById("form") as HTMLInputElement;
const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const errorName= document.getElementById("errorName") as HTMLParagraphElement;
const errorEmail = document.getElementById("errorEmail") as HTMLParagraphElement;


form.addEventListener('submit', validarFormulario); 

function validarFormulario(evento:any) {
  evento.preventDefault();
    /*---- validacion nombre---- */
  const nombre= document.getElementById("nombre") as HTMLInputElement;
  const capNombre = nombre.value
  if(capNombre === "" || capNombre.length < 4 ) {
    errorName.innerText ="Ingresa un nombre"
    nombre.classList.add("borde-error")
    return;
  }else{
    nombre.classList.remove("borde-error")
    errorName.innerText =""
  };
    /*------------validacion email------*/
  
  const email = document.getElementById("email") as HTMLInputElement;
  const capEmail = email.value
  if (!regex.test(capEmail)) {
    email.classList.add("borde-error")
    errorEmail.innerText="Email no valido"
    return;
  }else{
    email.classList.remove("borde-error")
    errorEmail.innerText="";
  }
  
  const btnForm= document.getElementById("btnForm") as HTMLInputElement;
  btnForm.style.background="green"
  
}
