function calculadora(){
    const operacao = Number(prompt('Escolha uma opção:\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão Real\n5-Resto\n6-Potencia'));
    // Valida a entrada de dados do menu inicial
    if (!operacao || operacao <= 0 || operacao >= 7){
        alert('Erro - Operação inválida!');
        calculadora();
    } else {        
        let n1 = Number(prompt('Insira o primeiro número: '));
        let n2 = Number(prompt('Insira o seegundo número: '));
        let resultado = 0.0;
        
        // Valida a entrada de dados do menu secundário
        if (!n1 || !n2){
            alert('Erro - Parametros inválidos!');
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function resto(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            }

            function potencia(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = Number(prompt('Deseja realizar outra operação?\n1-Sim\n2-Não'));

                if(opcao == 1){
                    calculadora();
                } else if (opcao == 2){
                    alert('Até logo!');
                } else {
                    alert('Erro - Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    }


    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisao();
            break;
        case 5:
            resto();
            break;
        case 6:
            potencia();
            break;
    }
}

calculadora();