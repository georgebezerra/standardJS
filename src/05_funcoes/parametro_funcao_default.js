console.log('Funções SEM valor default');
function adicao(a, b, c, d) {
  return a + b + c + d;
}

console.log(adicao(1, 2, 3, 4));
console.log(adicao(1, 2, 3));
console.log(adicao(1, 2));
console.log(adicao(1));
console.log(adicao());
console.log('Fim!\n');

console.log('Funções COM valor default');
function soma(a = 0, b = 0, c = 0, d = 0) {
  return a + b + c + d;
}

console.log(soma(1, 2, 3, 4));
console.log(soma(1, 2, 3));
console.log(soma(1, 2));
console.log(soma(1));
console.log(soma());
console.log('Fim!');
