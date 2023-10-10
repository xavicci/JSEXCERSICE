// Funciones de flecha:

// No tienen this  --> que es this?
// Si se accede a this, se toma el contexto del exterior.
// No tienen arguments --> 
// No se pueden llamar con new

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        );
    }
};
group.showList();

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function wrapper(func, time) {
    console.log(`mi tiempo es de ${time}`)
    return function () {
        setTimeout(() => {
            func.apply(this, arguments)
        }, time);
    }
}

function SoyLaFuncion(...argumentos) {
    // const arg = [...args];
    // const long = arg.length;
    // const frase = `Hola el argumento que paso es: ${args[0]} ${long} ${arg[0]} y ${arg[1]} o ${arg[2]}`;
    // console.log(frase);
    argumentos.forEach(arg => console.log(arg));
}

const usandoDecorador = wrapper(SoyLaFuncion, 1000);
usandoDecorador("hakuna", "ostiatia", "Mi mega Argumento", "segundoargumento", "tres");

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
