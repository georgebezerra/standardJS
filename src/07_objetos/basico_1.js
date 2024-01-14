let y = 3;
let z = [];
let x = {};

console.log(Array.isArray());
console.log(Array.isArray(z));
console.log(Number.isInteger(y));
console.log(typeof x);

const produto = {
  nome: 'Caneta',
  preco: 9.99,
  desconto: 0.2,
};

console.log(typeof produto);

console.log('\nAcessando o valor pelo nome da chave');
console.log(produto['nome']);
console.log(produto['preco']);
console.log(produto['desconto']);

console.log('\nForma mais comum de acessar o valor');
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
