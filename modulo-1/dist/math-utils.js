"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return null;
    }
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}
function calcularMediana(numeros) {
    if (numeros.length === 0) {
        return null;
    }
    const ordenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
        return (ordenados[mitad - 1] +
            ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
}
function filtrarAtipicos(numeros, limite) {
    return numeros.filter(numero => numero <= limite);
}
