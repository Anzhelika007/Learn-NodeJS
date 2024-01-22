// assert.doesNotThrow(fn[, error][, message])
/* 
Параметры: Эта функция принимает следующие параметры, упомянутые выше и описанные ниже:

fn: Этот параметр представляет собой функцию, которая не выдает ошибку.
ошибка: этот параметр является регулярным выражением или функцией. Это указанная ошибка. Это необязательный параметр.
сообщение: этот параметр содержит сообщение об ошибке строкового или типа ошибки. Это необязательный параметр.
Возвращаемое значение: эта функция возвращает ошибку утверждения типа объекта.
*/

// Requiring the module 
const assert = require('assert').strict; 
  
// Function call 
try { 
    assert.doesNotThrow( 
        () => { 
          throw new TypeError('Wrong value'); 
        }, 
    ); 
} catch(error) { 
    console.log("Error:", error) 
} 


//==========================================
// Requiring the module 
const assert = require('assert').strict; 
  
// Function call 
try { 
    assert.doesNotThrow( 
        () => { 
          throw new TypeError('The Wrong value error'); 
        }, 
        /abcd/, 
        'Whoops'
    ); 
} catch(error) { 
    console.log("Error:", error) 
} 