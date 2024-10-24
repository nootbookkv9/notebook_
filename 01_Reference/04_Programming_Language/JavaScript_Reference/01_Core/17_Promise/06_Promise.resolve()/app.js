// Create a Promise Object
let myPromise = Promise.resolve("All Well");

// Using then() to display result
myPromise.then(x => myDisplay(x), x => myDisplay(x));

// Funtion to run when Promise is settled:
function myDisplay(some) {
	document.getElementById("demo").innerHTML = some;
}

