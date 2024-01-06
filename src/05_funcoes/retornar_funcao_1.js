function retornaUmaFuncao() {
  function bomDia() {
    return 'Bom dia!!!';
  }

  return bomDia;
}

console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());

console.log('\nDuas formas distintas de invocar a função bomDia():');

console.log('\n1- forma');
console.log(retornaUmaFuncao()());

console.log('\n2- forma');
const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao());
