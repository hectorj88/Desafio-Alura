var $desifrar = document.querySelector('#desifrar'), $nino = document.querySelector('#nino'), $noEncontrado = document.querySelector('#noEncontrado'), $textDesifrar = document.querySelector('#textDesifrar'), $izquierda = document.querySelector('#izquierda'), $texto1 = document.querySelector('#texto1'), $bCopiar = document.querySelector('#bCopiar'), $footer = document.querySelector('footer');

//ocultamos elementos al seleccionar el recuadro de texto de la derecha
$desifrar.addEventListener("click", () => {
    $nino.style.visibility = "hidden";
    $noEncontrado.style.visibility = "hidden";
    $textDesifrar.style.visibility = "hidden";
});

//para mostrar los elementos de la derecha siempre y cuando el campo este vacio
$izquierda.addEventListener("click", () => {
    if ($desifrar.value.length === 0){
        $nino.style.visibility = "visible";
        $noEncontrado.style.visibility = "visible";
        $textDesifrar.style.visibility = "visible";
        $bCopiar.style.visibility = "hidden";
    }else{
        //de lo contrario, solo mostramos el boton COPIAR
        $bCopiar.style.visibility = "visible";
    }
})

//funcion que encripta el mensaje
function encriptar (){
    var texto = document.querySelector("#texto1").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    if (minusculasCaracteres(texto)==true){
            document.querySelector("#desifrar").value = textoCifrado;
            document.querySelector("#texto1").value;

            $nino.style.visibility = "hidden";
            $noEncontrado.style.visibility = "hidden";
            $textDesifrar.style.visibility = "hidden";
    }else{
        alert("No se permiten letras en mayusculas, tildes o acentos ni caracteres especiales");
    }
}
//funciones a ejecutar al pulsar el boton Encriptar
function ejecutarBoton1(){
    encriptar();
    detectarPantalla();
}

var boton1 = document.querySelector("#encriptar"); 
boton1.onclick = ejecutarBoton1;

//funcion que desencripta el mensaje
function desencriptar (){ 
    var texto = document.querySelector("#texto1").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#desifrar").value = textoCifrado;
    if(minusculasCaracteres(texto)==true){
        document.querySelector("#desifrar").value = textoCifrado; 
        document.querySelector("#texto1").value;
        
        $nino.style.visibility = "hidden";
        $noEncontrado.style.visibility = "hidden";
        $textDesifrar.style.visibility = "hidden";
    }else{
        alert("No se permiten letras en mayusculas, tildes o acentos ni caracteres especiales");
    }
}
//funciones a ejecutar al pulsar el boton Desencriptar
function ejecutarBoton2(){
    desencriptar();
    detectarPantalla();
}

var boton2 = document.querySelector("#desencriptar"); 
boton2.onclick = ejecutarBoton2;

//Funcion que ayuda a determinar si el texto cumple con lo solicitado
function minusculasCaracteres(cadena){
    const permitido = /[a-zñ 1234567890]/y;
    for (var i=0; i<cadena.length; i++){
        if(!permitido.test(cadena)){
            break;
        }
    }    
    return i==cadena.length;
}

//Funcion que se ejecuta al pulsar el boton Copiar
function copiar(){
    var copiarTexto = document.querySelector("#desifrar").value;
    navigator.clipboard.writeText(copiarTexto).then(() => {
        alert("copiado en el portapapeles");
    });
}
$bCopiar.onclick = copiar;

//funcion que captura los pixeles de la pantalla y ejecuta cambios en las vistas
function detectarPantalla(){
    var $derecha = document.querySelector('#derecha');
    if (window.innerWidth < 769 && $desifrar.value.length != 0){
        $izquierda.style.height = "64%";
        $derecha.style.height = "34%";
        $footer.style.height = "2%";
    }
}

//window.onload = validar;

