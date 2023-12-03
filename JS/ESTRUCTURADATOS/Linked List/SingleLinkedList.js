/* Las listas enlazadas sencillas tienen una serie de ventajas sobre otras estructuras de datos, como las matrices:

Inserción y eliminación eficientes: Las listas enlazadas permiten insertar y eliminar nodos en cualquier posición de la lista en tiempo constante. Esto se debe a que no es necesario desplazar los elementos restantes de la lista para acomodar el nuevo o elemento eliminado.
Tamaño dinámico: Las listas enlazadas no tienen un tamaño fijo, por lo que pueden crecer y decrecer dinámicamente según sea necesario. Esto las hace adecuadas para aplicaciones en las que el tamaño de la lista puede ser desconocido o variable.
Flexibilidad: Las listas enlazadas se pueden utilizar para implementar una variedad de otras estructuras de datos, como pilas, colas y grafos. */

// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedLis = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MySinglyLinkedList {
    constructor(value) {
        // creamos el inicio de nuestro SinglyLinkedList
        this.head = {
            value,
            next: null,
        };

        // Aqui sucede la magia ✨
        // Todo lo que modifiquemos en los atributos de tail
        // se modificará en la estructura inicial
        // por la RERENCIA!
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        // aquí estamos creando un nuevo nodo
        const newNode = new Node(value);

        // Como mencionamos anteriormente
        // si modificamos la cola por la REFERENCIA
        // se modificará la estructura inicial! 🖊
        this.tail.next = newNode;
        // Pero aun tail sigue apuntando a la CABEZA
        // de la estructura inicial entonces es momento
        // de apuntar al nuevo nodo creado para que posteriormente
        // podamos agregar más nodos! 🚀
        this.tail = newNode;
        // Finalmente aumentamos el tamaño definido de
        // nuestra estructura 👨‍🔧
        this.length++;

        return this;

    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    delete(index) {
        if (index <= 0) return this.shift();
        if (index >= this.length) return this.pop();
        const prevDeletedNode = this.getTheIndex(index - 1);
        prevDeletedNode.next = prevDeletedNode.next.next;
        this.length--;

        return this;
    }

    shift() {
        const secondNode = this.head.next;
        this.head = secondNode;
        this.length--;

        return this;
    }

    pop() {
        const prevLastNode = this.getTheIndex(this.length - 2);
        this.tail = prevLastNode;
        prevLastNode.next = null;
        this.length--;

        return this;
    }
}

let myLikedList = new MySinglyLinkedList(1);
console.log(myLikedList);
console.log(myLikedList.append(2));
console.log(myLikedList.prepend(0));