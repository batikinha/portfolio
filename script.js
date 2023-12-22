document.addEventListener("DOMContentLoaded", function () {
    // Função para animação de fadeIn nas seções
    function fadeIn(element, duration) {
        element.style.opacity = 0;
        let start = null;

        function fade(time) {
            if (!start) start = time;
            const progress = time - start;
            const opacityValue = progress / duration;
            element.style.opacity = Math.min(opacityValue, 1);

            if (progress < duration) {
                requestAnimationFrame(fade);
            }
        }

        requestAnimationFrame(fade);
    }

    // Adiciona a animação de fadeIn a todas as seções
    const sections = document.querySelectorAll("section");
    sections.forEach(function (section) {
        fadeIn(section, 1000);
    });

    // Adiciona animação de destaque ao link do menu quando o mouse passa por cima
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.color = "#ff9999"; // Tom mais claro de rosa
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "#ff6666"; // Restaura a cor original
        });
    });
});
