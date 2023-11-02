const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'live_qd4zwtzwqw8BxJi9PSpIB31mnA3M63638gNbOm71P5MlRkoUUSLrwMcw7cJymcjV';

const URL = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_qd4zwtzwqw8BxJi9PSpIB31mnA3M63638gNbOm71P5MlRkoUUSLrwMcw7cJymcjV';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?api_key=live_qd4zwtzwqw8BxJi9PSpIB31mnA3M63638gNbOm71P5MlRkoUUSLrwMcw7cJymcjV';
const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';
const API_URL_FAVOURITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?api_key=live_qd4zwtzwqw8BxJi9PSpIB31mnA3M63638gNbOm71P5MlRkoUUSLrwMcw7cJymcjV`;

// fetch(URL)
//     .then(resp => resp.json())
//     .then(data => {

//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     })
const spanError = document.getElementById('error')

const buttoncat = document.querySelector('button');


const dataFetch = async (URL) => {

    const fetching = await fetch(URL);

    const data = await fetching.json();

    return data;
}


const loadRandomMichis = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    console.log('Random');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = "HUBO UN ERROR: " + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavouriteMichi(data[0].id);
        btn2.onclick = () => saveFavouriteMichi(data[1].id);
    }
}

const loadFavoritesMichis = async () => {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log('Favoritos');
    console.log(data);

    if (res.status !== 200) {
        spanError.innerHTML = "HUBO UN ERROR: " + res.status;
    } else {

        const section = document.getElementById('favoritesMichis');
        section.innerHTML = "";
        const h2 = document.createElement('h2');
        const h2text = document.createTextNode('Michis favoritos');
        h2.appendChild(h2text);
        section.appendChild(h2);

        data.forEach(michi => {

            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Sacar al michi de favoritos');

            btn.appendChild(btnText);
            img.src = michi.image.url;
            img.width = 150;
            btn.onclick = () => deleteFavouriteMichi(michi.id);
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);

        });
    }
}

async function saveFavouriteMichi(id) {
    // const rest = await fetch(API_URL_FAVOURITES, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         image_id: id
    //     }),
    // });

    const { data, status } = await api.post('/favourites', {
        image_id: id,
    });

    console.log('Save');
    console.log(data);

    if (status !== 200) {
        spanError.innerHTML = "Hubo un error: " + status;
    } else {
        console.log('Michi guardado en favoritos')
        loadFavoritesMichis();
    }
}

async function deleteFavouriteMichi(id) {
    const rest = await fetch(API_URL_FAVOURITES_DELETE(id), {
        method: 'DELETE',
    });

    const data = await rest.json();

    if (rest.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + rest.status;
    } else {
        console.log('Michi eliminado de favoritos')
        loadFavoritesMichis();
    }

}
async function uploadMichiPhoto() {
    const form = document.getElementById('uploadingForm');
    const formData = new FormData(form);

    const res = await fetch(API_URL_UPLOAD, {
        method: 'POST',
        headers: {
            'X-API-KEY': 'live_qd4zwtzwqw8BxJi9PSpIB31mnA3M63638gNbOm71P5MlRkoUUSLrwMcw7cJymcjV'
            // 'Content-Type': 'multipart/form-data'
        },
        body: formData,
    })

    const data = await res.json();

    if (res.status !== 201) {
        spanError.innerHTML = `Hubo un error al subir michi: ${res.status} ${data.message}`
    }
    else {
        console.log("Foto de michi cargada :)");
        console.log({ data });
        console.log(data.url);
        saveFavouriteMichi(data.id) //para agregar el michi cargado a favoritos.
    }
}
loadFavoritesMichis();
loadRandomMichis();

buttoncat.addEventListener('click', loadRandomMichis);