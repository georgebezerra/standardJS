let x = 1;
var y = 2;
const z = 3;

//Assinatura de uma função comum.
function adicao(a, b) {
  return a + b;
}

//Função anônima - Função dentro de uma constante ou variável.
const somar = function (a, b) {
  return a + b;
};

console.log(somar(x, y));
