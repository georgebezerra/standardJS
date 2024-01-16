const arr = [2, 4, 6, 8, 10];

console.log(Array.isArray(arr));
console.log(typeof arr);
console.log(arr);

if (Array.isArray(arr)) {
  //throw new Error('Funfou');
  console.log('Funfou');
}

console.log('\nfor of - pecorrendo os valores.');
for (let n of arr) {
  console.log(n);
}

console.log('\nfor in - pecorrendo os indices');
for (let n in arr) {
  console.log(n);
}

console.log(
  '\nseparando a função do forEach - passando 3 parâmetros; elemento, indice e o array completo',
);
function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

arr.forEach(praCadaElemento);
