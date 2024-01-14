const cliente = {
  codigo: 16532,
  nome: 'Ana',
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123,
    complemento: 'Apto 101 Bloco B',
    pontosRef: [
      { nome: 'Hospital X', muitoProximo: true },
      { nome: 'Hospital Y', muitoProximo: false },
    ],
  },
  nomeFilhos: ['Bia', 'Carlos', 'Gabriel'],
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[1]);
console.log(cliente.endereco.pontosRef[1].muitoProximo);
console.log(cliente.endereco.pontosRef[0]);
console.log(cliente.endereco.pontosRef[0].muitoProximo);
