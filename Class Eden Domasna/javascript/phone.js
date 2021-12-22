var phone = 30;
var price = prompt("Enter the price of one phone:");
var tax = prompt("Enter the tax rate:");

var parsedPrice = parseInt(price);
var parsedTax = parseInt(tax);
var taxInNumber = parsedPrice * (parsedTax/100);
var phoneWithTax = parsedPrice + taxInNumber;
var phonePrice = phone*phoneWithTax;
console.log("Price of 30 phones is: " + phonePrice);