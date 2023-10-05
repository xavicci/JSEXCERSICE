// es una funcion que pasa como agurmento otra funcion.
function sum(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1 + num2)
}

console.log(calc(3, 3, sum));

setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000);


function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 4000, 'Xavi');






