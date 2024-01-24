//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//values: this method returns an iterator that provides the values for each index in the array. It takes no argumets.
//valores: este método retorna um iterador que fornece os valores para cada índice do array. Não são necessários argumentos.

const arr = ['apple', 'banana', 'cherry'];
const iterator = arr.values();

for (const value of iterator) {
  console.log(value);
}
