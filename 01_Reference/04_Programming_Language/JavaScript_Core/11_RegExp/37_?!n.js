// Do a global, case insensitive search for "is" not followed by " all":
let text = "Is this all there is";
let pattern = /is(?! all)/gi;
let result = text.match(pattern);

console.log('result', result);
//: [ 'Is', 'is' ]

// Description:
	// The ?!n quantifier matches any string that is not followed by a specific string n.
	// Tip: Use the ?=n quantifier to match any string that IS followed by a specific string n.

// Syntax:
	// new RegExp("regexp(?!n)")
	// or
	// /regexp(?!n)/
// Syntax with modifiers
	// new RegExp("regexp(?!n)", "g")
	// or simply:
	// /regexp(?!n)/g

// History:
// /(?!n)/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
