// #1: função COM parâmetros e COM retorno
function adicao(a, b) {
  return a + b;
}
console.log(adicao(1, 2));

// #2: função COM parâmetro e SEM retorno
function multiplicacao(a, b) {
  console.log(a * b);
}

multiplicacao(3, 4);

// #3: função SEM parâmetro e COM retorno
function retornarDataAtual() {
  return new Date();
}

console.log(retornarDataAtual());

// #4:função SEM parâmetro e SEM retorno
function exebirHoraAtual() {
  console.log(new Date().getHours());
}

exebirHoraAtual();
