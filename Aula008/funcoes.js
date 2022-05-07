function returnEvenValues(array){
    let evensNum=[];
    for(let i = 0 ; i < array.length; i++){
        if(array[ i ] % 2 === 0){
            evensNum.push(array[i]);
        }
    }
    console.log("Os números pares são:",evensNum);
}
let array = [1,3,6,8,10];
returnEvenValues(array);
