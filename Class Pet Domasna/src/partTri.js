let numArray = [2, 4, 5, 10, 14, 5, 5, 5, 2];
let numArr = [23, 2, 4, 6, 7, 14, 2, 23, 5, 2];
let numberArr = [10, 20, 50, 25, 7, 41];
function findNumber(num, array){
    let counter = 0
    for(i=0; i < array.length; i++){
        if(num == array[i]){
            counter++
        }
    }
    alert(`There are ${counter} occurrences of number ${num} in the array ${array}`);
}

findNumber(5, numArray);
findNumber(14, numArray);
findNumber(2, numArr);
findNumber(23, numArr);
findNumber(5, numberArr);
