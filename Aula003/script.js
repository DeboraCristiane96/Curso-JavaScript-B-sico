//Arrays ou Vetores em JS
/*
let array = ['string', 1 , true];
console.log(array);
*/
let array = ['string', 1 , true, ['array1'],['array2'],['array3']];
console.log(array);
array.forEach(function(item, index){console.log(item,index)});