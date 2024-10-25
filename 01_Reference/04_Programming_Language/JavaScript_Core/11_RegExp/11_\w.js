// A global search for word characters:
let text = "Give 100%!"; 
let pattern = /\w/g;
let result = text.match(pattern);

console.log('result', result);
//: [ 'G', 'i', 'v', 'e', '1', '0', '0' ]

// Description:
	// The \w metacharacter matches word characters.
	// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// Syntax:
	// new RegExp("\\w")
	// or simply:
	// /\w/
// Syntax with modifiers
	// new RegExp("\\w", "g")
	// or simply:
	// /\w/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\w/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
