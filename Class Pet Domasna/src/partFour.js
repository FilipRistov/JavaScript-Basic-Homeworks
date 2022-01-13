let niza = [5, 10, 5 , 2, 4]
let broevi = [10, 23, 7, 14, 20]
let numbersType = prompt(`Enter type(even or odd):`);
function findNumber(array,type){
    for (i=0; i < array.length; i++){
      if(type == "even"){
        let even = array.filter(number => number %2 === 0);
        return even;
        }
        else if (type == "odd"){
          let odd = array.filter(number => number %2 !== 0);
          return odd;
        }
    }
}
alert(findNumber(niza,numbersType))
alert(findNumber(broevi,"even"))