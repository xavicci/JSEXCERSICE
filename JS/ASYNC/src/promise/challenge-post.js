import fetch from 'node-fetch';

let API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
const data = {
    "title": "New Product Xavi",
    "price": 669,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(resp => resp.json())
    .then(data => console.log(data));

API = 'https://api.escuelajs.co/api/v1/products/';

function updateData(urlApi, data) {
    return fetch(
        urlApi,
        {
            method: 'PUT',
            mode: 'cors',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        },
    );
}

const dataUpdate = {
    title: 'Red shirt updated',
    price: 300
};

updateData(`${API}217`, dataUpdate)
    .then(responde => responde.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

/* 
    Repasando algunas de las característica del protocolo http:
    .
    
    Los verbos indican acciones, estás acciones están asociadas a peticiones y recursos. En línea general sirve para la manipulación de recursos cliente/servidor. Los códigos de estados, los códigos son valores números que tienen un valor semántico.
    
    .
    Algunos Verbos http son:
    .
    GET → Sirve para solicitar recurso.
    POST → Sirve para la creación de recursos en el servidor.
    PUT → Sirve actualizar por completo un recurso.
    DELETE → Sirve para eliminar un recurso.
    .
    🔨 En el ejemplo de la clase se usa POST para guardar (enviar a la API) información en lugar de obtener con GET (recibir).
    .
    ⚠️ Hay permisos que se deben tomar en cuenta para que el intercambio sea seguro, hay que especificar el modo (mode), aquí se indica si se permite solicitudes de origen cruzado.
    .
    🔀 ¿Qué es un origen cruzado?
    .
    Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado “Cross Origin” es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la petición.
    Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas. En el enlace detallan más sobre el concepto de Cors
     */