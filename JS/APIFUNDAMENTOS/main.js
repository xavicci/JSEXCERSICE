console.log("HELLO WORLD");

const URL = 'https://api.thecatapi.com/v1/images/search';

// fetch(URL)
//     .then(resp => resp.json())
//     .then(data => {

//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     })

const buttoncat = document.querySelector('button');
const img = document.querySelector('img');

const dataFetch = async (URL) => {

    const fetching = await fetch(URL);

    const data = await fetching.json();

    const urlfetch = data[0].url;

    return urlfetch;
}


const viewcats = async () => {
    img.src = await dataFetch(URL);
}

viewcats();

buttoncat.addEventListener('click', viewcats);
