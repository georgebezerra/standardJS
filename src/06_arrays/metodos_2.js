const numeros = [1, 2, 3, 4, 5];
console.log('array de numeros = ' + numeros);

console.log(
  '1 - splice - serve pra remover elementos de um array, tendo como base o indice e quantidade de elementos a serem removidos.',
);
numeros.splice(1, 2);
console.log(numeros);

console.log('\n2 - pop - remove o último elemento do array');
numeros.pop();
console.log(numeros.pop());
console.log(numeros);
