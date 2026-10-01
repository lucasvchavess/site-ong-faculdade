export function mostrarAlertaFormulario(formulario) {

    let alerta =
        formulario.querySelector(".alerta-formulario");


    if (alerta) {
        return;
    }


    alerta = document.createElement("div");

    alerta.classList.add("alerta-formulario");

    alerta.setAttribute("role", "alert");

    alerta.setAttribute(
        "aria-atomic",
        "true"
    );

    alerta.textContent =
        "Existem campos que precisam ser corrigidos antes do envio.";


    const botaoEnviar =
        formulario.querySelector(
            'button[type="submit"]'
        );


    if (botaoEnviar) {

        botaoEnviar.before(alerta);

    } else {

        formulario.appendChild(alerta);

    }
}


export function removerAlertaFormulario(formulario) {

    const alerta =
        formulario.querySelector(
            ".alerta-formulario"
        );


    if (alerta) {
        alerta.remove();
    }
}


export function mostrarToastSucesso() {

    const toastAntigo =
        document.querySelector(
            ".toast-sucesso"
        );


    if (toastAntigo) {
        toastAntigo.remove();
    }


    const toast =
        document.createElement("div");


    toast.classList.add(
        "toast-sucesso"
    );


    toast.setAttribute(
        "role",
        "status"
    );

    toast.setAttribute(
        "aria-live",
        "polite"
    );

    toast.setAttribute(
        "aria-atomic",
        "true"
    );


    toast.textContent =
        "Cadastro realizado com sucesso!";


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 4000);
}