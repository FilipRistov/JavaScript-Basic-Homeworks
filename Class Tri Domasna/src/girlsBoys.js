function myFunction(n1, n2){
 if (n1 >10 && n2 > 10){
  console.log(`${n1} girls ${n2} boys`);
 }
 else if (n1 <10 && n2 < 10){
    console.log(`${"0"+n1} girls ${"0"+n2} boys`);
 }
 else if (n1 <10 && n2>10){
  console.log(`${"0"+n1} girls ${n2} boys`);
 }
 else{
  console.log(`${n1} girls ${"0"+n2} boys`);
 }
}
myFunction(7,4)
myFunction(7,14)
myFunction(72,14)
myFunction(72,4)