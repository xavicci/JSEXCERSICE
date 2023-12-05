/* const juan1 = {
    name: 'juanDC',
    username: 'juanDCX',
    points: 100,
    socialMedia: {
        twitter: 'fjuandc',
        instagram: 'fjuandc',
        fb: undefined,
    },
    approvedCourses: [
        'Curso definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
    ],
    learningPaths: [
        {
            name: 'Escula de Desarrollo Web',
            courses: [
                'Curso A',
                'Curso B',
                'Curso C',
            ],
        },
        {
            name: 'Escula de VideoJuegos',
            courses: [
                'Curso D',
                'Curso E',
                'Curso F',
            ],
        },
    ],
}

const miguelito = {
    name: 'miguelito',
    username: 'miguefeli',
    points: 10010,
    socialMedia: {
        twitter: 'miguefeli',
        instagram: 'miguefeli',
        fb: undefined,
    },
    approvedCourses: [
        'Curso DataBusiness',
        'Curso BIZZ',
    ],
    learningPaths: [
        {
            name: 'Escula de Desarrollo Web',
            courses: [
                'Curso A',
                'Curso B',
                'Curso C',
            ],
        },
        {
            name: 'Escula de DataScince',
            courses: [
                'Curso DataVizz',
                'Curso Tableu',
                'Curso PowerBI',
            ],
        },
    ],
} */


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }

}

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso malito de programacion basica") {
            console.error("Web.... no")
        } else {
            this._name = nuevoNombre
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});
const CursoPracticoHTML = new Course({
    name: "Curso practico de HTML y CSS",
});

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        CursoPracticoHTML,
    ],
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
    ],
});
const escuelaVgs = new LearningPath({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgBasica,
    ],
});

const juan2 = new Student({
    name: 'JuanDC',
    username: 'juanadc',
    email: 'juanito@juanito.com',
    twitter: 'fjuandc',
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const miguelito = new Student({
    name: 'miguelito',
    username: 'miguelitofeli',
    email: 'miguelito@juanito.com',
    instagram: 'miguel_feliz',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

