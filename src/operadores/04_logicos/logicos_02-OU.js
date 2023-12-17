//simulando E -- operador binário - opera em cima de 2 operandos

// OU - OR - || - precisa que um dos critérios, operandos, sejam verdadeiros

// let estaEnsolarado = true;
// let carroEstaNaGaragem = true;

// let estaEnsolarado = false;
// let carroEstaNaGaragem = true;

// let estaEnsolarado = true;
// let carroEstaNaGaragem = false;

let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoOU = '#2 - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);
