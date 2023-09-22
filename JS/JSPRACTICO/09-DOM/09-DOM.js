// diferencia entre queryselector y getElementById

// const h1 = document.querySelector('h1');
// const classparrafo = document.querySelector('.class-parrafo');
// const idparrafo = document.querySelector('#id-parrafo');
// const input = document.querySelector('input');

// console.log({
//     h1,
//     classparrafo,
//     idparrafo,
//     input,
// })

// h1.innerHTML = "Cambiando mi titulo h1";

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','cambio-de-class');
// console.log(h1.getAttribute('class'));

// h1.classList.add('rojo');
// h1.classList.add('verde');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');


// input.value=4656;

// const tagh2 = document.createElement('h2');
// tagh2.innerText="woww"

// classparrafo.append(tagh2);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#form');

btn.addEventListener('click', btnOnClick); //con este evento ya no hace falta mandarlo a llamar desde el HTML onClick

form.addEventListener('submit', sumForm); //con este evento ya no hace falta mandarlo a llamar desde el HTML onClick

function btnOnClick() { // toma el valor de los dos input y devuelve su concatenacion
    pResult.innerHTML = input1.value * 1 + input2.value * 1;
};

function sumForm(event) { // toma el valor de los dos input y devuelve su concatenacion
    pResult.innerHTML = input1.value * 1 + input2.value * 1;
    event.preventDefault();
};

