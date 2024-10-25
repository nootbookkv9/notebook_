// A global search for digits:
let text = "Give 100%!"; 
let pattern = /\d/g;
let result = text.match(pattern);

console.log('result', result);
//: [ '1', '0', '0' ]

// Description:
	// The \d metacharacter matches digits from 0 to 9.

// Syntax:
	// new RegExp("\\d")
	// or simply:
	// /\d/
// Syntax with modifiers
	// new RegExp("\\d", "g")
	// or simply:
	// /\d/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\d/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
