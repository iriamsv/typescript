"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = require("./math-utils");
const datos = [10, 20, 30, 40];
const resultado = (0, math_utils_1.calcularMedia)(datos);
console.log("Media:", resultado);
const mediana = (0, math_utils_1.calcularMediana)(datos);
console.log("Mediana:", mediana);
const datosConAtipicos = [
    10,
    20,
    30,
    200,
    300
];
const filtrados = (0, math_utils_1.filtrarAtipicos)(datosConAtipicos, 100);
console.log("Datos filtrados:", filtrados);
