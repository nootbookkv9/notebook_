// Search for a NUL character:
let text = "Visit W3Schools.\0Learn JavaScript."; 
let pattern = /\0/;
let result = text.search(pattern);

console.log('result', result);
//: 16

// Description:
	// The \0 metacharacter maches NUL characters.

// Syntax:
	// new RegExp("\\0")
	// or simply:
	// /\0/

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\0/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
