// assert.ifError(value)
/*
Параметры: Эта функция принимает следующие параметры, упомянутые выше и описанные ниже: 

значение: этот параметр содержит фактическое значение. Это значение выдается, если значение не является неопределенным или нулевым. Это любого типа.
Возвращаемое значение: эта функция возвращает ошибку утверждения типа объекта.
*/

// Requiring the module
const assert = require('assert').strict;
 
// Function call
try {
    assert.ifError('error');
} catch(error) {
    console.log("Error:", error)
}


//====================================================
// Requiring the module
const assert = require('assert').strict;
 
// Function call
try {
    assert.ifError(null);
    console.log("No Error Occurred")
} catch(error) {
    console.log("Error:", error)
}