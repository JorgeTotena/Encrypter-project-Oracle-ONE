


var encrypt = document.querySelector("#btn-encriptar");
var decrypt = document.querySelector("#btn-desencriptar");
var message = document.querySelector("#input-texto");
var encryptedMessage = document.querySelector("#msg"); 
var copybutton = document.querySelector("#btn-copy")
/*var capturedMessage = capturarMensaje(message); */

encrypt.addEventListener("click", function(event){
    var encryption = encryptMsg(message.value);
    event.preventDefault(); 
    console.log(encryption)
    encryptedMessage.value = encryption
        

});

function encryptMsg(text) {
    var output = text.replaceAll("e", "enter")
    return output;

}



        
               

    /*for(var i = 0; this.value.length; i++ ) {
        
        if ((this.value[i] == "a") && (output[i] == "ai")) {
            
            output.push("ai")
            console.log(output);
            return;          
            
        }
        console.log(output) */
        
      
                   
        
});
    
    

}




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