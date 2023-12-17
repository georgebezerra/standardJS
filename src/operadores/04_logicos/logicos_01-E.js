//simulando E -- operador binário - opera em cima de 2 operandos

// E - AND -  && - precisa que os dois critérios, operandos, sejam verdadeiros

let temDinheiroNaConta = true;
let estaEnsolarado = true;

// let temDinheiroNaConta = false;
// let estaEnsolarado = true;

// let temDinheiroNaConta = true;
// let estaEnsolarado = false;

// let temDinheiroNaConta = false;
// let estaEnsolarado = false;

let resultadoE = '#1 - Vai pro shopping? ';
resultadoE += temDinheiroNaConta && estaEnsolarado;
console.log(resultadoE);
