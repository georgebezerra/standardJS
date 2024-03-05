//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
//This method returns the value of the first element in an array that passes a test (provides as function). If no element passes the test, it returns undefined.

console.log('Array default');
const arr = [10, 20, 30, 40, 50];
console.log(arr);
const greaterThan30 = num => num > 30;
const result = arr.find(greaterThan30);
console.log(result);
