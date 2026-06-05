# Modelo de Datos y Decisiones Arquitectónicas

## Entidades del dominio

Para representar un sistema de gestión universitaria se han definido dos entidades principales:

### Estudiante

```typescript
interface Estudiante {
  readonly id: string;
  nombre: string;
  email: string;
  curso: string;
}
```

### Asignatura

```typescript
interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  profesor: string;
}
```

Se ha utilizado `readonly` para los identificadores porque estos no deberían modificarse una vez creada la entidad.

---

## Uso de interfaces

Se ha elegido `interface` para modelar entidades porque representan contratos estructurales para objetos.

Las interfaces permiten:

* Definir claramente la forma de los datos.
* Facilitar el mantenimiento del código.
* Mejorar la detección temprana de errores.
* Proporcionar documentación implícita del dominio.

---

## Unión Discriminada

Para modelar los distintos estados de una matrícula se ha utilizado una Unión Discriminada.

```typescript
type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;
```

Cada estado contiene una propiedad literal `tipo` que permite a TypeScript identificar automáticamente qué propiedades están disponibles en cada caso.

Esta técnica reduce errores y representa únicamente estados válidos del sistema.

---

## Generics

Se ha implementado una interfaz genérica:

```typescript
interface RespuestaAPI<T>
```

Su objetivo es reutilizar la misma estructura de respuesta para distintos tipos de datos.

Ejemplos:

```typescript
RespuestaAPI<Estudiante>
RespuestaAPI<Asignatura>
```

Ventajas:

* Reutilización de código.
* Seguridad de tipos.
* Menor duplicación.
* Mayor mantenibilidad.

---

## Servicio de acceso a datos

Se ha implementado una función genérica:

```typescript
obtenerRecurso<T>()
```

que simula una petición asíncrona utilizando `Promise` y `setTimeout`.

Esta aproximación permite desacoplar la lógica de acceso a datos de las entidades del dominio.

---

## Beneficios de TypeScript

El uso de TypeScript aporta:

* Detección temprana de errores.
* Tipado estático.
* Mejor autocompletado.
* Mayor mantenibilidad.
* Contratos explícitos entre componentes del sistema.

En comparación con JavaScript puro, reduce significativamente los errores detectados únicamente en tiempo de ejecución.
