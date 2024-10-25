// A search for "is" followed by " all":
let text = "Is this all there is";
let pattern = /is(?= all)/;
let result = text.match(pattern);

console.log('result', result);
//: [ 'is', index: 5, input: 'Is this all there is', groups: undefined ]

// Description:
	// The ?=n quantifier matches any string that is followed by a specific string n.
	// Tip: Use the ?!n quantifier to match any string that is NOT followed by a specific string n.

// Syntax:
	// new RegExp("regexp(?=n)")
	// or
	// /regexp(?=n)/
// Syntax with modifiers
	// new RegExp("regexp(?=n)", "g")
	// or simply:
	// /regexp(?=n)/g

// History:
// /(?=n)/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
