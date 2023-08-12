let morpar = "";
let opeRealizada= document.getElementById("opRealizada");
let resultado = document.getElementById("resultado");
let opSeleccionado = "";
let numero = "";
let ultimoDigiPe = "";

function operador(num){
    numero = numero + num;
    morpar = morpar + num;
    opeRealizada.innerHTML = morpar;

    if(numero == '0' & opSeleccionado == '/'){
        limpiar();
        resultado.innerHTML = "Indefinido";
        return;
    }

    if(ultimoDigiPe == 'operacion'){
        ultimoDigiPe = 'numero';
    }
}

function operacion(oper){
    opSeleccionado = oper;
    ultimoDigiPe = "operacion";
    morpar = morpar + oper;
    numero = "";
    opeRealizada.innerHTML = morpar;
}

function calculo(){
    morpar = eval(morpar);
    resultado.innerHTML = morpar;
    morpar = morpar.toString();
    numero = "";
    opeRealizada.innerHTML = morpar;
}

function limpiar(){
    opSeleccionado = "";
    morpar = "";
    resultado.innerHTML = "";
    numero = "";
    opeRealizada.innerHTML = "0";
}