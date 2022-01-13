let errorNiza = [10, "dads", 10, 5, 10]
let niza = [20, 50, 20, 5, 10]
function numbers(inputArray){
 let counter = 0
 let sum = 0
 while (counter < inputArray.length){
  sum += inputArray[counter]
  counter++;
 }
 return sum;
}
function validateNumber(nArray){
  let counter = 0
  while (counter < nArray.length){
    if (isNaN(nArray[counter]) ){
      console.log("Error");
    }
    counter ++;
  }
}

let sumNumbers = numbers(errorNiza);
console.log(sumNumbers);
validateNumber(errorNiza);

sumNumbers = numbers(niza);
console.log(sumNumbers);
validateNumber(niza);



