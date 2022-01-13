let nArray = ["Hello", "there", "students", "of", "SEDC", "!"];
function text(array){
    let counter = 0;
    let sum = ""
    while (array.length > counter){
        let string = array[counter];
        sum += string + " "; 
        counter++;
    }
   alert(sum)
}
text(nArray)
