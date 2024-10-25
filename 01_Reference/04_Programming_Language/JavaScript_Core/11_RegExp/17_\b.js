// Example 1 ==========================================================
// Search for "LO" at the beginning of a word:
let text_1 = "HELLO, LOOK AT YOU!"; 
let pattern_1 = /\bLO/;
let result_1 = text_1.search(pattern_1);

console.log('result_1', result_1);
//: 7

// Example 2 ==========================================================
// Search for "LO" at the END of a word:
let text_2 = "HELLO, LOOK AT YOU!"; 
let pattern_2 = /LO\b/;
let result_2 = text_2.search(pattern_2);

console.log('result_2', result_2);
//: 3

// Description:
	// The \b metacharacter matches at the beginning or end of a word.
	// Search for the pattern LO at the beginning of a word like this:
	// \bLO
	// Search for the pattern LO at the end of a word like this:
	// LO\b

// Syntax:
	// new RegExp("\\bregexp")
	// or simply:
	// /\bregexp/
// Syntax with modifiers
	// new RegExp("\\bregexp", "g")
	// or simply:
	// /\bregexp/g

// Regular Expression Search Methods:
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\b/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
