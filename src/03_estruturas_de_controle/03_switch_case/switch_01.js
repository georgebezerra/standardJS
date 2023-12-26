let nota = 2.9;

switch (Math.ceil(nota)) {
  case 8:
    console.log('Parabéns!');
    break;
  case 3:
    console.log('Reprovado!');
    break;
  case 1:
    console.log('Muito Reprovado!');
  default:
    console.log('Nota inválida!');
}

console.log('\nFIM!');
