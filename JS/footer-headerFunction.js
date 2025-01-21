document.addEventListener("DOMContentLoaded", () => {
    // Reordenar los elementos del contenedor en el encabezado
    const container = document.querySelector(".header__main-section-body");
    if (container) {
        const divs = container.children;
        if (divs.length >= 3) {
            const [firstDiv, secondDiv, thirdDiv] = divs;
            container.insertBefore(secondDiv, firstDiv);
            container.insertBefore(firstDiv, thirdDiv);
        }
    }

    // Observador para alinear el footer con "About KLM"
    const observerConfig = { childList: true, subtree: true };
    const alignFooterWithAboutKLM = () => {
        const aboutKLM = document.querySelector(
            ".footer .footer .flex.xl\\:w-8\\/12 .flex.flex-wrap.flex-col.py-3.ltr\\:pr-5.rtl\\:pl-5.w-full.md\\:w-auto.xl\\:flex-1:nth-child(1)"
        );
        const footerFlex = document.querySelector(
            "footer#footer .footer > .footer > .flex.flex-wrap.justify-center:nth-child(2)"
        );

        if (aboutKLM && footerFlex) {
            const aboutKLMWidth = aboutKLM.offsetLeft;
            footerFlex.style.marginLeft = `${aboutKLMWidth}px`;
            console.log("Se ha alineado el footer inferior con About KLM.");
        } else {
            console.error("No se encontraron todos los elementos necesarios para alinear el footer.");
        }
    };

    const observer = new MutationObserver((mutationsList, observer) => {
        const footerContainer = document.querySelector("footer .footer .footer");
        if (footerContainer) {
            console.log("Elemento footer .footer .footer encontrado. Desconectando el observer...");
            observer.disconnect();
            alignFooterWithAboutKLM();
        }
    });

    observer.observe(document.body, observerConfig);
    window.addEventListener("resize", alignFooterWithAboutKLM);
});
