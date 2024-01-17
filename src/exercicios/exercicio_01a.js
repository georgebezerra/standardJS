function cummprimentar(nome) {
  return 'Olá ' + nome + '!';
}

function cummprimentar01(nome) {
  return `Olá ${nome} !`;
}

function cummprimentar02(nome) {
  const saudacao = 'Olá';
  return [saudacao, nome].join(',').concat('!');
}

cummprimentar('George');
cummprimentar01('George');
cummprimentar02('George');
