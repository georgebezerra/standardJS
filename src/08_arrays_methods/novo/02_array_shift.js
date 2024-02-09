//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
//shift(): O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
//method removes the first element from an array and returns that removed element.
//This method changes the length of the array.

console.log('1-Array de frutas default');
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

console.log('\n2-Métdodo shift() implementada - removendo o primeiro elemento');
let shiftFruit = fruits.shift();
console.log(shiftFruit);

console.log('\n3-Array fruits alterado - sem o primeiro elemento');
console.log(fruits);
