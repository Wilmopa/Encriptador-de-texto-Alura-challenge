// variables para las  funciones //
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muñeco = document.querySelector(".contenedormuñeco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
// esta funcion se encarga de encriptar el mensaje//
function encriptar(){
ocultarAdelante();
var cajatexto = recuperarTexto()
resultado.textContent = encriptarTexto(cajatexto);
}
//esta funcion transforma de nuevo el mensaje y deja leerlo//
function desencriptar(){
ocultarAdelante();
var cajatexto = recuperarTexto()
resultado.textContent = desencriptarTexto(cajatexto);
}
// funcion para capturar el texto a encriptar//
function recuperarTexto(){
var cajatexto = document.querySelector(".cajatexto");
return cajatexto.value
}
//para ocultar el contenedor del muñeco///
function ocultarAdelante(){
muñeco.classList.add("ocultar");
contenedor.classList.add("ocultar");
}
//Aqui se encripta el mensaje click btn encriptar//
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
        textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
        textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
        textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
        textoFinal = textoFinal + "ufat"
        }
        else{
        textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
// esta funcion desencripta el mensaje cilck btn desencriptar//
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
        textoFinal = textoFinal + "a"
        i = i+1;
        }
        else if(texto[i] == "e"){
        textoFinal = textoFinal + "e"
        i = i+4;
        }
        else if(texto[i] == "i"){
        textoFinal = textoFinal + "i"
        i = i+3;
        }
        else if(texto[i] == "o"){
        textoFinal = textoFinal + "o"
        i = i+3;
        }
        
        else if(texto[i] == "u"){
        textoFinal = textoFinal + "u"
        i = i+3;
        }
        else{
        textoFinal = textoFinal + texto[i];
        }
        
    }
return textoFinal;
}
// captura en el portapapeles al usuario hacer click en copiar//
const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
});