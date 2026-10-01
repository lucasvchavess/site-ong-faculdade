const projetos = [
    {
        titulo: "Alimentação para Todos",
        descricao:
            "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
        imagem: "assets/images/alimentacao.webp",
        alt: "Uma mulher entregando alimento para uma mãe com dois filhos"
    },

    {
        titulo: "Caminhos da Educação",
        descricao:
            "Apoio educacional e distribuição de materiais escolares para crianças e adolescentes.",
        imagem: "assets/images/educacao.webp",
        alt: "Dois voluntários auxiliando as crianças em uma sala de aula"
    },

    {
        titulo: "Comunidade em Ação",
        descricao:
            "Atividades e ações sociais voltadas ao desenvolvimento e fortalecimento das comunidades.",
        imagem: "assets/images/comunidade.webp",
        alt: "Pessoas pintando a parede de uma comunidade e fazendo plantações"
    }
];


export function renderizarProjetos() {

    const container =
        document.querySelector("#lista-projetos");


    if (!container) {
        return;
    }


    container.innerHTML = projetos
        .map((projeto) => {

            return `
                <article class="card">

                    <img
                        src="${projeto.imagem}"
                        alt="${projeto.alt}"
                        loading="lazy"
                    >

                    <div class="conteudo-card">

                        <h3>
                            ${projeto.titulo}
                        </h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                        <a
                            class="btn-projeto"
                            href="#projetos"
                            data-route="projetos"
                        >
                            Conhecer o projeto

                            <img
                                src="assets/images/arrow-btn.svg"
                                alt=""
                            >
                        </a>

                    </div>

                </article>
            `;

        })
        .join("");
}