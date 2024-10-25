// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument 
//		if it is not nullish (null or undefined).
// Otherwise it returns the second argument.

let x, y, z

// Example 1 ==========================================================
x = undefined
y = 1
z = x ?? y
console.log(z)
//: 1

// Example 2 ==========================================================
x = null
y = 1
z = x ?? y
console.log(z)
//: 1


// History:
// The nullish operator is supported in all browsers since March 2020:
