let animals = []
function Animal(names, types, ages){
 this.name = names;
 this.type = types;
 this.age = ages;
}

function showAnimals(array, e){
 e.innerHTML = "";
 for(let animal of array){
  e.innerHTML += `<li>Name: ${animal.name}</li>
   <li>Type: ${animal.type}</li>
    <li>Age: ${animal.age}</li>`;
 }
}
let v1 = document.getElementById('name')
let v2 = document.getElementById('type')
let v3 = document.getElementById('age')
let btn = document.getElementById('btn')
let ul = document.getElementById('ul')

btn.addEventListener('click', function(){
 let names = v1.value;
 let types = v2.value;
 let ages = v3.value;
 let newAnimal = new Animal(names, types, ages);
 animals.push(newAnimal);
 showAnimals(animals, ul);
 v1.value = "";
 v2.value = "";
 v3.value = "";
});