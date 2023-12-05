/* Una hashtable en JavaScript es una estructura de datos que permite almacenar pares de valores clave-valor. Los pares se pueden recuperar rápidamente a través del hash correspondiente.

Las hashtables se utilizan para una variedad de propósitos en JavaScript, incluyendo:

Almacenamiento de datos: Las hashtables se pueden utilizar para almacenar datos de forma eficiente, ya que permiten recuperar los valores rápidamente. Esto las hace ideales para aplicaciones como la gestión de sesiones y el almacenamiento de preferencias del usuario.
Búsqueda: Las hashtables se pueden utilizar para buscar datos rápidamente. Esto las hace ideales para aplicaciones como la búsqueda de productos en una tienda online o la búsqueda de empleados en una base de datos.
Mapeo: Las hashtables se pueden utilizar para mapear un valor a otro. Esto las hace ideales para aplicaciones como la traducción de idiomas o la conversión de unidades de medida. */

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        //* obtengo el hash del address
        const address = this.hashMethod(key)
        //* Obtengo el bucket donde debo buscar el espacio a eliminar
        const currentBucket = this.data[address]

        if (currentBucket) {
            //* recorriendo el espacio
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    //* guardo el espacio para retornarlo luego
                    let deletedSpace = currentBucket[i]
                    //* elimino el espacio
                    delete currentBucket[i]
                    //* elimino el espacio vacio para que los demas espacios recorran
                    currentBucket.splice(i, 1)
                    return deletedSpace
                }
            }
        }
    }

    getAllKeys() {
        const array = this.data
        let key = []

        array.forEach((e) => {
            e.forEach((k) => {
                key.push(k[0]);
            })
        });
        return key;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);

console.log(myHashTable.get("Diego"));

/* console.log(myHashTable.set("manzana", 1990));
console.log(myHashTable.hashMethod('manzana'));
console.log(myHashTable.data);
console.log(myHashTable.data[3]); */


/* const arreglo = ['a', 'b', 'c', 'd']
console.log(arreglo[0])
console.log(arreglo[1])
console.log(arreglo[2])
console.log(arreglo[3])
console.log(arreglo[4])
console.log(arreglo["XF"])
console.log(arreglo["XF"] = "ert")
console.log(arreglo["XF"])
console.log(arreglo)
console.log(arreglo.length) */
