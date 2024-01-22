// assert.equal(actual, expected[, message])
/*
Параметры: Эта функция принимает следующие параметры, упомянутые выше и описанные ниже:

фактическое: этот параметр содержит фактическое значение, которое необходимо оценить. Это любого типа.
ожидаемое: этот параметр содержит ожидаемое значение, которое соответствует фактическому значению. Это любого типа.
сообщение: этот параметр содержит сообщение об ошибке строкового или типа ошибки. Это необязательный параметр.
Возвращаемое значение: эта функция возвращает ошибку утверждения типа объекта. 
*/

// Requiring the module
const assert = require('assert').strict;
 
let a = 10;
let b = 20;
 
// Function call
try {
    assert.equal(a, b);
} catch (error) {
    console.log( quot : Error ? quot: error)
}

//====================================================
// Requiring the module
const assert = require('assert').strict;
 
let a1 = 20;
let b1 = 20;
 
// Function call
try {
    assert.equal(a1, b1);
    console.log("No Error Occurred")
} catch (error) {
    console.log(" Error:", error)
}