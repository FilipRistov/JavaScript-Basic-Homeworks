// (year - 4) % 12
var input = prompt("Enter Input");
var parsedInput = parseInt(input);
var zodiac = (parsedInput - 4) % 12;
console.log(zodiac);
if(zodiac == 0){
 alert("Rat");
}
else if(zodiac == 1){
 alert("Ox");
}
else if(zodiac == 2){
 alert("Tiger");
}
else if(zodiac == 3){
 alert("Rabbit");
}
else if(zodiac == 4){
 alert("Dragon");
}
else if(zodiac == 5){
 alert("Snake");
}
else if(zodiac == 6){
 alert("Horse");
}
else if(zodiac == 7){
 alert("Goat");
}
else if(zodiac == 8){
 alert("Monkey");
}
else if(zodiac == 9){
 alert("Rooster");
}
else if(zodiac == 10){
 alert("Dog");
}
else if(zodiac == 11){
 alert("Pig");
}
else{
 alert("Invalid Input");
}