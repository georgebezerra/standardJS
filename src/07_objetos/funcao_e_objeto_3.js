console.log('Este algoritimo mostra que THIS é um Objeto global');
function produto() {
  console.log(this);
}

produto();

console.log(
  'FUNÇÃO CONSTRUTORA -> Objeto: Quando se cria uma função e invoca a função junto a palavra reservada NEW. Obs: Atente com o THIS.' +
    ' Com a FUNÇÃO CONSTRUTORA se define a estrutura do Objeto.',
);
function Data(dia = 1, mes = 1, ano = 2021) {
  console.log(this);
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

//new Data() - Criando um objeto Data
const d1 = new Data();
const d2 = new Data(24, 12, 2022);
const d3 = new Data(31, 12, 2021);
console.log(typeof d1);
console.log(d1);
console.log(d2);
console.log(d3);

console.log('\nExemplo com uma função dentro de uma função construtora');
console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
