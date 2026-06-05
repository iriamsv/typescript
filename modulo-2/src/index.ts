import { generarReporte } from "./generarReporte";

import {
  EstadoMatricula
} from "./domain/types/EstadoMatricula";

const matricula: EstadoMatricula = {

  tipo: "ACTIVA",

  asignaturas: [
    "Programación",
    "Bases de Datos",
    "Entornos"
  ]

};

console.log(
  generarReporte(matricula)
);

import { obtenerRecurso } from "./services/api-client";

import { Estudiante } from "./domain/types/Estudiante";

async function pruebaAPI() {

  const respuesta =
    await obtenerRecurso<Estudiante>(
      "/estudiantes"
    );

  console.log(respuesta);

}

pruebaAPI();

