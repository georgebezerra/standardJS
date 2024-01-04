function adicao(a, b, c, d) {
  return a + b + c + d;
}

console.log(adicao(1, 2, 3, 4));

//Suprimindo o último parâmetro e quando não se tem um valor default, gera um erro NaN.
console.log(adicao(1, 2, 3));
