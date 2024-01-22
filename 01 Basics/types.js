// Variable store number data type
let a = 35;
console.log(typeof a);
 
// Variable store string data type
a = "GeeksforGeeks";
console.log(typeof a);
 
// Variable store Boolean data type
a = true;
console.log(typeof a);
 
//=============================================================
// Variable store undefined (no value) data type
a = undefined;
console.log(typeof a);

let company = {
  Name: "GeeksforGeeks",
  Address: "Noida",
  Contact: "+919876543210",
  Email: "abc@geeksforgeeks.org"
};

// Display the object information
console.log("Information of variable company:", company);

// Display the type of variable
console.log("Type of variable company:", typeof company);

//=============================================================
function multiply(num1, num2) {
 
  // It returns the multiplication
  // of num1 and num2
  return num1 * num2;
}

// Declare variable
let x = 2;
let y = 3;

// Display the answer returned by
// multiply function
console.log("Multiplication of", x,
  "and", y, "is", multiply(x, y));


//==========================================================
let xs = "Welcome to GeeksforGeeks ";
 
let ys = 'Node.js Tutorials';
 
let zs = ['Geeks', 'for', 'Geeks'];
 
console.log(xs);
 
console.log(ys);
 
console.log("Concat Using (+) :", (xs + ys));
 
console.log("Concat Using Function :", (xs.concat(ys)));
 
console.log("Split string: ", xs.split(' '));
 
console.log("Join string: ", zs.join(', '));
 
console.log("Char At Index 5: ", xs.charAt(5));

//  Buffer   ==================================================
let b = new Buffer(10000);//creates buffer
let str = " ";
b.write(str);
console.log(str.length);//Display the information
console.log(b.length); //Display the information