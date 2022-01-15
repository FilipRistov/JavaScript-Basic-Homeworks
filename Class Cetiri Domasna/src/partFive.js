arr = [3, 5, 6, 8, 11]
function largestValue(inputArray){
 let counter = 0;
 let max = -Infinity;
 while (counter < inputArray.length){
  if(inputArray[counter] > max){
   max = inputArray[counter]; 
  }
  counter++;
 }
 return max;
}
function smallestValue(inputArray){
 let counter = 0;
 let min = +Infinity;
 while (counter < inputArray.length){
  if(inputArray[counter] < min){
   min = inputArray[counter]; 
  }
  counter++;
 }
  return min;
}
let sum = largestValue(arr) + smallestValue(arr);
console.log(`Max: ${largestValue(arr)}, Min: ${smallestValue(arr)}, Sum: ${sum}`);