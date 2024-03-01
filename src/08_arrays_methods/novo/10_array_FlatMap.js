//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
//O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela
// o resultado em um novo array. É idêntico a um map seguido por um flat de profundidade 1, mas flatMap é bastante útil e mescla ambos em um método um pouco mais eficiente.
//This method maps each element using a mapping function, then flatterns the result into a new array.

console.log('Array default');
const arr = [1, 2, 3];
console.log(arr);

console.log('\nArray com o FlatMap - multiplicando cada elemento por 2.');
const result = arr.flatMap(x => [x * 2]);
console.log(result);
