//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original. O Array original não é modificado.
//This method returnsa shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

console.log('Array default');
const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log('Slice sendo implementado');
const sliceArr = arr.slice(2, 4);
console.log(sliceArr);
