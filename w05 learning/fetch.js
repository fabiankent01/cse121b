// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/Ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}

async function getPokemonList(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${data.name}</h2>
                            <img src="${data.sprites.front_default}" alt="${data.name} image">`
    outputElement.innerHTML = html;
}

function doStuffList(data) {
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;

    pokeList.forEach((item) => {
        const html = `<li>${item.name}</li>`;
        pokeListElement.innerHTML += html;
    });
} 
getPokemon(url);
getPokemonList(urlList); 