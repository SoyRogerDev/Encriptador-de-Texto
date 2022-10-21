//e --> enter
//o --> ober
//i --> imes
//a --> ai
//u --> ufat

function encriptar() {

    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafo

    var txtCifrado = texto.replace(/e/img, "enter");
    var txtCifrado = txtCifrado.replace(/o/img, "ober");
    var txtCifrado = txtCifrado.replace(/i/img, "imes");
    var txtCifrado = txtCifrado.replace(/a/img, "ai");
    var txtCifrado = txtCifrado.replace(/u/img, "ufat");

    document.getElementById("mensaje").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    inputTexto.value = ""
}

function desencriptar() {

    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafo

    var txtCifrado = texto.replace(/enter/img, "e");
    var txtCifrado = txtCifrado.replace(/ober/img, "o");
    var txtCifrado = txtCifrado.replace(/imes/img, "i");
    var txtCifrado = txtCifrado.replace(/ai/img, "a");
    var txtCifrado = txtCifrado.replace(/ufat/img, "u");

    document.getElementById("mensaje").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    inputTexto.value = ""
}

function copiar() {
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("se copio")
}
