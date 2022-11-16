function fatorial(number){
    
    let fatorial = 1;
    for(let i = 1;i<=number;i++){
        fatorial *= i;
    }
    console.log("O fatorial de "+number+" = "+fatorial);
}
fatorial(5);