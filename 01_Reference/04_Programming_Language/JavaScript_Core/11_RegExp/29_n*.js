// Example 1 ==========================================================
// A global search for an "l", followed by zero or more "o" characters:
let text_1 = "Hellooo World! Hello W3Schools!"; 
let pattern_1 = /lo*/g;
let result_1 = text_1.match(pattern_1);

console.log('result_1', result_1);
//: [ 'l', 'looo', 'l', 'l', 'lo', 'l' ]

// Example 2 ==========================================================
// A global search for a "1", followed by zero or more "0" characters:
let text_2 = "1, 100 or 1000?";
let pattern_2 = /10*/g;
let result_2 = text_2.match(pattern_2);

console.log('result_2', result_2);
//: [ '1', '100', '1000' ]

// Description:
	// The n* quantifier matches any string that contains zero or more occurrences of n.

// Syntax:
	// new RegExp("n*")
	// or simply:
	// /n*/
// Syntax with modifiers
	// new RegExp("n*", "g")
	// or simply:
	// /n*/g

// History:
// /n*/ is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
