//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
//O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
// Veja também o método find(), que retorna o valor de um elemento encontrado no array em vez de seu índice.
//This method returns the index of the first element in an array that passes a test (provided as a function). If no element passes the test, it returns -1
console.log('Array default');
const arr = [10, 20, 30, 40, 50];
console.log(arr);

console.log('\nArray com o findIndex implementado');
const greaterThan30 = num => num > 30;
const index = arr.findIndex(greaterThan30);
console.log(index);
