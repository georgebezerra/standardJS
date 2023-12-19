let a = 7;
let b = 94;

//1 primeira forma de resolver
// a = 94;
// b = 7;

//2 segunda forma de resolver
let temp = a;
a = b;
b = temp;

// 3 terceira forma de resolver
[a, b] = [b,a];

console.log(a);
console.log(b);