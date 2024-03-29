
function comparaNumeros(num1, num2) {
    if(!num1 || !num2){
        return 'digite dois números';
    }
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) { 

	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {

	const soma = num1 + num2;
	let comparaDez = 'menor do que';
	let comparaVinte = 'menor do que';

	if (soma > 10) {
		comparaDez = 'maior do que';
	}
    if(soma === 10 ){
        comparaDez = 'igual a';
    }
	if (soma > 20) {
		comparaVinte = ' maior do que';
        }

    if ( soma === 20){
        comparaVinte = 'igual a';
    }

	return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte}  20.`;
}

console.log(comparaNumeros(20, 10));