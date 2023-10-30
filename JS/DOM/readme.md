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

Bubbling es la forma en que se propaga desde lo más bajo hasta lo más alto

Básicamente la propagación de eventos se produce cuando tienes puestos algunos eventos en contenedores que son hijos de otro, por ejemplo:
<div id="div1">
    <div id="div2">
        <div id="div3">
            Hola
        </div>
    </div>
</div>
Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs.
.
La forma de deterlo es usando el método stopPropagation() que viene dentro del argumento event que cualquier evento nos provee, por tanto, yo puedo decirle al div3: “Oiga, yo solo lo quiero clicar a usted, no a los demás, sí, ya se que usted está dentro de los demás, pero yo solo lo quiero a usted”, de tal forma que al event listener del programation le puedo poner:

div3.addEventListener("click", event => {

    event.stopPropagation()

});
De esta forma, el evento de div2 y div1 no serán ejecutados


Como dato la diferencia entre target y currentTarget radica en que el primero hacer referencia al disparador del evento, donde debemos de interactuar para que este se ejecute. Por otro lado el currentTarget es el nodo padre en el que esta el disparador.

 appNode.addEventListener('click', (event) => {
    if(event.target.nodeName === 'H2'){
        window.alert("Hola");
    }
  
   });

Capturing.
Esta forma de propagación funciona al revés que bubling, va desde el elemento mas afuera, hasta el evento seleccionado, activando así todos los padres que contuviesen el mismo evento.

OJO
No confundir Capturing con está técnica enseñada en clases llamada Event delegation la segunda sigue utilizando la forma de propagación Bubling Solo que le adjunta el Escuchador de eventos al padre, para así reaccionar a todos los clicks dentro de este.

