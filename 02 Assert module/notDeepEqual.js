// assert.notDeepEqual(actual, expected[, message])
/*
Параметры: Эта функция принимает следующие параметры, упомянутые выше и описанные ниже:

фактическое: этот параметр содержит фактическое значение, которое необходимо оценить. Это любого типа.
ожидаемое: этот параметр содержит ожидаемое значение, которое соответствует фактическому значению. Это любого типа.
сообщение: этот параметр содержит сообщение об ошибке строкового или типа ошибки. Это необязательный параметр.
Возвращаемое значение: эта функция возвращает ошибку утверждения типа объекта.
*/


// Requiring the module 
const assert = require('assert').strict; 
  
// Function call 
try { 
    assert.notDeepEqual({ a: '5' }, { a: '5' }); 
} catch(error) { 
    console.log("Error: ", error) 
}

//=====================================================
// Requiring the module 
const assert = require('assert').strict; 
     
// Function call 
try { 
    assert.notDeepEqual({ a: '5' }, { a: '11' }); 
    console.log("No Error Occurred") 
} catch(error) { 
    console.log("Error: ", error) 
} 