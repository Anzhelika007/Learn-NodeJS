function printHello() { 
  console.log( "Привет, мир!"); 
} 

// Теперь вызываем вышеуказанную функцию через 2 секунды 
var timeoutObj = setTimeout(printHello, 2000);


// Methods:
/*  setImmediate();
    clearImmediate();
    setInterval();
    clearInterval();
    setTimeout();
    clearTimeout();
    queueMicrotask();
    TextEncoder 
    TextDecoder 
    Class: URL 
    URLSearchParams 
    WebAssembly
    !!!!!!!!!!exist only within the scope of some modules
    require(id)
    exports
    module
    __dirname
    __filename

*/

const encoder = new TextEncoder();
const e = encoder.encode("Welcome to GFG");
console.log(e);

const decoder = new TextDecoder();
const d = decoder.decode(e);
console.log(d);

const url = new URL("/foo", "https://www.helloworld.og/");
console.log(url);

//===================================
const myURL = new URL('https://www.register.com/?name=gfg');
// It prints gfg
console.log(myURL.searchParams.get('name'));

myURL.searchParams.append('name', 'xyz');

// It prints https://www.register.com/?name=gfg&name=xyz
console.log(myURL.href);

//====================================
var express = require('express');
console.log(__dirname);
console.log("__dirname : "+ __dirname);
console.log("__filename : "+ __filename);