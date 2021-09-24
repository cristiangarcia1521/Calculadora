var num1, num2, operacion;
var pantalla = document.getElementById('pantalla');
var resultado = document.getElementById('resultado');

function getData(id) {
    var objeto = document.getElementById(id);
    resultado.textContent = resultado.textContent + objeto.value;
    console.log(objeto.value);
}

function getOperacion(id) {
    switch (id) {
        case "+":
            operacion = "+";
            break;
        case "-":
            operacion = "-";
            break;
        case "*":
            operacion = "*";
            break;
        case "/":
            operacion = "/";
            break;
    }
    num1 = resultado.textContent;
    limpiar();
}

function getSolucion() {
    num2 = resultado.textContent;
    resolver();
}

function resolver() {
    var operacionResuelta = " ";
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(num1) + parseFloat(num2);
            operacionResuelta = "" + num1 + " + " + num2;
            break;
        case "-":
            res = parseFloat(num1) - parseFloat(num2);
            operacionResuelta = "" + num1 + " - " + num2;
            break;
        case "*":
            res = parseFloat(num1) * parseFloat(num2);
            operacionResuelta = "" + num1 + " . " + num2;
            break;
        case "/":
            res = parseFloat(num1) / parseFloat(num2);
            operacionResuelta = "" + num1 + " / " + num2;
            break;
    }
    resetear();
    pantalla.textContent = operacionResuelta;
    resultado.textContent = res;
}

function limpiar() {
    pantalla.textContent = "";
    resultado.textContent = "";
}

function resetear() {
    pantalla.textContent = "";
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}