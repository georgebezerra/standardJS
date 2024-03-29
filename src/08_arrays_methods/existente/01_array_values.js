//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//values(): this method returns an iterator that provides the values for each index in the array. It takes no argumets.
//values(): este método retorna um iterador que fornece os valores para cada índice do array. Não são necessários argumentos.
//O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida
// pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).

const arr = ['apple', 'banana', 'cherry'];
const iterator = arr.values();

console.log('\nImprimindo o array');
console.log(arr);

console.log('\n Validando o type do array');
console.log(typeof arr);
console.log(typeof iterator);

console.log('\n Validando se o array é um array');
console.log(Array.isArray(arr));
console.log(Array.isArray(iterator));
console.log(iterator);

console.log('\nImprimindo os valores usando arr.values + for of');
for (const value of iterator) {
  console.log(value);
}
