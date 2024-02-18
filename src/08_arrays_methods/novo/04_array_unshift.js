//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
//unshift(): O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
//method adds one or more elements to the beginning of an array and returns the new lenght of the array.

console.log('Array de frutas default');
let fruits = ['cherry', 'orange'];
console.log(fruits);

console.log('\nAcrescetando mais 2 frutas; apple e banana');
fruits.unshift('apple', 'banana');
console.log(fruits);

console.log('\nFim');
