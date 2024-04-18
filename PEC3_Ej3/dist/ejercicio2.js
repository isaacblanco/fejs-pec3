"use strict";
// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.
let myHangar = {}; // Estructura de objecto vacía para JSON
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
