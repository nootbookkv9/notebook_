// A global search for non-digit characters:
let text = "Give 100%!"; 
let pattern = /\D/g;
let result = text.match(pattern);

console.log('result', result);
//: [ 'G', 'i', 'v', 'e', ' ', '%', '!' ]

// Description:
	// The \D metacharacter matches non-digit characters.

// Syntax:
	// new RegExp("\\D")
	// or simply:
	// /\D/
// Syntax with modifiers
	// new RegExp("\\D", "g")
	// or simply:
	// /\D/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\D/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
