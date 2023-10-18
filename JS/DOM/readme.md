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