// ==========================================================================
// JavaScript String Comparison

// Example 1 ------------------------------------------------------------
// All the comparison operators above can also be used on strings:
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);
// Output: true

// Example 2 ------------------------------------------------------------
let text1 = "20";
let text2 = "5";
let result = text1 < text2; 
console.log(result);
// Output: false


// ==========================================================================
// JavaScript String Addition

// Example 1 ------------------------------------------------------------
// The + can also be used to add (concatenate) strings:
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);
// Output: John Doe

// Example 2 ------------------------------------------------------------
// The += assignment operator can also be used to add (concatenate) strings:
let text1 = "What a very ";
text1 += "nice day"; 
console.log(text1);
// Output: What a very nice day


// ==========================================================================
// Adding Strings and Numbers

// Adding two numbers, will return the sum, but adding a number and a string will return a string:
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);
// Output: 
// 10
// 55
// Hello5 

