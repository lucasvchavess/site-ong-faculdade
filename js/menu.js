export function iniciarMenu() {

    const botaoMenu =
        document.querySelector(".menu-toggle");

    const navegacao =
        document.querySelector(".main-navigation");


    if (!botaoMenu || !navegacao) {
        return;
    }


    botaoMenu.addEventListener("click", () => {

        const menuAberto =
            navegacao.classList.toggle("ativo");


        botaoMenu.classList.toggle("ativo");


        botaoMenu.setAttribute(
            "aria-expanded",
            menuAberto
        );


        botaoMenu.setAttribute(
            "aria-label",
            menuAberto
                ? "Fechar menu"
                : "Abrir menu"
        );

    });


    navegacao.addEventListener("click", (event) => {

        const link =
            event.target.closest("a");


        if (!link) {
            return;
        }


        navegacao.classList.remove("ativo");

        botaoMenu.classList.remove("ativo");


        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );


        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

}