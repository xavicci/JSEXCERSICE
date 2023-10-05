const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xttp = new XMLHttpRequest();

    xttp.open('GET', urlApi, true);
    xttp.onreadystatechange = function (event) {
        if (xttp.readyState === 4) {
            if (xttp.status === 200) {
                callback(null, JSON.parse(xttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xttp.send();
}
