Algoritmos 01/11/2023

# Que es un algoritmo?

Es una solucion a un problema.
el tiempo es un factor mas importante en JavaScript

Complejidad: estudia el consumo de recursos que un algoritmo ocupa en espacio y tiempo y el crecimiento de los recursos.

La complejidad espacial, se encarga de calcular cuanto espacio en memoria puede ocupar un algoritmo, a parte del espacio ocupado por los datos de entrada, existe el espacio auxiliar, el cual es el espacio creado por el mismo algoritmo para hacer otro procesos, por ejemplo: filtrar un array, hacer un sort de números, etc. El espacio auxiliar incluso puede llegar a hacer mucho más grande que el espacio de los datos de entrada, y está relacionado al algoritmo mas que a los datos recibos.

Complejidad temporal: cuanto se demora un algoritmo en terminar.
Complejidad espacial: cuanta memoria operativa (RAM usualmente) es requerida por el algoritmo.

La medida del tiempo tiene que ser independiente:
– de la máquina
– del lenguaje de programación
– del compilador
– de cualquier otro elemento hardware o software que influya en el análisis.

La complejidad temporal trata de medir la eficiencia de un algoritmo conforme la cantidad de datos de entrada va aumentando.

¿Cómo medimos un recurso?
⌚ En Complejidad Temporal podemos usar funciones como performance.now y console.time para medir el tiempo en que se ejecuta un algoritmo.

🌌 En Complejidad Espacial es diferente. Cada compilador asigna un espacio distinto de memoria para almacenar números o palabras.

📦 La diversidad de tamaños y formas con las que el compilador almacena información es interesante, pero para el propósito que tenemos, podemos simplificarlo a contar cuántas variables se definen para almacenar arreglos, números o cadenas.