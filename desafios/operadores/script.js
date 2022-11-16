function tabuada(number){
  
  let cont = 1;

  while (cont<=10){
    console.log("| " +number+ " x " +cont+ " = " +(number*cont)+ " |");
    cont++;
  }
}

tabuada(9);