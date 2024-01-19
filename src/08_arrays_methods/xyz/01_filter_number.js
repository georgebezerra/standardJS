console.log('Filtrando um número inteiro em um array');

const arr = ['1', 2, '3', 'apple', 'a', 'carro'];

console.log(typeof arr);

console.log('Filtrando usando - filter + Number');
const number1 = arr.filter(Number);
console.log(number1);

console.log('Filtrando usando - filter + Number + isInteger');
const number2 = arr.filter(Number.isInteger);
console.log(number2);
