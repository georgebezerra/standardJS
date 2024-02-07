//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//forEach: O método forEach() executa uma dada função em cada elemento de um array.
//method executes a provided function once for each array element. It doesn't return anything, it just executes
//the callback function on each element of the array.

console.log('Array de frutas default');
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

console.log('\nforEach() sendo implementado com function expression anônima');
fruits.forEach(function (item) {
  console.log(item);
});

console.log(
  '\nforEach() sendo implementado com function expression - arrow function',
);
fruits.forEach(item => {
  console.log(item);
});
