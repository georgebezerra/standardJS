function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

function cumprimentar02(nome) {
  return 'Olá, ' + nome + '!';
}

function cumprimentar03(nome) {
  const saudacao = 'Olá';
  return [saudacao, nome].join(',').concat('!');
}

console.log(cumprimentar('Leonardo'));
console.log(cumprimentar02('Maria'));
console.log(cumprimentar03('Carlos'));
