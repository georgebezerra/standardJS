//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/at
//at(): Thie method retuns the element at the specified index the array.It takes one argument: the index.

//O método at() recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores
// positivos ou negativos. Valores negativos contam apartir do último item do array.

//Isto não quer dizer que exista alguma coisa errada em utilizar a notação com colchetes. Por exemplo array[0]
// retornaria o primeiro item. Porém ao invés de utilizar o array.length para os últimos
// items; e.g array[array.length-1] para o último item, você pode utilizar o array.at(-1)

console.log('Array de frutas na ordem default');
const arr = ['apple', 'banana', 'cherry'];
console.log(arr);

console.log(
  '\nArray de frutas com o método at() - será retornado o elemento baseado no indice.',
);
console.log(arr.at(1));
