/* Una hashtable en JavaScript es una estructura de datos que permite almacenar pares de valores clave-valor. Los pares se pueden recuperar rápidamente a través del hash correspondiente.

Las hashtables se utilizan para una variedad de propósitos en JavaScript, incluyendo:

Almacenamiento de datos: Las hashtables se pueden utilizar para almacenar datos de forma eficiente, ya que permiten recuperar los valores rápidamente. Esto las hace ideales para aplicaciones como la gestión de sesiones y el almacenamiento de preferencias del usuario.
Búsqueda: Las hashtables se pueden utilizar para buscar datos rápidamente. Esto las hace ideales para aplicaciones como la búsqueda de productos en una tienda online o la búsqueda de empleados en una base de datos.
Mapeo: Las hashtables se pueden utilizar para mapear un valor a otro. Esto las hace ideales para aplicaciones como la traducción de idiomas o la conversión de unidades de medida. */

class HashTable {
    constructor(size) {
        this.data = new Array(size);
        this.letters = "new Array(size)";
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    retorno() {
        return this;
    }


}

const newHash = new HashTable(4);
console.log(newHash);
console.log(newHash.data);
console.log(newHash.retorno());