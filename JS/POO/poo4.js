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


    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {

}