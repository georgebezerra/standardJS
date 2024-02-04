//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//join(): O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
//This method joins all the elements of an array into a string using a specified separador.
//It takes on optional argument: the separator to use.

console.log('1 - Array de frutas na ordem default:');
const arr = ['apple', 'banana', 'cherry'];
console.log(arr);

console.log(
  '\n2 - Array de frutas com o método join() - os elementos do array serão separados por virgula: ',
);
const str = arr.join(', ');
console.log(str);

console.log(
  '\n3 - Array de frutas com o método join() - os elementos do array serão separados por ponto e virgula: ',
);
const strr = arr.join('; ');
console.log(strr);

console.log(
  '\n4 - Array de frutas com o método join() - os elementos do array serão separados por dois pontos: ',
);
const strrr = arr.join(': ');
console.log(strrr);
