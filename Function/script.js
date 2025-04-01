"use strict";
function somarNumeros(a, b, c) {
    return a + b + (c ? c : 0);
}
somarNumeros(3, 4);
somarNumeros(3, 4, 1);
const subtrair = (a, b) => a - b;
subtrair(10, 2);
function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.32));
console.log(arredondar("200.32"));
