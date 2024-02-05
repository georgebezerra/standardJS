//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
//toString(): O método toString() retorna uma string representando um array específico e seus elementos.
//O objeto Array substitui o método toString() de Object. Para objetos do tipo Array, o método toString() concatena todos os valores em apenas uma string.
//This method returns a string representing the array and its elements.

console.log('1 - Array de frutas na ordem default:');
const arr = ['apple', ' banana', ' cherry'];
console.log(arr);

console.log(
  '\n2 - O método toString() retorna uma string representando um array específico e seus elementos: \n',
);
const str = arr.toString();
console.log(str);
