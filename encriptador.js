const botonEncriptar = document.querySelector(".encriptador__botones__encriptar");
const textoEncriptar = document.querySelector(".encriptador__text__area");
const aviso = document.querySelector(".encriptador__aviso__texto");
const resultado = document.querySelector(".resultado__mensaje");
const contenido = document.querySelector(".resultado__contenido");
const botonCopiar = document.querySelector(".resultado__botones__copiar");
const botonDesencriptar = document.querySelector(".encriptador__botones__desencriptar");

botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto solo debe contener letras minusculas";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos ni caracteres especiales";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }
    else if (texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto solo debe contener letras minusculas";

        setTimeout (() => {
            aviso.removeAttribute("style");
        },1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy");
})
