let fName = ["Filip", "John", "Marc", "James"];
let lName = ["Ristov", "Smith", "Anthony", "Bond"];

function myFunction(ime,prezime){
    let nArray = [];
    for(i=0; i < ime.length; i++){
        nArray[i] = ` "${i+1}.${ime[i]} ${prezime[i]}"`;
    }
   return console.log(nArray) 
}

myFunction(fName,lName);