function mascaraCPF(valor) {

    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}


function mascaraTelefone(valor) {

    return valor
        .replace(/\D/g, "")
        .slice(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}


function mascaraCEP(valor) {

    return valor
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2");
}


export function iniciarMascaras() {

    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");


    if (cpf) {
        cpf.addEventListener("input", (event) => {
            event.target.value = mascaraCPF(event.target.value);
        });
    }


    if (telefone) {
        telefone.addEventListener("input", (event) => {
            event.target.value = mascaraTelefone(event.target.value);
        });
    }


    if (cep) {
        cep.addEventListener("input", (event) => {
            event.target.value = mascaraCEP(event.target.value);
        });
    }
}