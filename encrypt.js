var encrypt = document.querySelector("#btn-encriptar")
var message = document.querySelector("#input-texto")
var capturedMessage = capturarMensaje(message);
encrypt.addEventListener("click", function(event){
    event.preventDefault();
    console.log("you have clicked the button")
        

});

function capturarMensaje(message) {
    message.addEventListener("input", function(){
        input = this.value
        console.log(this.value);        

    for(var i = 0; this.value.length; i++ )

        if (this.value[i] == "a") {
            
            console.log("ai")
            return;             

        }   
              
              
    });
    
    

}


 /*function compararMensaje() {
    
     }


}

var comparedMessage = compararMensaje(); */

/*


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/