function executar(fn, n1, n2) {
  if (typeof fn === 'function') {
    console.log(fn(n1, n2));
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

executar(somar, 90, 50);
executar(subtrair, 80, 60);
executar(multiplicar, 10, 2);

function bomDia() {
  return 'Bom dia!!\n';
}

console.log(bomDia());
