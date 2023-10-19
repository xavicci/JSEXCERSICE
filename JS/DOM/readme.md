# DOM

## NODOS
-> document.getElementById
-> parent.getElementByTagName
-> parent.getElementByClassName
-> parent.querySelector('.Class,#id,div') -> remite la primera coincidencia.
-> parent.querySelectorAll('.Class,#id,div') -> remite todas las coincidencias.

## NodeList
El nodelist producto del querySelectorAll no permite hacer operaciones como el array como el map filter u otros.
Se recomienda convertirlos en Array mediante la siguiente asignacion: [...nodelist]

### Para crear nodos
-> document.createElement("ELEMENTO")
-> document.createTextNode("Texto"); solo agregamos puros textos y lo interpreta como solo texto.

### Agregar nodos
-> parentElement.appendChild
-> parentElement.append
-> parentElement.insertBefore
-> parentElement.insertAdjacentElement

### Eliminar 
-> parentElement.removeChild
    ** padre.removeChild(nodoEliminar);
    ** nodoEliminar.parentElement; (me dara el padre directo de ese nodo)
-> document.remove
    ** nodoEliminar.remove(); es una version mejorada de removeChild
-> document.replaceChild
    ** padre.replaceChild(node, toReplace);

## CARGAS DE TRABAJO


for (let i=0; i<100; i++){
    const node = document.createElement('input');
    document.body.appendChild(node);
}
*************************************************
const nodos =[];

for (let i=0; i<100; i++){
    const node = document.createElement('input');
    nodos.push(node);
}

document.body.append(...nodos)