/* CURRYING -é o processo de transformar uma função que espera vários argumentos em uma função
que espera um único argumento e retorna outra função curried. Foi inventada por Moses Schönfinkel e Gottlob Frege.
*/
console.log('Função sem currying');
function somar1(a, b) {
  return a + b;
}
console.log(somar1(5, 4));

console.log('\nFunção com currying');
function somar2(a) {
  return function (b) {
    return a + b;
  };
}
console.log(somar2(5, 4)); //errado
console.log(somar2(5)(4)); //certo - currying

console.log('\nOutra forma de se feito a mesma coisa');
const somarMais10 = somar2(10);
console.log(somarMais10(5));
