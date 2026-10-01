import { renderizarProjetos } from "./templates.js";
import { iniciarMascaras } from "./masks.js";
import { iniciarValidacao } from "./validation.js";


const routes = {
    home: "html/home.html",
    projetos: "html/projetos.html",
    cadastro: "html/cadastro.html"
};


const titulos = {
    home: "Instituto Novo Elo",
    projetos: "Projetos | Instituto Novo Elo",
    cadastro: "Seja um Voluntário | Instituto Novo Elo"
};


// Impede o navegador de restaurar sozinho
// a posição anterior do scroll
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}


async function carregarPagina(rota) {

    const app =
        document.querySelector("#app");


    if (!app) {
        return;
    }


    const rotaValida =
        routes[rota] ? rota : "home";


    const pagina =
        routes[rotaValida];


    try {

        const resposta =
            await fetch(pagina);


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar a página."
            );

        }


        const html =
            await resposta.text();


        app.innerHTML = html;


        document.title =
            titulos[rotaValida];


        // =========================================
        // HOME
        // =========================================

        if (rotaValida === "home") {

            renderizarProjetos();

        }


        // =========================================
        // CADASTRO
        // =========================================

        if (rotaValida === "cadastro") {

            iniciarMascaras();

            iniciarValidacao();


            const botaoFormulario =
                document.querySelector(
                    "#btn-ir-formulario"
                );


            if (botaoFormulario) {

                botaoFormulario.addEventListener(
                    "click",
                    () => {

                        const formulario =
                            document.querySelector(
                                "#formulario"
                            );


                        if (formulario) {

                            formulario.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }
                );

            }

        }


        // =========================================
        // VOLTAR PARA O TOPO
        // =========================================

        requestAnimationFrame(() => {

            window.scrollTo(0, 0);

            document.documentElement.scrollTop = 0;

            document.body.scrollTop = 0;


            // Foco acessível no conteúdo da nova página
            app.focus({
                preventScroll: true
            });

        });


    } catch (erro) {

        console.error(erro);


        app.innerHTML = `
            <section>
                <h1>Erro ao carregar a página</h1>
                <p>Tente novamente.</p>
            </section>
        `;

    }
}


export function iniciarRouter() {

    function atualizarPagina() {

        const rota =
            window.location.hash.replace(
                "#",
                ""
            ) || "home";


        carregarPagina(rota);

    }


    document.addEventListener(
        "click",
        (event) => {

            const link =
                event.target.closest(
                    "[data-route]"
                );


            if (!link) {
                return;
            }


            event.preventDefault();


            const rota =
                link.dataset.route;


            window.location.hash =
                rota;

        }
    );


    window.addEventListener(
        "hashchange",
        atualizarPagina
    );


    atualizarPagina();
}