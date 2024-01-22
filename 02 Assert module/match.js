// assert.match(string, regexp[, message])
/*
Параметры: Эта функция принимает следующие параметры, упомянутые выше и описанные ниже:

строка: этот параметр содержит строковое значение, которое необходимо оценить. Это строкового типа.
regexp: этот параметр представляет собой регулярное выражение, которое сопоставляется с заданным строковым значением.
сообщение: этот параметр содержит сообщение об ошибке строкового или типа ошибки. Это необязательный параметр.
Возвращаемое значение: эта функция возвращает ошибку утверждения типа объекта. 
*/


// Requiring the module
const assert = require('assert').strict;
 
// Function call
try {
    assert.match('I will try to pass', /fail/);
} catch(error) {
    console.log("Error:", error)
}

//=========================================
// Requiring the module
const assert = require('assert').strict;
    
// Function call
try {
    assert.match('I am good', /good/);
    console.log("No Error Occurred")
} catch(error) {
    console.log("Error:", error)
}
