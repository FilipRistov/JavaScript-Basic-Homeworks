let kilometres = parseFloat(prompt('Enter distance in km'))
let car = {
 model : 'Toyota',
 color : 'Red',
 year : '2021',
 fuel : 'Petrol',
 fuelConsumption : 0.1,
 km : kilometres,
 fuelCons : function(){
  let result = this.km * 0.1
  console.log(`You will need ${result} litres fuel to pass ${this.km} kilometres`); 
 }
}
car.fuelCons()