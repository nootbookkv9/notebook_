// Search for a newline character in a string:
let text = "Visit W3Schools.\nLearn JavaScript."; 
let pattern = /\n/;
let result = text.search(pattern);

console.log('result', result);
//: 16

// Description:
	// The \n character matches newline characters.

// Syntax:
	// new RegExp("\\n")
	// or simply:
	// /\n/

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\n/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
