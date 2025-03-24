function ativarMenu(event: Event) {
    console.log(event.type);
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);
