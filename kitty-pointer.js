document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const kittyPointer = document.getElementById("kitty-pointer");

    body.addEventListener("mousemove", function (e) {
        kittyPointer.style.left = e.pageX + "px";
        kittyPointer.style.top = e.pageY + "px";
    });

    body.addEventListener("mouseenter", function () {
        kittyPointer.classList.add("rainbow-effect");
    });

    body.addEventListener("mouseleave", function () {
        kittyPointer.classList.remove("rainbow-effect");
    });
});
