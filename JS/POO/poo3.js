const juan = {
    name: 'Juanito',
    age: 18,
    approvedCourses: ["curso1"],
    addCourse(newCourse) {
        console.log("this", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));
// console.log("************")
// juan.addCourse("Curso2");




Object.defineProperty(juan, 'pruebaNasa', {
    value: 'extraterrestres',
    writable: true,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(juan, 'navigator', {
    value: 'chrome',
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperty(juan, 'editor', {
    value: 'vscode',
    enumerable: true,
    writable: false,
    configurable: true,
});

Object.defineProperty(juan, 'terminal', {
    value: 'wsl',
    enumerable: true,
    writable: true,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));

/* Solo para complementar, al usar Object.freeze() y/o Object.seal(), aparte de no poder borrar propiedades, tampoco se podrán agregar nuevas. Además, al usar alguno de esos 2 métodos, no habrá forma de volver atrás; es decir, si haces freeze o seal sobre un objeto, no podrás unfreeze o unseal luego 😅 (tendrías que crear una copia que permita volverle a hacer cambios o algo así).
 

Qué es Object.seal y Object.freeze
El método seal “sella” un determinado objeto. Es decir:

Impide que nuevas propiedades sean agregadas.
Define como configurable: false todos los atributos del objeto, con lo que impide que sean borradas.
Los atributos sí pueden ser modificados, ya que la propiedad writable permanece asignado como true.

El método freeze “congela” un objeto. Es decir:

Impide que se le agreguen nuevas propiedades.
Impide que sean eliminadas propiedades ya existentes.
Evita que sus propiedades writable, enumerable y configurable sean modificadas.
*/
Object.isSealed(carlos);
Object.isFrozen(carlos);