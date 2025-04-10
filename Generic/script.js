"use strict";
const Link = document.querySelector(".link");
Link?.href;
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook.nome);
}
handleData();
