//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
//This method applies a function to each element of an array and reduces the array to a single value.
console.log('Array defaul');
const numbers = [10, 20, 30, 40];
console.log(numbers);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log('Resultado do reduce');
console.log(sum);
