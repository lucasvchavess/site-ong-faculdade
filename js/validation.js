import { salvarCadastro } from "./storage.js";

import {
    mostrarAlertaFormulario,
    removerAlertaFormulario,
    mostrarToastSucesso
} from "./feedback.js";


// ======================================================
// MOSTRAR ERRO
// ======================================================

function mostrarErro(input, mensagem) {

    const campo = input.closest(".campo");

    if (!campo) {
        return;
    }


    campo.classList.add("erro");


    let mensagemErro =
        campo.querySelector(".mensagem-erro");


    if (!mensagemErro) {

        mensagemErro =
            document.createElement("small");

        mensagemErro.classList.add(
            "mensagem-erro"
        );

        mensagemErro.id =
            `${input.id}-erro`;

        campo.appendChild(
            mensagemErro
        );
    }


    mensagemErro.textContent =
        mensagem;


    input.setAttribute(
        "aria-invalid",
        "true"
    );

    input.setAttribute(
        "aria-describedby",
        mensagemErro.id
    );
}


// ======================================================
// REMOVER ERRO
// ======================================================

function removerErro(input) {

    const campo =
        input.closest(".campo");


    if (!campo) {
        return;
    }


    campo.classList.remove("erro");


    const mensagemErro =
        campo.querySelector(
            ".mensagem-erro"
        );


    if (mensagemErro) {
        mensagemErro.remove();
    }


    input.removeAttribute(
        "aria-invalid"
    );

    input.removeAttribute(
        "aria-describedby"
    );
}


// ======================================================
// NOME
// ======================================================

