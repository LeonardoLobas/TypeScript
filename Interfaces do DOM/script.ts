const links = document.querySelectorAll(".link");

links.forEach((item) => {
    if (item instanceof HTMLElement) {
        ativarElemento(item);
    }
});

function ativarElemento(elemento: HTMLElement) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
