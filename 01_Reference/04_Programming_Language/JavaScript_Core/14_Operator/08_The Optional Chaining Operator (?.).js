// The Optional Chaining Operator (?.):
// The ?. operator returns undefined 
//		if an object is undefined or null (instead of throwing an error).

// Create an object:
const car = {
	type:"Fiat",
	model:"500",
	color:"white"
};

// Ask for car name:
console.log(car?.name)
// undefined

// History:
// The optional chaining operator is supported in all browsers since March 2020:
