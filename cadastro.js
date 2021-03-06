let data_obj = {
  participantes: [
    {
      nome: "Hélio",
      idade: 20,
    },

    {
      nome: "Honda",
      idade: 18,
    },

    {
      nome: "Gustavo",
      idade: 40,
    },

    {
      nome: "Rogério",
      idade: 25,
    },

    {
      nome: "Guilherme",
      idade: 19,
    },
  ],
};

function check(data_atual, data_evento) {
  if (data_evento > data_atual) {
    if (data_obj.participantes.length > 100) {
        console.log(
          "O número de participantes excede a quantidade permitida pelo evento.\n"
        );
      } else {
        console.log("Cadastro de evento permitido.\n");
      }

    for (pessoa of data_obj.participantes) {
      if (pessoa.idade < 18) {
        console.log(
          ` ** Cadastro não permitido para você, ${pessoa.nome} **\n`
        );
      } else if (pessoa.idade >= 18) {
        console.log(` ** Você pode participar, ${pessoa.nome} **\n`);
      }
    }
  } else {
    console.log("Evento não Permitido.");
  }
}

check(20, 30);
