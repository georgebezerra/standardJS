//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
//O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.
//This method retuns a new Array Interator object that contains the key/value pairs for each index in the array.
console.log('Array default');
const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
console.log('Array entries implementado');
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
