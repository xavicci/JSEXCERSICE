const natalia = {
    name: 'Natalia',
    edad: 20,
    cursosAprobados: [
        'Curso Definitivo',
        'Curso Practico',
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// hacer que natalia apruebe otro curso


console.log(natalia);
natalia.cursosAprobados.push('Curso de ResponsiveDesign');
console.log(natalia);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

function Student(name, age, cursosAprobados) {
    this.name = name,
        this.age = age,
        this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    'Juanita',
    15,
    [
        'Curso de videojuegos',
        'Creacion de personajes',
    ]
)

console.log(juanita);
juanita.aprobarCurso('Curso WebAPP');
console.log(juanita);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

class Alumno {
    constructor(name, age, cursoAprobados) {
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito);
    }
}

const miguelito = new Alumno('Miguel', 28, ['CienciadeDatos', 'PrincipiosdeDatos']);
miguelito.aprobarCurso("CEO");
console.log(miguelito.cursoAprobados);
console.log(miguelito);

///////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
class Alumno2 {
    constructor({
        name,
        age,
        cursoAprobados = [],
        email = 'nose@nose.com',
    }) {
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCursito) {
        this.cursoAprobados.push(nuevoCursito);
    }
}

const miguelitos = new Alumno2({ name: 'Miguel', age: 29, cursoAprobados: ['CienciadeDatos', 'PrincipiosdeDatos'] });
console.log(miguelitos.cursoAprobados);
console.log(miguelitos);