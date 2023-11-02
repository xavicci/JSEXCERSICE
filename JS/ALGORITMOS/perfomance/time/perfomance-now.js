function contar(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
    }
}

let inicio_tiempo = performance.now();
contar(5);
performance.now();
let final_tiempo = performance.now();

let duracion = final_tiempo - inicio_tiempo;
console.log(`El algoritmo contar ha durado: ${duracion}`)