//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//length(): This property returns the length o the array.
//A propriedade length representa um inteiro de 32-bit sem sinal, que especifíca o número de elementos em um array.

console.log('Array de frutas na ordem default:');
const arr = ['apple', 'banana', 'cherry'];
console.log(arr);

console.log(
  '\nArray de frutas com length() - comprimento do array implementado:',
);
const frutas = arr.length;

console.log(frutas);
