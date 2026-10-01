export function obterCadastros() {

    const dadosSalvos =
        localStorage.getItem("voluntarios");


    if (!dadosSalvos) {
        return [];
    }


    try {

        return JSON.parse(dadosSalvos);

    } catch (erro) {

        console.error(
            "Erro ao ler os cadastros salvos:",
            erro
        );

        return [];

    }
}


export function salvarCadastro(dados) {

    const voluntarios =
        obterCadastros();


    voluntarios.push(dados);


    localStorage.setItem(
        "voluntarios",
        JSON.stringify(voluntarios)
    );

}