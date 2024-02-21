//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
//O método flat() cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.
//flat(): This method creates a new array with all sub-array elements concatenaded into it recursively up to the specified depth.

console.log('Array default');
const numbers = [1, [2, [3]], 4];

console.log('Array com flat implementado');
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);

console.log('\nFim');
