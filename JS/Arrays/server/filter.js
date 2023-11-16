const serieNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const esPar = (n) => {

    return (n % 2 === 0) ? true : false;
}

const numeroPares = serieNumeros.filter(n => esPar(n));

console.log(numeroPares); // => [2, 4, 6, 8, 10, 12]




console.log(serieNumeros[0])