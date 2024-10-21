// Do a global search for the hexadecimal number 57 (W) in a string:
let text = "Visit W3Schools. Hello World!"; 
let pattern = /\x57/g;
let result = text.match(pattern);

console.log('result', result);
//: [ 'W', 'W' ]

// Description:
	// The \xdd metacharacters matches Latin characters specified by a hexadecimal number (dd).

// Syntax:
	// new RegExp("\\xdd")
	// or simply:
	// /\xdd/
// Syntax with modifiers
	// new RegExp("\\xdd", "g")
	// or simply:
	// /\xdd/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\xdd/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
