//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//splice(): O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
//splice(): method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log('Array default');
const fruits = ['apple', 'banana', 'cherry', 'orange'];
console.log(fruits);

console.log('\nArray após o splice ser implementado');
fruits.splice(2, 1, 'manga', 'kiwi');
console.log(fruits);
console.log('\nFim');
