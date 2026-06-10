import { EstadoMatricula } from "./domain/types/EstadoMatricula";
import { assertNever } from "./assertNever";

export function generarReporte(
  estado: EstadoMatricula
): string {

  switch (estado.tipo) {

  case "ACTIVA":
    return `Matrícula activa con ${estado.asignaturas.length} asignaturas`;

  case "SUSPENDIDA":
    return `Matrícula suspendida. Motivo: ${estado.motivo}`;

  case "FINALIZADA":
    return `Matrícula finalizada. Nota media: ${estado.notaMedia}`;

  default:
    return assertNever(estado);

}

}