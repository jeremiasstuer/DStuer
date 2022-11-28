
// Read more & Read less //

const hidetextbtns = document.getElementById("hidetextbtn");
const hidetext = document.getElementById("hidetext");

hidetextbtns?.addEventListener(`click`, toggleText);

function toggleText(){
    hidetext?.classList.toggle(`show`);

    if(hidetext?.classList.contains(`show`)){
        hidetextbtns?.innerHTML = `Leer menos!`;
    }
    else {
        hidetextbtns?.innerHTML = `Leer más!`
    }
}

// Validación de formulario //

const formElement = document.getElementById("form") as HTMLFormElement;
const nombres = document.getElementById("nombre") as HTMLInputElement;
const apellidos = document.getElementById("apellido") as HTMLInputElement;
const emails = document.getElementById("email") as HTMLInputElement;
let avisos = document.getElementById("warnings") as HTMLElement;
formElement.addEventListener("submit", handleSubmit); 

function handleSubmit(e: SubmitEvent){
    e.preventDefault();
    
    const nombrevalue = (nombres.value);
    const apellidovalue = (apellidos.value);
    const emailvalue = (emails.value);
    const emailvalidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    
    if ( nombrevalue.length < 2 ) { console.log("El nombre no es valido");

        }else{
            console.log(`Tu email es: ${nombrevalue}`);
        
    }
     
    if (apellidovalue.length < 2 ) { console.log("El apellido no es valido")
        }else{
            console.log(`Tu apellido es: ${apellidovalue}`);
            
        } 
    
    
    if (!emailvalidation.test(emailvalue)) { console.log("El email no es valido");
        } else{
            console.log(`Tu email es: ${emailvalue}`);
    
   }
    formElement.reset();

}



