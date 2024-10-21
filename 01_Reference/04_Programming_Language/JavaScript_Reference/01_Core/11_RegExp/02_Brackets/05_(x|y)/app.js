// Example 1 ==========================================================
// A global search for any of the alternatives red or green:
let text_1 = "re, green, red, green, gren, gr, blue, yellow";
let pattern_1 = /(red|green)/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'green', 'red', 'green' ]

// Example 2 ==========================================================
// Do a global search to find any of the specified alternatives (0|5|7):
let text_2 = "01234567890123456789";
let pattern_2 = /(0|5|7)/g; 
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ '0', '5', '7', '0', '5', '7' ]

// Description:
	// The (x|y) expression is used to find any of the alternatives specified.
	// The alternatives can be of any characters.

// Syntax:
	// new RegExp("(x|y)")
	// or simply:
	// /(x|y)/
// Syntax with modifiers
	// new RegExp("(x|y)", "g")
	// or simply:
	// /(x|y)/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /(x|y)/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
