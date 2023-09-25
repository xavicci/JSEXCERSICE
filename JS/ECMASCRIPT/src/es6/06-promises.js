const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("hey!!");
        } else {
            reject ( "whooooops!");
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));

// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

/*Una promesa es un objeto de javascript que representa el eventual resultado (o error) de una operación asíncrona.
Los tres posibles estados de una promesa son: Pendiente, Cumplida, Rechazada.
El objeto de la promesa se asocia a una función callback que se ejecuta al cumplirse la operación asincrona.
Una función callback es una función que se pasa a otra función como argumento y luego se ejecuta dentro de la
función externa*/
/*Las promesas tienen un método .then(), con el cual podemos decidir qué ocurre cuando se completa la promesa (éxito o error)*/

//Primer ejemplo
const promesaCumplida = false;
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('¡Promesa cumplida!');
    } else {
      reject('Promesa rechazada...');
    }
  }, 3000);
});

function manejarResolve(valor) {
  console.log(valor);
}
function manejarReject(razonRechazo) {
  console.log(razonRechazo);
}

miPromesa.then(manejarResolve, manejarReject);
// En el ejemplo de arriba, los parametros resolve y reject son funciones que representaran el resultado de la promesa.
// En el metodo .then(), el parametro (valor) de la funciones manejarResolve y manejarReject representa el argumento que se le pasa a resolve/reject.

//Segundo ejemplo

const estatusPedido = function() {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("¡Pedido exitoso! Su pizza esta en camino.");
    } else {
      reject("Ocurrio un error. Por favor intente nuevamente.");
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmación) => {
  console.log(mensajeDeConfirmación);
};
const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

//Primera manera de usar el .then()
//miPedidoDePizza.then(manejarPedido, rechazarPedido);

//Segunda manera de usar el .then()
 miPedidoDePizza.then(manejarPedido).then(null, rechazarPedido);

 //Tercera manera de hacerlo con .catch() el cual es un método de promesa que solo se ejecuta si la promesa es rechazada.
 //miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);


 //Ejemplo 3: Otra manera de hacerlo es definir una función que en su return regrese una promesa.
 const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve("Operación terminada con exito.");
    } else {
      reject("Operación rechazada.");
    }
  });
 };

 //En este caso ejecutamos la función para que devuelva la promesa.
 anotherFunction()
  .then(respuesta => console.log(respuesta))
  .catch(error => console.warn(error));


