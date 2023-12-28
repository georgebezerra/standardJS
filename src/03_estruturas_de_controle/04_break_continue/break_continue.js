// O break é usado no switch.
// O continue é usado no for e while.

//break - sai do contexto da expressão, interrependo o for e vai próxima linha..
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

console.log('\n');

//continue - interrompe a repetição e vai pra próxima repetição.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
