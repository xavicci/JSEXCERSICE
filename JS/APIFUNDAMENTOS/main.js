console.log("HELLO WORLD");

const URL = 'https://api.thecatapi.com/v1/images/search?limit=3';

// fetch(URL)
//     .then(resp => resp.json())
//     .then(data => {

//         const img = document.querySelector('img');
//         img.src = data[0].url;
//     })

const buttoncat = document.querySelector('button');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

const dataFetch = async (URL) => {

    const fetching = await fetch(URL);

    const data = await fetching.json();

    return data;
}


const viewcats = async () => {
    images = await dataFetch(URL);
    img1.src = images[0].url
    img2.src = images[1].url
    img3.src = images[2].url
}

viewcats();

buttoncat.addEventListener('click', viewcats);
