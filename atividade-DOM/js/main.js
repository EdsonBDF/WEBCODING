function mudarBG(cor) {
    document.body.style.backgroundColor = cor;
    
    const h1 = document.querySelector('h1');
    
    if (cor === 'black' || cor === '#000000' || cor === 'Black' || cor === 'BLACK') {
        h1.style.color = 'white';
    } else if (cor === 'white' || cor === '#FFFFFF' || cor === 'White' || cor === 'WHITE') {
        h1.style.color = 'black';
    } else {
        h1.style.color = ''; // Mantém a cor padrão
    }
}

// Solicita ao usuário que insira uma cor
const corEscolhida = prompt('Digite o nome ou um número hexadecimal da cor (ex: #565656) para trocar a cor do fudo da página:');
mudarBG(corEscolhida);

