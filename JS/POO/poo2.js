class Patito {

    static sonidito = 'cuak';

    static hacerSonidito() {
        return 'sonido cuuakk';
    }
}

console.log(Patito.sonidito);
console.log(Patito.hacerSonidito());


const objetito = {
    name: "Carlitos",
    email: "carlitosmazzaroli@gmail.com",
    age: 16,
}

console.log(Object.keys(objetito));
console.log(Object.getOwnPropertyNames(objetito));
console.log(Object.entries(objetito));
console.log(Object.getOwnPropertyDescriptors(objetito));