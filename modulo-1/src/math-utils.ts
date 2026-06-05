export function calcularMedia(
  numeros: number[]
): number | null {

  if (numeros.length === 0) {
    return null;
  }

  const suma = numeros.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  return suma / numeros.length;

}

export function calcularMediana(
  numeros: number[]
): number | null {

  if (numeros.length === 0) {
    return null;
  }

  const ordenados = [...numeros].sort(
    (a, b) => a - b
  );

  const mitad = Math.floor(
    ordenados.length / 2
  );

  if (ordenados.length % 2 === 0) {

    return (
      ordenados[mitad - 1] +
      ordenados[mitad]
    ) / 2;

  }

  return ordenados[mitad];

}

export function filtrarAtipicos(
  numeros: number[],
  limite: number
): number[] {

  return numeros.filter(
    numero => numero <= limite
  );

}