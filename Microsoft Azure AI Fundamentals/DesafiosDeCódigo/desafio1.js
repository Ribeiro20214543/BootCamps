//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
function simularJornada(posicaoInicial, totalPassos) {
    const posicaoFinal = posicaoInicial + totalPassos;
    
    // Verificar se o herói alcançou a caverna do dragão
    if (posicaoFinal >= 20) {
        print("O herói encontrou o dragão!");
    } else {
        print("Posicao final do heroi:", posicaoFinal);
    }
}
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);