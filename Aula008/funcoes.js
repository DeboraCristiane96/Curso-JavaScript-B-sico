function returnEvenValues(array){
    let evensNum=[];
    for(let i = 0 ; i < array.length; i++){
        if(array[ i ] % 2 === 0){
            evensNum.push(array[1]);
        }
    }
    console.log(evensNum);
}
let array = [1,3,6,8];
returnEvenValues(array);