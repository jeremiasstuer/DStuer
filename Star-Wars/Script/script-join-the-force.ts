const music = document.getElementById("music") as HTMLAudioElement;
music.volume = 0.3
function mute() {
const aud = document.getElementById("music") as HTMLAudioElement;
if (aud.muted == false) {aud.muted = true}
else {aud.muted = false}
}


const form = document.getElementById("formulario") as HTMLFormElement;
const inputs = document.querySelectorAll("#formulario .formulario-input");

inputs.forEach(input => {
    input.addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    })
});    

form.addEventListener("submit", (e) => handleSubmit(e));
function handleSubmit (e:SubmitEvent){
    e.preventDefault();
    const inputData = new FormData(form);
    const name = inputData.get("nameInput");
    const apellido = inputData.get("lastNameInput");
    const email = document.getElementById("mail") as HTMLInputElement;
    const paraNombre = document.getElementById("paraNombre") as HTMLParagraphElement;
    const paraApellido = document.getElementById("paraApellido") as HTMLParagraphElement;
    const paraEmail = document.getElementById("paraMail") as HTMLParagraphElement;
    const regexMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
    const saludo = document.getElementById("saludo") as HTMLAnchorElement;
      
    
    if(name !== ""){
        paraNombre.classList.add("paraWrongOk")
    }else{
            paraNombre.innerHTML="El Nombre es invalido"
                
    }
    
    if(apellido !== ""){
        paraApellido.classList.add("paraWrongOk")
    }else{
            paraApellido.innerHTML="El Apellido es invalido"
                
    }
    
    if (regexMail.test(email.value))
    {
        paraEmail.classList.add("paraWrongOk")
        
    } else {
        paraEmail.innerHTML="El E-mail es invalido"
    }
    if(name !== "" && apellido !== "" && regexMail.test(email.value)){
        window.location.assign("http://127.0.0.1:3000/index.html");
        saludo.insertAdjacentText('afterbegin',`Bienvenido a la Resistencia ${name}` )
        }
    }
