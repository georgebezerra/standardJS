function executar(funcao) {
  if (typeof funcao === 'function') {
    console.log(funcao());
  }
}

function bomDia() {
  return 'Bom dia!';
}

executar(3);
executar(bomDia); // <-- Parte central da aula.

const x = bomDia;
const y = bomDia(); // <-- Usando () se está invocando a função.

console.log(x);
console.log(x());
console.log(y);
console.log(y());
