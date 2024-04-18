"use strict";
// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.
// Comando de lanzar el fichero: tsc (carpeta raiz)
// Comando para probar el fichero: node ./dist/ejercicio1.js (carpeta raiz)
function printArray(array) {
    //code to print the array on console
    console.log(array.join(",")); // coma como separador
}
let array = [2, 3, 4];
console.log(array.shift()); //2, quitamos el primer elemento
printArray(array); // 3,4
array.push(5); /* nuevo elemento al final del array **/
printArray(array); // 3,4,5
console.log(array.pop()); //5, quitamos el ultimo elemento
printArray(array); // 3,4
array.push(1); // Se pone el número 1 al final del array
printArray(array);
array.unshift(8); // Añade el número 8 al principio del array
printArray(array);
let everyisgreater = array.every((val) => val > 3); // every ayuda y comprueba si todos los números del array son mayores que 3
console.log(everyisgreater);
let everyisless = array.every((val) => val < 10); // Comprueba si todos los números del array son menores que 10
console.log(everyisless);
console.log(array.sort((a, b) => a - b)); // sort para ordenar el array
// Ordena el array de mayor a menor
console.log(array.sort((a, b) => b - a)); // sort para ordenar el array
