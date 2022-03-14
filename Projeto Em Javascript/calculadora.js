function calculadora(){
    const operacao = prompt('Escolha uma Operação:\n 1 [+] Soma \n 2 [-] Subtração \n 3 [*] Multiplicação \n 4 [/] Divisão Real \n 5 [%] Divisão Inteira \n 6 [**] Potenciação ' );

if(!operacao || operacao > 7){
        alert('Operação Inválida');
}else{
    let n1 = number(prompt ('Digite um número:'));
    let n2 = number(prompt ('Digite outro número:'));
    let resultado;
    if(!n1 || !n2){
        alert('ERRO: Parâmetros Inválidos')
    }else{
        function soma(){
            resultado = n1+n2;
            alert(`$ {n1} + $ {n2} = $ {resultado}`);
        }
        function sub(){
            resultado = n1-n2;
            alert(`$ {n1} - $ {n2} = $ {resultado}`);
        }
        function mult(){
            resultado = n1*n2;
            alert(`$ {n1} * $ {n2} = $ {resultado}`);
        }
        function divR(){
            resultado = n1/n2;
            alert(`$ {n1} / $ {n2} = $ {resultado}`);
        }
        function divI(){
            resultado = n1%n2;
            alert(`O resto da divisão Inteira entre $ {n1} % $ {n2} ´3 igual a $ {resultado}`);
        }
        function pot(){
            resultado = n1**n2;
            alert(`$ {n1} Elevado á  $ {n2} é igual a $ {resultado}`);
        }
        function novaOperacao(){
            let opcao = prompt('Deseja Realizar outra Operação:\n 1[sim] \n 2[não]');
            if(opcao == 1){
                calculadora();
            }else if (opcao == 2) {
                alert('até mais...');
            }else{
                novaOperacao();
            }
        }
        if(operacao == 1){
            soma();
        }else if(operacao == 2){
            sub();
        }else if(operacao == 3){
            mult();
        }else if (operacao == 4){
            divR();
        }else if(operacao == 5){
            divI();
        }else if(operacao == 6){
            pot();
        }
    }
    
    
}

}
calculadora();