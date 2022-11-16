
const formulario = document.querySelector('#form');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');

    const inputAltura = event.target.querySelector('#altura');

    //pegando os valores do inputPeso
    const pesoEMQuiloGramas = inputPeso.value;
    const alturaEmMetros = inputAltura.value;

    //chamada da função para realizar o calculo do imc
    imc(pesoEMQuiloGramas,alturaEmMetros);

})

function setResultado(msg){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";

    const p = document.createElement('p');
    p.innerHTML = msg;

    p.classList.add('paragrafo-resultado')
    resultado.appendChild(p);

    
   
}

//Essa função é responsável por calcular o IMC
//IMC = pesoEMQuiloGramas / (alturaEmMetros * alturaEmMetros)

function imc(pesoEMQuiloGramas,alturaEmMetros){
    
    let imc = pesoEMQuiloGramas / (alturaEmMetros * alturaEmMetros);

    if(imc < 20){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está abaixo do peso!");
    }else if((imc >= 20) && (imc <= 25)){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está no peso ideal!");
    }else if((imc >= 25) && (imc <= 30)){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está com sobrepeso!");
    }else if((imc >= 30) && (imc <= 35)){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está com obesidade moderada!");
    }else if((imc >= 35) && (imc <= 40)){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está com obesidade móbida!");
    }else if(imc > 50){
        setResultado("Seu IMC = "+imc.toFixed(2)+ " você está com super-obesidade!");
    }
}
