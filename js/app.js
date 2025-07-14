function comprar() {
    const ingresso = document.getElementById("tipo-ingresso").value;
    const quantidade = parseInt(document.getElementById("qtd").value);

    if (!ingresso || isNaN(quantidade)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (quantidade <= 0) {
        alert("A quantidade deve ser maior que zero.");
        return;
    }

    // Obter os elementos com a quantidade disponível
    const qtdPista = document.getElementById("qtd-pista");
    const qtdSuperior = document.getElementById("qtd-superior");
    const qtdInferior = document.getElementById("qtd-inferior");

    if (ingresso === "pista") {
        let disponivel = parseInt(qtdPista.innerText);
        if (quantidade > disponivel) {
            alert("Quantidade solicitada indisponível para pista.");
            return;
        }
        qtdPista.innerText = disponivel - quantidade;
    } else if (ingresso === "superior") {
        let disponivel = parseInt(qtdSuperior.innerText);
        if (quantidade > disponivel) {
            alert("Quantidade solicitada indisponível para cadeira superior.");
            return;
        }
        qtdSuperior.innerText = disponivel - quantidade;
    } else if (ingresso === "inferior") {
        let disponivel = parseInt(qtdInferior.innerText);
        if (quantidade > disponivel) {
            alert("Quantidade solicitada indisponível para cadeira inferior.");
            return;
        }
        qtdInferior.innerText = disponivel - quantidade;
    } else {
        alert("Tipo de ingresso inválido.");
    }
}