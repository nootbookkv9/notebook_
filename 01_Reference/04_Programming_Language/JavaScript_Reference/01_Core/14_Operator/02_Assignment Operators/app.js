// JavaScript Assignment Operators:
// Assignment operators are used to assign values to JavaScript variables.
// Given that x = 10 and y = 5, the table below explains the assignment operators:

// ===============================================
// = 	x = y 	x = y 	x = 5 	
// += 	x += y 	x = x + y 	x = 15 	
// -= 	x -= y 	x = x - y 	x = 5 	
// *= 	x *= y 	x = x * y 	x = 50 	
// /= 	x /= y 	x = x / y 	x = 2 	
// %= 	x %= y 	x = x % y 	x = 0 	
// : 	x: 45 	size.x = 45 	x = 45

// --> =  <-- =====================================
let x = 1
console.log(`--> = <-- ${'-'.repeat(43)}`)
console.log(`x = 1 --> x = 5 --> ${x = 5}\n`)
// x = 1 --> x = 5 --> 5

// --> += <-- =====================================
x = 1
console.log(`--> += <-- ${'-'.repeat(42)}`)
console.log(`x = 1 --> x += 5 --> ${x += 5}\n`)
// x = 1 --> x += 5 --> 6

// --> -= <-- =====================================
x = 1
console.log(`--> -= <-- ${'-'.repeat(42)}`)
console.log(`x = 1 --> x -= 5 --> ${x -= 5}\n`)
// x = 1 --> x -= 5 --> -4

// --> *= <-- =====================================
x = 1
console.log(`--> *= <-- ${'-'.repeat(42)}`)
console.log(`x = 1 --> x *= 5 --> ${x *= 5}\n`)
// x = 1 --> x *= 5 --> 5

// --> /= <-- =====================================
x = 1
console.log(`--> /= <-- ${'-'.repeat(42)}`)
console.log(`x = 1 --> x /= 5 --> ${x /= 5}\n`)
// x = 1 --> x /= 5 --> 0.2

// --> %= <-- =====================================
x = 1
console.log(`--> %= <-- ${'-'.repeat(42)}`)
console.log(`x = 1 --> x %= 5 --> ${x %= 5}\n`)
// x = 1 --> x %= 5 --> 1

// --> : <-- =====================================
size = {x: 5, y: 10, z: 1};
console.log(`--> : <-- ${'-'.repeat(43)}`)
console.log(`size.x --> ${size.x}\n`)
// size.x --> 5

// --> = <-- -------------------------------------------
// x = 1 --> x = 5 --> 5

// --> += <-- ------------------------------------------
// x = 1 --> x += 5 --> 6

// --> -= <-- ------------------------------------------
// x = 1 --> x -= 5 --> -4

// --> *= <-- ------------------------------------------
// x = 1 --> x *= 5 --> 5

// --> /= <-- ------------------------------------------
// x = 1 --> x /= 5 --> 0.2

// --> %= <-- ------------------------------------------
// x = 1 --> x %= 5 --> 1

// --> : <-- -------------------------------------------
// size.x --> 5
