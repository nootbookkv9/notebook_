// Search for a carriage return character in a string:
let text = "Visit W3Schools.\rLearn JavaScript."; 
let pattern = /\r/;
let result = text.search(pattern);

console.log('result', result);
//: 16

// Description:
	// The \r metacharacter matches carriage return characters.

// Syntax:
	// new RegExp("\\r")
	// or simply:
	// /\r/

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\r/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
