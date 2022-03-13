//
/*tipos primitivos

//boolean
var vOuF = false ;
console.log(typeof(vOuF));

//Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String 
var nome = 'Débora';
console.log(typeof(nome));

//Como declarar Variavéis 

var variavel = 'Débora';
variavel = 'Cristiane';
console.log(variavel);

let variavel2 = 'Cristiane';
variavel2 = 'Débora';
console.log(variavel2);

const variavel3 = 'Anna';
console.log(variavel3);
*/
 //Escoopo

 var escopoGlobal = 'global';
 console.log(escopoGlobal);

 function escopoLocal(){
     let escopoLocalInterno = 'Local';
     console.log(escopoLocalInterno);
 }

 escopoLocal();