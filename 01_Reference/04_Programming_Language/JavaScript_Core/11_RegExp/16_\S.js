// A global search for non-whitespace characters:
let text = "Is this all there is?";
let pattern = /\S/g;
let result = text.match(pattern);

console.log('result', result);
/*: [
  'I', 's', 't', 'h', 'i',
  's', 'a', 'l', 'l', 't',
  'h', 'e', 'r', 'e', 'i',
  's', '?'
]
*/

// Description:
	// The \S metacharacter matches non-whitespace characters.
	// Whitespace characters can be:
		// A space character
		// A tab character
		// A carriage return character
		// A new line character
		// A vertical tab character
		// A form feed character

// Syntax:
	// new RegExp("\\S")
	// or simply:
	// /\S/
// Syntax with modifiers
	// new RegExp("\\S", "g")
	// or simply:
	// /\S/g

// Regular Expression Search Methods
// In JavaScript, a regular expression text search, can be done with different methods.
// With a pattern as a regular expression, these are the most common methods:
	// text.match(pattern)	The String method match()
	// text.search(pattern)	The String method search()
	// pattern.exec(text)	The RexExp method exec()
	// pattern.test(text)	The RegExp method test()

// History:
// /\S/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
