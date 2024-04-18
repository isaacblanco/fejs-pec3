"use strict";
// Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones
// y salidas indicadas en los comentarios.
// Comando de lanzar el fichero: tsc (carpeta raiz)
// Comando para probar el fichero: node ./dist/ejercicio3.js (carpeta raiz)
class Animal {
    constructor() {
        /***/
        Animal.population++; // Incrementamos el número de animales existentes por 1
    }
}
Animal.population = 0; // Número de animales existentes, de momento ninguno
// Clase que hereda de la clase abstracta Animal
class Dog extends Animal {
    /***/
    constructor(color) {
        super(); // hacemos que se llame al constructor de la clase abstracta
        this.color = color; // Y la propiedad propia de esta clase
    }
    sound() {
        console.log("WOW"); // mejor woof, pero hay mucho tipo de perros
    }
    iamadog() {
        console.log("yes, this is a dog");
    }
}
class Cat extends Animal {
    /***/
    constructor(gender) {
        super(); // hacemos que se llame al constructor de la clase abstracta
        this.gender = gender; // Y la propiedad propia de esta clase
    }
    sound() {
        console.log("MEOW"); // as a cat owner... this is not accurate unless they are hungry
    }
    iamacat() {
        console.log("yes, this is a cat");
    }
}
let animals = [];
animals.push(new Cat("male"));
animals.push(new Dog("white"));
animals.push(new Cat("female"));
animals.push(new Dog("black"));
for (let animal of animals) {
    /***/
    animal.sound(); // MOOOOOW
    /***/
    if (animal instanceof Cat) {
        animal.iamacat(); // my meows!
    }
    else if (animal instanceof Dog) {
        animal.iamadog(); // not a dog person
    }
    /***/
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
