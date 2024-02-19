//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
//concat(): O método concat() é utilizado para mesclar dois ou mais arrays. Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.
//method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

console.log('Primeiro array de frutas');
let fruits = ['apple', 'banana'];
console.log(fruits);

console.log('\nSegundo array de frutas');
let moreFruits = ['cherry', 'orange'];
console.log(moreFruits);

console.log('\nOs dois arrays de frutas juntos e um só');
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

console.log('\nFim');
