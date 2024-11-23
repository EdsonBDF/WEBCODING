function fazerPedido() {
    const nome = document.querySelector("#nome").value.trim();
    if (!nome) {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    let sabor = document.querySelector("input[name='sabor']:checked");
    if (!sabor) {
        alert("Por favor, selecione o sabor da pizza.");
        return;
    }

    // Verificar o tamanho selecionado
    let selecionado = document.querySelector("input[name='tamanho']:checked");
    if (!selecionado) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    // Definir o valor do tamanho com base no valor selecionado
    let ValorTamanho = 0;
    switch (selecionado.value) {
        case "Pequena":
            ValorTamanho = 25;
            break;
        case "Média":
            ValorTamanho = 35;
            break;
        case "Grande":
            ValorTamanho = 50;
            break;
    }

    // Somar os adicionais
    let adicionais = document.querySelectorAll("input[name='adicionais']:checked");
    let valorAdicionais = adicionais.length * 5;

    // Calcular o valor total
    let valorTotal = ValorTamanho + valorAdicionais;

    // Atualizar o texto do valor total no HTML
    let elementoTotal = document.querySelector("#total h2 strong");
    elementoTotal.textContent = valorTotal.toFixed(0).replace(".", ",");
}



