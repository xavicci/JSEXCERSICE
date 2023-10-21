# DOM

## NODOS
-> document.getElementById
-> parent.getElementByTagName
-> parent.getElementByClassName
-> parent.querySelector('.Class,#id,div') -> remite la primera coincidencia.
     ** const container = document.querySelector('div.py-5.text-center');
-> parent.querySelectorAll('.Class,#id,div') -> remite todas las coincidencias.

## NodeList
El nodelist producto del querySelectorAll no permite hacer operaciones como el array como el map filter u otros.
Se recomienda convertirlos en Array mediante la siguiente asignacion: [...nodelist]

### Para crear nodos
-> document.createElement("ELEMENTO")
    ** const h3 = document.createElement('h3');
-> document.createTextNode("Texto"); solo agregamos puros textos y lo interpreta como solo texto.
    ** const texto = document.createTextNode('holas');

### Agregar nodos
-> parentElement.appendChild
-> parentElement.append (se pueden agregar mas nodos al final)
    ** container.append('hola2',document.createElement('div));
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
### Otras formas
-> node.outerHTML(leer)     ::devuelve una cadena de texto incluido las etiquetas
-> node.innerHTML(escribir) ::devuelve la cadena que puede cambiar su contenido

La diferencia entre propiedades y atributos

ATRIBUTOS

Son definidos por el HTML (Ej: type, class, id, type…)
El valor del atributo es constante
Se utiliza para inicializar las propiedades del DOM
PROPIEDADES

Son definidos por el DOM (Ej: className, getElementById, getAttribute…)
El valor de la propiedad es variable
No finaliza al inicializarse el DOM

### Eliminar Nodos

--> parentElement.removeChild
    - Se puede utilizar el parentElement ej: nodoAEliminar.parentElement
--> document.remove
--> document.replaceChild


## EVENTOS
email.addEventListener('click', accion2)
email.removeEventListener('click',accion)

