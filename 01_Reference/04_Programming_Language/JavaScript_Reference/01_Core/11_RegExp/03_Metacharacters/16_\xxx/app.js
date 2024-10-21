// Do a global search for octal number 127 (W) in a string:
let text = "Visit W3Schools. Hello World!"; 
let pattern = /\127/g;
let result = text.match(pattern);

console.log('result', result);
//: [ 'W', 'W' ]

// Description:
	// The \xxx metacharacters matches the Latin character by an octal number (xxx).

// Syntax:
	// new RegExp("\\xxx")
	// or simply:
	// /\xxx/
// Syntax with modifiers
	// new RegExp("\\xxx", "g")
	// or simply:
	// /\xxx/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\xxx/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
