# JavaScript vs. TypeScript

## Principales ventajas del typeScript sobre JavaScript

### Seguridad de tipos

En JavaScript, dog puede ser cualquier tipo de dato. En TypeScript, la interfaz Dog define que kind debe ser un string y weight un número. Esto evita errores como asignar true a kind. ¡Te atrapa antes de ejecutar el código!

### Mejor autocompletado

Los editores de código modernos usan la definición de la interfaz Dog para ofrecerte sugerencias al escribir código relacionado con perros. Esto te ayuda a escribir más rápido y con menos errores.

### Documentación del código

La interfaz Dog documenta explícitamente qué datos esperan las funciones que trabajan con perros. Esto mejora la claridad del código, especialmente en proyectos grandes o cuando trabajas en equipo.

### Detección temprana de errores

Al compilar TypeScript a JavaScript, se verifica que los valores asignados a las propiedades de dog coincidan con los tipos definidos en la interfaz. Si intentas poner true en kind, el compilador te avisará antes de ejecutar el código.

### Refactorización más segura

Al renombrar propiedades en la interfaz Dog (por ejemplo, de kind a species), el refactorizador del editor de código también actualizará automáticamente las referencias a esa propiedad en todo el código. Esto previene errores por olvidos al cambiar nombres.

Desde un punto de vista personal encuentro al TypeScript, más relajante y estructura de usar, aunque el tipado a veces es problemático cuando no se controla todo.
