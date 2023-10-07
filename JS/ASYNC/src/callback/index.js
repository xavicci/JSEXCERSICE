// es una funcion que pasa como agurmento otra funcion.

console.log(calc(3, 4, sum));

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

function sum(num1, num2) {
    return num1 + num2;
}

setTimeout(gretting, 0, 'Xavier');

console.log(calc(4, 4, sum));
function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Xavi');






console.log(calc(5, 4, sum));