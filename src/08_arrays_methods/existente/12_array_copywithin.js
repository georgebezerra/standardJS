//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
//copywithin(): O método copyWithin() copia parte de um array para outra localização no mesmo array e o retorna sem alterar seu tamanho.
//method shallow copies part of an array to another location in the same array and returns the modifier array without
// modifiying its length.Syntax.copyWithin(target,start, end)

console.log('Array default');
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.copyWithin(2, 0, 2);

console.log('Array de numbers com copyWithin');
console.log(numbers);
