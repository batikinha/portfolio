document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const kittyPointer = document.getElementById("kitty-pointer");

    body.addEventListener("mousemove", function (e) {
        // Posiciona o ponteiro de gatinho nas coordenadas do cursor
        kittyPointer.style.left = e.pageX + "px";
        kittyPointer.style.top = e.pageY + "px";
    });

    body.addEventListener("mouseenter", function () {
        // Adiciona efeito de arco-íris quando o mouse entra na tela
        kittyPointer.classList.add("rainbow-effect");
    });

    body.addEventListener("mouseleave", function () {
        // Remove o efeito de arco-íris quando o mouse sai da tela
        kittyPointer.classList.remove("rainbow-effect");
    });
});
