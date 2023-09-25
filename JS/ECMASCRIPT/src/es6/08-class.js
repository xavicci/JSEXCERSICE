class hogar {

    constructor() {
        console.log("Inicializo mi instancia Hogar");
        this.tengoAuto = 'No';
        this.tengoMoto = 'No';

    }

    saludo() {
        return "Hola soy Xavier Flores y si me preguntas si tengo vehiculo la respuesta es:" + this.tengoAuto;
    }

    despedida() {
        return "Este es un adíos eterno"
    }
};

const casaXavi = new hogar();
const casaFrancisco = new hogar();
console.log(casaXavi.saludo());
console.log(casaXavi.despedida());


class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}


const user_developer = new user('David', 15);

console.log(user_developer.uAge);
console.log(user_developer.uAge=20);
console.log(user_developer.age=30);
console.log(user_developer.uAge);