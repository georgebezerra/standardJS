//Data (dia/mes/ano)

const nascimento = {
  dia: 1,
  mes: 2,
  ano: 1973,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

nascimento.dia = 11;

console.log(nascimento.exibir());
