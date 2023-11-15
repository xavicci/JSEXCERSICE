/* const juanita = {
    age: 20,
    email: 'juanita@hotmail.com'
}

const nath = juanita;

console.log({ juanita, nath })

nath.email = 'nath@nath.com'
nath.age = 22;

/////////////////////////////////////////////
const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = "AAA"
    }
}

const stringifiedComplexObj = JSON.stringify(obj1);
console.log(stringifiedComplexObj);

const obj2 = JSON.parse(stringifiedComplexObj)
console.log(obj2)


 */

function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}


class SuperObject {
    static isObject(subject) {
        return typeof subject == "object";
    }


    // static deepCopy(subject) {
    //     let copySubject;
    //     const subjectIsObject = isObject(subject);
    //     const subjectIsArray = isArray(subject);

    //     if (subjectIsArray) {
    //         copySubject = [];
    //     } else if (subjectIsObject) {
    //         copySubject = {};
    //     } else {
    //         return subject;
    //     }

    //     for (key in subject) {
    //         const keyIsObject = isObject(subject[key]);

    //         if (keyIsObject) {
    //             copySubject[key] = this.deepCopy(subject[key]);
    //         } else {
    //             if (subjectIsArray) {
    //                 copySubject.push(subject[key]);
    //             } else {
    //                 copySubject[key] = subject[key];
    //             }
    //         }

    //     }

    //     return copySubject;

    // }
}

function SuperObjectProto() {

    SuperObject.isObject = function (subject) {
        return typeof subject == "object";
    }

    SuperObject.deepCopy = function (subject) {
        let copySubject;
        const subjectIsObject = isObject(subject);
        const subjectIsArray = isArray(subject);

        if (subjectIsArray) {
            copySubject = [];
        } else if (subjectIsObject) {
            copySubject = {};
        } else {
            return subject;
        }

        for (key in subject) {
            const keyIsObject = isObject(subject[key]);

            if (keyIsObject) {
                copySubject[key] = this.deepCopy(subject[key]);
            } else {
                if (subjectIsArray) {
                    copySubject.push(subject[key]);
                } else {
                    copySubject[key] = subject[key];
                }
            }

        }

        return copySubject;

    }



}

function createLearningPath({
    name = requiredParam("name"), // Campo es obligatorio
    courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
    const private = { // Atributos privados
        "_name": name,
        "_courses": courses,
    };
    const public = { // Getters y Setters
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName;
            } else {
                console.warn("El nombre debe tener al menos 1 caracter");
            }
        },
        get courses() {
            return private["_courses"];
        },
    };
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const privateAtributos = {
        "_name": name,
        "_learningPaths": learningPaths, // 👈👈
    };

    const publicAtributos = {
        email,
        age,
        approvedCourses,
        //learningPaths,👈👈
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        get name() {
            return privateAtributos["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                privateAtributos["_name"] = newName;
            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter");
            }
        },
        get learningPaths() { // 👈👈
            return private["__learningPaths"];
        },
        set learningPaths(newLP) { // 👈👈
            // AQUÍ empezamos a aplicar DUCK TYPING 👀🦆
            if (!newLP.name) {
                // Si la nueva ruta de aprendizaje NO tiene el atributo "name"...
                console.warn("Tu LP no tiene la propiedad name");
                return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
            }

            if (!newLP.courses) {
                // Si la nueva ruta NO tiene asignado un array
                // en el atributo "courses"
                console.warn("Tu LP no tiene courses");
                return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
            }

            if (!isArray(newLP.courses)) {
                // Si el atributo "courses" en la nueva ruta de aprendizaje NO es un Array
                console.warn("Tu LP no es una lista (*de cursos)");
                return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
            }

            // Si la nueva ruta de aprendizaje pasó por todas las validaciones
            // correctamente...Quiere decir que SÍ es una ruta válida tal como
            // la deseamos que fuese. Por tanto, procedemos a añadir ese Learning Path
            // a la lista de rutas del estudiante:
            private["_learningPaths"].push(newLP);
        },
    };

    return publicAtributos;
}