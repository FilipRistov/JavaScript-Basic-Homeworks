let names = prompt("Enter name")
let kinds = prompt("Enter kind")

let animal = {
 name : names,
 kind : kinds,
 speak : function(param){
  console.log(`${this.kind} says:'${param}'`);
 }
}
console.log(animal);
animal.speak("Hey Bro")