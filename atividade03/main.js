function calcularCompra(produto, numParcelas) {
    
    if (numParcelas < 0) {
        console.log("Número de parcelas não pode ser negativo.");
        return;
    }

    if (numParcelas === 0) {
        const valorComDesconto = produto.preco * 0.90;
        console.log(`Compra à vista! O valor final com 10% de desconto é: R$ ${valorComDesconto.toFixed(2)}`);
    }
    
    else if (numParcelas >= 1 && numParcelas <= 10) {
        const valorParcelado = produto.preco / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x! O valor de cada parcela será: R$ ${valorParcelado.toFixed(2)}`);
    }
    
    else if (numParcelas >= 11 && numParcelas <= 12) {
        const valorComJuros = produto.preco * 1.02;
        const valorParceladoComJuros = valorComJuros / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x com juros! O valor de cada parcela será: R$ ${valorParceladoComJuros.toFixed(2)}`);
    }

    else {
        console.log("Número de parcelas não permitido. O máximo é 12 parcelas.");
    }
}

const produto = {
    nome: "Celular",
    preco: 1200.00
};

calcularCompra(produto, 0);
calcularCompra(produto, 5);
calcularCompra(produto, 11);  
calcularCompra(produto, 15);  

