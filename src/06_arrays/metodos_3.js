const numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros);

console.log('for convercional - pecorrendo os valores');
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log(
  '\nfor of - pecorrendo os valores - faz a mesma coisa que for convercional',
);
for (let n of numeros) {
  console.log(n);
}

console.log('\nfor in - pecorrendo os indices');
for (let n in numeros) {
  console.log(n);
}

console.log(
  '\nforEach - recebe uma função anônimo como parâmeto e dentro da função tem disponível 3 parâmetros; elemento, indice e array. Assim criar um lógica pra pecorrer o array',
);
numeros.forEach(function () {
  console.log('Dentro do forEach!');
});

console.log(
  '\nseparando a função do forEach - passando 3 parâmetros; elemento, indice e o array completo',
);
function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

console.log(
  '\nPassando separado cada um dos parâmetros; elemento, indice e array',
);
numeros.forEach(function (elemento) {
  console.log(elemento + ' - Pecorrendo somente os elementos do array');
});

numeros.forEach(function (elemento, indice) {
  console.log(indice + ' - Pecorrendo somente os indice do array');
});

numeros.forEach(function (elemento, indice, array) {
  console.log(array + ' - Pecorrendo todo array');
});
