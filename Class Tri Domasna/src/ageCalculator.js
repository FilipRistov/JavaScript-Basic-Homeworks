function calculateAge(birthYear){
 let age = new Date().getFullYear() - birthYear;
 console.log(`You are ${age} years old`);
}
calculateAge(2001)
calculateAge(1995)
calculateAge(1850)