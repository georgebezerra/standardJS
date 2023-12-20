const nota = 3;

console.log('FALSO POSITIVO');
if (nota >= 9) console.log('Quadro de Honra!');
console.log('Parabéns\n');

console.log('Estrutura de controle CORRETA - FALSE - A ESTRUTURA NÃO EXECUTA');

if (nota >= 9) {
  console.log(
    'BLOCO DE CÓDIGO COM PROPOSITO - ASSOCIADO A UMA ESTRUTURA DE CONTROLE',
  );
  console.log('Quadro de Honra!\n');
  console.log('Parabéns\n');
}

console.log('Fim!');
