function mean(array){
 let sum = 0;
 for(let i = 0; i < array.length; i++){
     sum += array[i];
    }
    return sum / array.length;
}
function median(array){
    array.sort((a, b) => a - b);
    let middle = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
    } else {
        return array[middle];
    }

}