// Example 1 ==========================================================
// Find the first occurrence of "LO", NOT at the beginning of a word:
let text_1 = "HELLO, LOOK AT YOU!"; 
let pattern_1 = /\BLO/;
let result_1 = text_1.search(pattern_1);

console.log('result_1', result_1);
//: 3

// Example 2 ==========================================================
// Find the first occurrence of "LO", NOT at the END of a word:
let text_2 = "HELLO, LOOK AT YOU!"; 
let pattern_2 = /LO\B/;
let result_2 = text_2.search(pattern_2);

console.log('result_2', result_2);
//: 7

// Description:
	// The \B metacharacter matches NOT at the beginning/end of a word.
	// Search for the pattern LO, not at the beginning of a word like this:
	// \BLO
	// Search for the pattern LO, not at the end of a word like this:
	// LO\B

// Syntax:
	// new RegExp("\\Bregexp")
	// or simply:
	// /\Bregexp/
// Syntax with modifiers
	// new RegExp("\\Bregexp", "g")
	// or simply:
	// /\Bregexp/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\B/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
