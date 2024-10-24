// Example 1 ==========================================================
// If the hour is less than 20, output "Good day":
let hour = new Date().getHours();
if (hour < 20) {
  console.log("Good day");
}

// Example 2 ==========================================================
// Output "Good day" or "Good evening":
hour = new Date().getHours();
if (hour < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// Example 3 ==========================================================
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
var time = new Date().getHours();
if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// Example 4 ==========================================================
// If the first <div> element in the document has an id of "myDIV", change its font-size:

// Note: --> Run this code in browser.

function f_4() {
  var x = document.getElementsByTagName("DIV")[0];
  
  if (x.id === "myDIV") { 
    x.style.fontSize = "30px";
  }
}

// Description:
	// The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
	// The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.
	// In JavaScript we have the following conditional statements:
		// Use if to specify a block of code to be executed, if a specified condition is true
		// Use else to specify a block of code to be executed, if the same condition is false
		// Use else if to specify a new condition to test, if the first condition is false
		// Use switch to select one of many blocks of code to be executed

// Syntax:
	// The if statement specifies a block of code to be executed if a condition is true:
	/*
		if (condition) {
			block of code to be executed if the condition is true
		}
	*/

	// The else statement specifies a block of code to be executed if the condition is false:
	/*
		if (condition) {
			block of code to be executed if the condition is true
		} else {
			block of code to be executed if the condition is false
		}
	*/

	// The else if statement specifies a new condition if the first condition is false:
	/*
		if (condition1) {
			block of code to be executed if condition1 is true
		} else if (condition2) {
			block of code to be executed if the condition1 is false and condition2 is true
		} else {
			block of code to be executed if the condition1 is false and condition2 is false
		}
	*/

// Parameter:
	// condition 	Required. An expression that evaluates to true or false

// History:
// if...else is an ECMAScript1 (ES1) feature.
// ES1 (JavaScript 1997) is fully supported in all browsers:
