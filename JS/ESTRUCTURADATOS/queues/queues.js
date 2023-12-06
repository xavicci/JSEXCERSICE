/* Un queue básicamente es una cola (o una fila para entenderlo mejor), esto es simple de entender porque nosotros las usamos diariamente sin darnos cuenta, como cuando nos formamos para acceder a un lugar por ejemplo. . Un queue es de tipo FIFO (First In First Out). First In (El primero que entra) First Out (Es el primero que sale). .
MEtodos:
- enqueue: Agregar un elementno al final de la linea
- dequeue: Remover al primer elemento de la linea
- peek: Tomar el primer elemento de la linea.

 */

class Node {
    constructor(value) {
        this.value = value;
        // this.value = value;
        this.next = null;
        // this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;

        return this;
    }
}

const myQueue = new Queue();