function validarNome(input) {

    const nome =
        input.value.trim();


    if (nome.length < 3) {

        mostrarErro(
            input,
            "Digite seu nome completo."
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// E-MAIL
// ======================================================

function validarEmail(input) {

    const email =
        input.value.trim();


    const padraoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!padraoEmail.test(email)) {

        mostrarErro(
            input,
            "Digite um e-mail válido."
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// CPF
// ======================================================

function validarCPF(input) {

    const cpf =
        input.value.trim();


    const padraoCPF =
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;


    if (!padraoCPF.test(cpf)) {

        mostrarErro(
            input,
            "Digite o CPF completo."
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// TELEFONE
// ======================================================

function validarTelefone(input) {

    const telefone =
        input.value.trim();


    const padraoTelefone =
        /^\(\d{2}\) \d{5}-\d{4}$/;


    if (!padraoTelefone.test(telefone)) {

        mostrarErro(
            input,
            "Digite um telefone válido."
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// CEP
// ======================================================

function validarCEP(input) {

    const cep =
        input.value.trim();


    const padraoCEP =
        /^\d{5}-\d{3}$/;


    if (!padraoCEP.test(cep)) {

        mostrarErro(
            input,
            "Digite o CEP completo."
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// TEXTO OBRIGATÓRIO
// ======================================================

function validarTextoObrigatorio(
    input,
    mensagem
) {

    if (input.value.trim() === "") {

        mostrarErro(
            input,
            mensagem
        );

        return false;
    }


    removerErro(input);

    return true;
}


// ======================================================
// ESTADO
// ======================================================

function validarEstado(select) {

    if (select.value === "") {

        mostrarErro(
            select,
            "Selecione um estado."
        );

        return false;
    }


    removerErro(select);

    return true;
}


// ======================================================
// ÁREA DE INTERESSE
// ======================================================

function validarInteresse(formulario) {

    const radios =
        formulario.querySelectorAll(
            'input[name="interesse"]'
        );


    if (!radios.length) {
        return false;
    }


    const fieldset =
        radios[0].closest("fieldset");


    if (!fieldset) {
        return false;
    }


    const selecionado =
        [...radios].some(
            (radio) => radio.checked
        );


    let mensagemErro =
        fieldset.querySelector(
            ".mensagem-erro"
        );


    if (!selecionado) {

        fieldset.classList.add(
            "erro-grupo"
        );


        radios.forEach((radio) => {

            radio.setAttribute(
                "aria-invalid",
                "true"
            );

        });


        if (!mensagemErro) {

            mensagemErro =
                document.createElement("small");


            mensagemErro.classList.add(
                "mensagem-erro"
            );


            mensagemErro.id =
                "interesse-erro";


            mensagemErro.textContent =
                "Selecione uma área de interesse.";


            fieldset.appendChild(
                mensagemErro
            );
        }


        radios.forEach((radio) => {

            radio.setAttribute(
                "aria-describedby",
                "interesse-erro"
            );

        });


        return false;
    }


    fieldset.classList.remove(
        "erro-grupo"
    );


    if (mensagemErro) {
        mensagemErro.remove();
    }


    radios.forEach((radio) => {

        radio.removeAttribute(
            "aria-invalid"
        );

        radio.removeAttribute(
            "aria-describedby"
        );

    });


    return true;
}


// ======================================================
// TERMOS
// ======================================================

function validarTermos(checkbox) {

    const container =
        checkbox.closest(".termos");


    if (!container) {
        return false;
    }


    let mensagemErro =
        container.querySelector(
            ".mensagem-erro"
        );


    if (!checkbox.checked) {

        container.classList.add("erro");


        checkbox.setAttribute(
            "aria-invalid",
            "true"
        );


        if (!mensagemErro) {

            mensagemErro =
                document.createElement("small");


            mensagemErro.classList.add(
                "mensagem-erro"
            );


            mensagemErro.id =
                "termos-erro";


            mensagemErro.textContent =
                "Você precisa aceitar os termos.";


            container.appendChild(
                mensagemErro
            );
        }


        checkbox.setAttribute(
            "aria-describedby",
            "termos-erro"
        );


        return false;
    }


    container.classList.remove("erro");


    if (mensagemErro) {
        mensagemErro.remove();
    }


    checkbox.removeAttribute(
        "aria-invalid"
    );

    checkbox.removeAttribute(
        "aria-describedby"
    );


    return true;
}


// ======================================================
// CONFIGURAR CAMPO
// ======================================================

function configurarCampo(
    input,
    funcaoValidacao
) {

    if (!input) {
        return;
    }


    input.addEventListener(
        "blur",
        () => {

            funcaoValidacao(input);

        }
    );


    input.addEventListener(
        "input",
        () => {

            const campo =
                input.closest(".campo");


            if (
                campo &&
                campo.classList.contains("erro")
            ) {

                funcaoValidacao(input);

            }

        }
    );
}


// ======================================================
// INICIAR VALIDAÇÃO
// ======================================================

export function iniciarValidacao() {

    const formulario =
        document.querySelector(
            "#formulario form"
        );


    if (!formulario) {
        return;
    }


    const nome =
        formulario.querySelector("#nome");

    const email =
        formulario.querySelector("#email");

    const cpf =
        formulario.querySelector("#cpf");

    const telefone =
        formulario.querySelector("#telefone");

    const cep =
        formulario.querySelector("#cep");

    const endereco =
        formulario.querySelector("#endereco");

    const cidade =
        formulario.querySelector("#cidade");

    const estado =
        formulario.querySelector("#estado");

    const mensagem =
        formulario.querySelector("#mensagem");

    const termos =
        formulario.querySelector("#termos");

    const radiosInteresse =
        formulario.querySelectorAll(
            'input[name="interesse"]'
        );


// ======================================================
// CAMPOS DE TEXTO
// ======================================================

    configurarCampo(
        nome,
        validarNome
    );


    configurarCampo(
        email,
        validarEmail
    );


    configurarCampo(
        cpf,
        validarCPF
    );


    configurarCampo(
        telefone,
        validarTelefone
    );


    configurarCampo(
        cep,
        validarCEP
    );


    configurarCampo(
        endereco,
        (input) =>
            validarTextoObrigatorio(
                input,
                "Digite seu endereço."
            )
    );


    configurarCampo(
        cidade,
        (input) =>
            validarTextoObrigatorio(
                input,
                "Digite sua cidade."
            )
    );


// ======================================================
// ESTADO
// ======================================================

    if (estado) {

        estado.addEventListener(
            "change",
            () => {

                validarEstado(estado);

            }
        );

    }


// ======================================================
// INTERESSE
// ======================================================

    radiosInteresse.forEach(
        (radio) => {

            radio.addEventListener(
                "change",
                () => {

                    validarInteresse(
                        formulario
                    );

                }
            );

        }
    );


// ======================================================
// TERMOS
// ======================================================

    if (termos) {

        termos.addEventListener(
            "change",
            () => {

                validarTermos(termos);

            }
        );

    }


// ======================================================
// SUBMIT
// ======================================================

    formulario.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const validacoes = [

                nome
                    ? validarNome(nome)
                    : false,

                email
                    ? validarEmail(email)
                    : false,

                cpf
                    ? validarCPF(cpf)
                    : false,

                telefone
                    ? validarTelefone(telefone)
                    : false,

                cep
                    ? validarCEP(cep)
                    : false,

                endereco
                    ? validarTextoObrigatorio(
                        endereco,
                        "Digite seu endereço."
                    )
                    : false,

                cidade
                    ? validarTextoObrigatorio(
                        cidade,
                        "Digite sua cidade."
                    )
                    : false,

                estado
                    ? validarEstado(estado)
                    : false,

                validarInteresse(
                    formulario
                ),

                termos
                    ? validarTermos(termos)
                    : false

            ];


            const formularioValido =
                validacoes.every(
                    (resultado) =>
                        resultado === true
                );


            if (!formularioValido) {

                mostrarAlertaFormulario(
                    formulario
                );


                const primeiroErro =
                    formulario.querySelector(
                        '[aria-invalid="true"]'
                    );


                if (primeiroErro) {
                    primeiroErro.focus();
                }


                return;
            }


// ======================================================
// MONTAR CADASTRO
// ======================================================

            removerAlertaFormulario(
                formulario
            );


            const interesseSelecionado =
                formulario.querySelector(
                    'input[name="interesse"]:checked'
                );


            const dadosCadastro = {

                id: Date.now(),

                nome:
                    nome.value.trim(),

                email:
                    email.value.trim(),

                cpf:
                    cpf.value.trim(),

                telefone:
                    telefone.value.trim(),

                cep:
                    cep.value.trim(),

                endereco:
                    endereco.value.trim(),

                cidade:
                    cidade.value.trim(),

                estado:
                    estado.value,

                interesse:
                    interesseSelecionado.value,

                mensagem:
                    mensagem
                        ? mensagem.value.trim()
                        : "",

                dataCadastro:
                    new Date().toISOString()

            };


// ======================================================
// SALVAR E FINALIZAR
// ======================================================

            salvarCadastro(
                dadosCadastro
            );


            mostrarToastSucesso();


            formulario.reset();

        }
    );
}