//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//from() : O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.
//No ES6, a sintaxe de classe permite a subclassificação de classes nativas e classes definidas pelo usuário;
// como resultado, os métodos estáticos pertencentes a classe, como Array.from, são "herdadas" por subclasses do Array
// e criam novas instâncias da subclasse, não do Array.
//This method creates a new array from an array-like object or an iterable object. It can take up to two arguments:
//the object to convert to an array, and a mapping function to apply to each element of the new array.

console.log('Array de objeto frutas na ordem default');
const obj = { 0: 'apple', 1: 'banana', 2: 'cherry', length: 3 };
console.log(obj);

console.log('\nArray de frutas com o método from() - .');
const arr = Array.from(obj);
console.log(arr);
