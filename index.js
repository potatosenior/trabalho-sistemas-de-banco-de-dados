const db = require("./src/models");
const readline = require("readline-sync");

const hierarquia = async (idArbitro, idx = 1) => {
  try {
    // busca todos subordinados de um determinado arbitro, incluindo os dados da pessoa
    const subordinados = await db.arbitro.findAll({
      include: [
        {
          model: db.pessoa,
        },
      ],
      where: {
        idcoo: idArbitro,
      },
      raw: true,
      nest: true,
    });

    for (const arbitro of subordinados) {
      // para cada subordinado, busca também os subordinados desse arbitro
      if (arbitro.idpes != idArbitro) {
        arbitro.subordinados = await hierarquia(arbitro.idpes, idx + 1);
        arbitro.nivel = idx;
      }
    }

    return subordinados;
  } catch (error) {
    console.error(error);
  }
};

const logHierarquia = async (arbitroCoordenador, idx = 0) => {
  try {
    // imprime no console os subordinados de cada arbitro
    let prefix = "";
    for (let i = 0; i < idx; i++) prefix += "\t";

    console.log(
      `| ${prefix} (${arbitroCoordenador.nivel},  ${arbitroCoordenador.idpes}, ${arbitroCoordenador.pessoa.nomepes}, ${arbitroCoordenador.idcoo})`
    );

    for (const arbitro of arbitroCoordenador.subordinados) {
      // para cada subordinado, busca também os subordinados desse arbitro
      if (arbitro.idpes != arbitroCoordenador.idpes) {
        logHierarquia(arbitro, idx + 1);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const see = async () => {
  try {
    const idArbitro = Number(readline.question("Digite o id do arbitro: "));
    const arbitroRaiz = await db.arbitro.findByPk(idArbitro, {
      include: [
        {
          model: db.pessoa,
        },
      ],
      raw: true,
      nest: true,
    });
    arbitroRaiz.nivel = 0;
    arbitroRaiz.subordinados = await hierarquia(arbitroRaiz.idpes, 1);

    logHierarquia(arbitroRaiz);

    return;
  } catch (error) {
    console.error(error.message);
    return;
  }
};

const main = async () => {
  await see();

  process.exit(1);
};

main();
