console.log(
  'Alguns métodos de array trabalhando em array exitente e outros geram novos arrays',
);
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(
  '\n1-Inserindo um novo elemento em um array existente em um determinado indice',
);
numeros[0] = 100;
console.log(numeros);

console.log('\n2-Inserindo um novo elemento - 6 - na última posição');
numeros.push(6);
console.log(numeros);

console.log('\n3-Join pode inserir elementos no arrays');
console.log(numeros.join('-'));

console.log(
  '\n4-concat gera um NOVO array e com isso pode-se modificar um outro array',
);
const numero2 = numeros.concat(7, 8, 9);
console.log(numero2);

console.log(
  '\n5-includes é um boolean que verifica se um elemento existe em um array',
);
console.log(numeros.includes(6));
console.log(numeros.includes(10));

console.log(
  '\n6-indexOf é um método que retorna o indíce de um elemento dentro de um array',
);
console.log(numeros.indexOf(4));
