function cambiar() {
    var textoDigOriginal = "https://www.memoria.fahce.unlp.edu.ar/programas/pp.xxxx/pp.xxxx.pdf&NewLine;XX&NewLine;&NewLine;KSHMM-MM-MMMMDDDD-DD-DD^pCR^mDI&NewLine;&NewLine;4.0 Internacional^uhttps://creativecommons.org/licenses/by-nc-sa/4.0/";
    var identificador = document.getElementById("identificador").value;
    var fechaMod = document.getElementById("fechaMod").value;
    var fechaDeposito = document.getElementById("fechaDeposito").value;


    var textoDigSalida = "";
    textoDigSalida = textoDigOriginal.replaceAll("xxxx", identificador);
    textoDigSalida = textoDigSalida.replace("MM-MM-MMMM", fechaMod);
    textoDigSalida = textoDigSalida.replace("DDDD-DD-DD", fechaDeposito);
    document.getElementById("textAreaCarga").innerHTML = "";
    document.getElementById("textAreaCarga").innerHTML = textoDigSalida;
    var selector = document.querySelector('#textAreaCarga');
    selector.select();
    document.execCommand('copy');




    window.alert("Copiado!");

}

function cambiarDig() {

    var textoDigOriginal = "^fDDDD-DD-DD^iBIBHUMA^pdigitalizador^cscanner^hescaner^sgscan2pdf&NewLine;^tedición^fDDDD-DD-DD^iBIBHUMA^pdigitalizador^sscantailor%^tocr^fDDDD-DD-DD^iBIBHUMA^pdigitalizador^sgscan2pdf%^tgeneración PDF^fDDDD-DD-DD^iBIBHUMA^pdigitalizador^sgscan2pdf";
    var fechaDigitalizacion = document.getElementById("fechaDigitalizacion").value;
    var responsable = document.getElementById("responsable").value;
    var escaner = document.getElementById("escaner").value;



    var textoDigSalida = "";
    textoDigSalida = textoDigOriginal.replace("escaner", escaner);
    textoDigSalida = textoDigSalida.replaceAll("digitalizador", responsable);
    textoDigSalida = textoDigSalida.replaceAll("DDDD-DD-DD", fechaDigitalizacion);
    document.getElementById("textAreaDigitalizacion").innerHTML = "";
    document.getElementById("textAreaDigitalizacion").innerHTML = textoDigSalida;
    var selector = document.querySelector('#textAreaDigitalizacion');
    selector.select();
    document.execCommand('copy');
    window.alert("Copiado!");
}

window.onload = function() {
    var btnDatosControl = document.getElementById("btnDatosCarga");
    btnDatosControl.addEventListener("click", cambiar);
    var btnDatosDigitalizacion = document.getElementById("btnDatosDigitalizacion");
    btnDatosDigitalizacion.addEventListener("click", cambiarDig);
}