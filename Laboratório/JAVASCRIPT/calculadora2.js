const operacoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão Real', 'Resto', 'Potencia'];

function calculadora() {
    while (true) {
        const operacao = Number(prompt('Escolha uma opção:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão Real\n5-Resto\n6-Potencia\n7-Sair'));

        if (operacao >= 1 && operacao <= 6) {
            const n1 = Number(prompt('Insira o primeiro número: '));
            const n2 = Number(prompt('Insira o segundo número: '));

            if (!isNaN(n1) && !isNaN(n2)) {
                let resultado = 0.0;

                switch (operacao) {
                    case 1:
                        resultado = n1 + n2;
                        break;
                    case 2:
                        resultado = n1 - n2;
                        break;
                    case 3:
                        resultado = n1 * n2;
                        break;
                    case 4:
                        resultado = n1 / n2;
                        break;
                    case 5:
                        resultado = n1 % n2;
                        break;
                    case 6:
                        resultado = Math.pow(n1, n2);
                        break;
                }

                alert(`Resultado da ${operacoes[operacao - 1]}: ${resultado}`);
            } else {
                alert('Erro - Parâmetros inválidos!');
            }
        } else if (operacao === 7) {
            alert('Até logo!');
            break;
        } else {
            alert('Erro - Operação inválida!');
        }
    }
}

calculadora();