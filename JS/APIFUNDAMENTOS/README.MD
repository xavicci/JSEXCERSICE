# Que es una API REST

Las API son Interfaces de Programación de Aplicaciones, simplifican el desarrollo de aplicaciones al permitir que estas intercambien datos y funcionalidades de una forma fácil y segura.

Así es como funciona una API:

Una aplicación cliente inicia una llamada a la API para recuperar información, también conocida como solicitud(Request).
Esta solicitud se procesa desde una aplicación al servidor web a través del Identificador de Recursos Uniforme (URI) de la API e incluyen un verbo de petición como GET, POST, PUT o DEL, encabezados(headers), y a veces un cuerpo de petición(body).
Después de recibir una solicitud válida, la API hace un llamado a un programa externo o un servidor web.
El servidor envía una respuesta (Response) a la API con la información solicitada.
La API transfiere los datos a la aplicación solicitante inicial.
Soap es con XHR = XMLHttpResponse y aun algunas apps lo usan.
La transferencia de estado representacional (REST) es una arquitectura de software que impone condiciones sobre cómo debe funcionar una API. En un principio, REST se creó como una guía para administrar la comunicación en una red compleja como Internet. Es posible utilizar una arquitectura basada en REST para admitir comunicaciones confiables y de alto rendimiento a escala. Puede implementarla y modificarla fácilmente, lo que brinda visibilidad y portabilidad entre plataformas a cualquier sistema de API.
También, REST no solo retorna la información en JSON, JSON es lo más usual pero también lo puede retornar en XML y en texto plano.

Server Side Rendering (SSR) es el flujo de comunicación entre frontend y backend (servidor), el usuario a través de un navegador web hace una petición a un servidor y este devuelve una respuesta en html (carga completa de una página web)
Single Page Application (SPA) es el flujo de comunicación entre frontend y backend que se da gracias a JS, con el cual podemos manipular el DOM sin tener que cargar la página completa, el usuario hace una petición al backend (API) a través de una API REST, la API consulta a una base de datos y obtiene una respuesta, esta regresa en formato JSON y es insertada al html modificando el DOM.