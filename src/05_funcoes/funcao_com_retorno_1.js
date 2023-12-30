function sempreRetornaUm() {
  return 1;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

function textoOuNumero(retornaTexto) {
  // if (retornaTexto) {
  //   return '\nSou um Texto!\n';
  // } else {
  //   return 123;
  // }

  return retornaTexto ? '\nSou um Texo!\n' : 123;
}

let texto = textoOuNumero(true);
console.log(texto);

//desta forma não é preciso criar uma variável, como feito acima.
console.log(textoOuNumero(false));
