console.log(
  'Duas expressões resultar em TRUE (aritméticos/relacionais/lógicos)',
);
let verdadeira1 = 2 + 5 >= 7 && 8 > 2;
let verdadeira2 = !(6 * 6 < 3);

console.log(verdadeira1);
console.log(verdadeira2);

console.log('\n');

console.log(
  'Duas expressões resultar em FALSE (aritméticos/relacionais/lógicos)',
);

let falso1 = 8 - 4 > 12 || false || 15 === '15';
let falso2 = !(7 !== 6 + 1 || '3' !== 3);

console.log(falso1);
console.log(falso2);
