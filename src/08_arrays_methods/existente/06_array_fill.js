//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
//fill(): This method fills all the elements of an array from a start index to an end index witha static value.
// It can take upto three arguments: the value to fill with, the start index, and the end index.

//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

console.log('Array de frutas na ordem default');
const arr = ['apple', 'banana', 'cherry'];
console.log(arr);

console.log(
  '\nArray de frutas com o método fill() - será retornado o elemento orange entre o primeiro e último indice.',
);
arr.fill('orange', 1, 2);
console.log(arr);
