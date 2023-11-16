// variables
'use strict';

var a;
var b = 'b';  //declaramos y asignamos
b = 'as'
var a = 'sdd' //redeclaracion


var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; // OJO NO DECLARAMOS PERO IGUAL SIRVE PARA EVITAR USAR USE STRICT
    console.log(country);
}

countries();
console.log("sin declarar", country)

