//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
//pop(): O método pop() remove o último elemento de um array e retorna aquele elemento
//Se você chamar pop() em um array vazio, ele retorna o valor undefined.
//This method removes the last element from an array an returns that element.

console.log('1 - Array de frutas na ordem default:');
const arr = ['apple', ' banana', ' cherry'];
console.log(arr);

console.log(
  '\n2 - O método pop() remove o último elemento de um array e retorna aquele elemento: \n',
);
const last = arr.pop();
console.log(last); //Output: 'cherry'
console.log(arr); //Outupt: ['apple', 'banana']
