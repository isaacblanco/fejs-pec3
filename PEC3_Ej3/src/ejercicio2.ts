// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.

// Comando de lanzar el fichero: tsc (carpeta raiz)
// Comando para probar el fichero: node ./dist/ejercicio2.js (carpeta raiz)

interface Plane {
  model: string;
  npassengers: number;
}
/***/
// Se crea una interfaz con el objeto de claves de tipo string y del tipo plane
// Esta interfaz es un buen ejemplo de tipo polimorfico con sub elementos
interface HangarHash {
  [key: string]: Plane; // Subelemento en elemento con clave
}

let myHangar: HangarHash = {}; // Estructura de objecto vacía para JSON

// Añade un nuevo elemento al array referenciando por un string y sus datos de tipo plane
myHangar["123Z"] = {
  model: "airbus",
  npassengers: 200,
};

// Añade otro elemento al array referenciando por un string y sus datos de tipo plane
myHangar["H789"] = {
  model: "boeing",
  npassengers: 151,
};

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
// Recorremos
for (let key in myHangar) {
  console.log(`${key}:${myHangar[key].model}(${myHangar[key].npassengers})`);
}
