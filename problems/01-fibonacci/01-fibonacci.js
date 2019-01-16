/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//fib(1) for 1st, fib(2) for 2nd, fib(3) for 3rd...
function fib(n) {
let val = 1;
let a = 1;
let b = 1;
for(let i = 0 && n > 2; i < n-2; i++){ val = a + b; a = b; b = val;}
console.log(val);
}

fib(8);