//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
//This method checks if all elements in an array pass a test (provided as a function). It returns true if all elements pass the test;
//otherwise, it returns false.

console.log('Array default de números');
const arr = [2, 4, 6, 8];
console.log(arr);
const isEven = num => num % 2 === 0;
const result = arr.every(isEven);

console.log('\nEvery - verificando se todos os números do array são pares');
console.log(result);
