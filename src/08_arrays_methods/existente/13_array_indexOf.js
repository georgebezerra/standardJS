//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
//This method returns the index of the first occurrence of a specified element in an array. If the elements is not present, it returns -1.

console.log('Array de números default');
const arr = [5, 10, 15, 20];
console.log(arr);

console.log('Array de números com o methos indexOf');
const primeiroIndice = arr.indexOf(5);
console.log(primeiroIndice);

const segundoIndice = arr.indexOf(10);
console.log(segundoIndice);

console.log('\n');
