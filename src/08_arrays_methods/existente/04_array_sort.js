//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//sort(): This method sorts the elements of an array in place and returns the sorted array.
//It can take an optional compare function as an argument.
//O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não
// é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.
//A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não
// pode ser garantido e depende da implementação realizada.

console.log('Array de frutas na ordem default:');
const arr = ['banana', 'apple', 'cherry'];
console.log(arr);

console.log('\nArray de frutas com o sort() sendo exetudado.');
const itemsort = arr.sort();
console.log(itemsort);
