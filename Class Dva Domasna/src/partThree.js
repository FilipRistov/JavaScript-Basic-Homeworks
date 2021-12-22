var first = prompt("Enter the first number");
var second = prompt("Enter the second number");
var third = prompt("Enter the third number");
var fourth = prompt("Enter the fourth number");
var fifth = prompt("Enter the fifth number");
var a = parseInt(first); 
var b = parseInt(second); 
var c = parseInt(third); 
var d = parseInt(fourth); 
var e = parseInt(fifth);
if(a>=b && a>=c && a>=d && a>=e){
 alert(a + " is maximum number");
} 
else if(b>=a && b>=c && b>=d && b>=e){
 alert(b + " is maximum number");
} 
else if(c>=a && c>=b && c>=d && c>=e){
 alert(c + " is maximum number");
} 
else if(d>=a && d>=b && d>=c && d>=e){
 alert(d + " is maximum number");
} 
else if(e>=a && e>=b && e>=c && e>=d){
 alert(d + " is maximum number");
} 
else{
 alert("Invalid Input");
}