let withdrawal = parseInt(prompt("Enter your cash"));
let money = 2500
function atm(){
 if (money < withdrawal){
  console.log("Not enough money");
 }
 else{
  console.log(`You have succesfully withdrawn ${withdrawal} euros`);
  console.log(`You have ${money - withdrawal} euros left in your account`);
 }
}
atm() 