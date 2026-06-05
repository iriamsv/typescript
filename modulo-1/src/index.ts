import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils";

const datos = [10, 20, 30, 40];

const resultado = calcularMedia(datos);
console.log("Media:", resultado);

const mediana = calcularMediana(datos);
console.log("Mediana:", mediana);

const datosConAtipicos = [
  10,
  20,
  30,
  200,
  300
];

const filtrados = filtrarAtipicos(
  datosConAtipicos,
  100
);

console.log(
  "Datos filtrados:",
  filtrados
);