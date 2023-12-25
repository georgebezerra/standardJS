// [1, 1] [1,2] [1,3]
// [2,1] [2,2] [2,3]
// [3,1] [3,2] [3,3]

//A ideia de quando se tem 2 laços de repetição
//for (let i = 1; i <= 3; i++) {
// O laço externo executa 1 vez: 1
//console.log(i);
//for (let j = 1; j <= 3; j++) {
//O laço interno executa todas as vezes o quanto for necessário: 1 2 3
//console.log(j);
//}
//}

for (let i = 1; i <= 3; i++) {
  let linha = '';
  for (let j = 1; j <= 3; j++) {
    linha += `[${i}, ${j}] `;
  }
  console.log(linha);
}
