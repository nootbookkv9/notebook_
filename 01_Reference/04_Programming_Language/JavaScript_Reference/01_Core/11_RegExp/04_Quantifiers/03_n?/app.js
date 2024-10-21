// Do a global search for a "1", followed by zero or one "0" characters:
let text = "1, 100 or 1000?";
let pattern = /10?/g;
let result = text.match(pattern);

console.log('result', result);
//: [ '1', '10', '10' ]

// Description:
// The n? quantifier matches any string that contains zero or one occurrences of n.

// Syntax:
	// new RegExp("n?")
	// or simply:
	// /n?/
// Syntax with modifiers
	// new RegExp("n?", "g")
	// or simply:
	// /n?/g

// History:
// /n?/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
