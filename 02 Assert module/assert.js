//console.clear() 
const assert = require('assert'); 
  
let x = 4; 
let y = 5; 
  
try { 
  
    // Checking condition 
    assert(x == y); 
} 
catch { 
  
  // Error output 
  console.log(`${x} is not equal to ${y}`); 
} 

// Example 2:
//console.clear() 
const assert = require('assert'); 
  
let x1 = 4; 
let y1 = 5; 
  
assert(x1 > y1);

// Example 3:
// Requiring the module 
const assert = require('assert').strict; 
  
var a = "GeeksforGeeks"; 
var b = "Geeks4Geek"; 
  
// Function call 
try { 
    assert.strictEqual(a, b); 
} catch(error) { 
    console.log("Error: ", error) 
}