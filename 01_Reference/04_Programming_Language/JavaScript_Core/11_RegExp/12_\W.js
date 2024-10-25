// A global search for non-word characters:
let text = "Give 100%!";
let pattern = /\W/g;
let result = text.match(pattern);

console.log('result', result);
//: [ ' ', '%', '!' ]

// Description:
	// The \W metacharacter matches non-word characters:
	// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

// Syntax:
	// new RegExp("\\W")
	// or simply:
	// /\W/
// Syntax with modifiers
	// new RegExp("\\W", "g")
	// or simply:
	// /\W/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\W/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
