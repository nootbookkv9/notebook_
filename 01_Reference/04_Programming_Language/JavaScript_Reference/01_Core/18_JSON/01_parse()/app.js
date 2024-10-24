// Example 1 ==========================================================
// Parse a string (written in JSON format) and return a JavaScript object:
var obj_1 = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

console.log(obj_1.firstName);
//: John

console.log(obj_1);
/*: 
	{ 
		firstName: 'John', 
		lastName: 'Doe' 
	}
*/

// Example 2 ==========================================================
// How to use the reviver function:
/*replace the value of "city" to upper case:*/
var text = '{ "name":"John", "age":"39", "city":"New York"}';
var obj_2 = JSON.parse(text, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});

console.log(obj_2.name, obj_2.city);
//: John NEW YORK

// Example 3 ==========================================================
// Parsing JSON received from the server:
// Note: --> See Example 3 in index.html file.

// Description:
	// The JSON.parse() method parses a string and returns a JavaScript object.
	// The string has to be written in JSON format.
	// The JSON.parse() method can optionally transform the result with a function.

// Syntax:
	// JSON.parse(string, function)

// Parameter:
	// string 	Required. A string written in JSON format
	// reviver function 	Optional. A function used to transform the result. The function is called for each item. Any nested objects are transformed before the parent.
		// If the function returns a valid value, the item value is replaced with the transformed value
		// If the function returns undefined, the item is deleted

// Technical Details:
// Return Value: 	A JSON Object, or Array
// JavaScript Version: 	ECMAScript 5

// History:
// The numbers in the table specify the first browser version that fully supports the method.
