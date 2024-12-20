// Get a date as a string, using the ISO standard:
let d = new Date();
let text = d.toISOString();
console.log('text', text);
//: 2024-10-19T20:31:22.015Z

// Description:
// The toISOString() method returns a date object as a string, using the ISO standard.
// The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ

// Syntax:
// Date.toISOString()

// Parameters:
// None

// Technical Details:
// Return Value: 	A String, representing the date and time using the ISO standard format
// JavaScript Version: 	ECMAScript 5

// History:
// toISOString() is an ECMAScript5 (ES5) feature.
// ES5 (JavaScript 2009) is fully supported in all modern browsers since July 2013:
// =====================================================---------
// Get today's date as a readable string:
let d = new Date();
let text = d.toDateString();
console.log('text', text);
//: Sat Oct 19 2024

// Description:
// The toDateString() method returns the date (not the time) of a date object as a string.

// Syntax:
// Date.toDateString()

// Parameters:
// None

// Technical Details:
// Return Value: 	A String, representing the date as a string

// History:
// toDateString() is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:

