const db = require("./src/models");
const readline = require("readline-sync");

const faculdade = async () => {
  try {
    let option = 0;

    do {
      console.log("[1] Criar faculdade.");
      console.log("[2] Listar faculdades.");
      console.log("[3] Editar faculdade.");
      console.log("[4] Excluir faculdade.");
      option = readline.question("O que deseja fazer? ");

      switch (option) {
        case "1":
          const transaction = await db.sequelize.transaction();

          try {
            const sigla = readline.question("Digite a sigla da faculdade: ");
            const orcamento = readline.question(
              "Digite o orcamento da faculdade: "
            );
            const idpes = readline.question(
              "Digite o id do coordenador da faculdade: "
            );
            const nomeBloco = readline.question(
              "Digite o nome do primeiro bloco da faculdade: "
            );

            const bloco = await db.bloco.create(
              {
                nome: nomeBloco,
              },
              {
                transaction,
              }
            );

            const faculdade = await db.faculdade.create(
              {
                sigla,
                orcamento,
                idpes: idpes || null,
                idbloc: bloco.idbloc,
              },
              {
                transaction,
              }
            );

            await transaction.commit();

            console.log(`Faculdade ${faculdade.sigla} criada com sucesso!`);
          } catch (error) {
            console.error(error);
            await transaction.rollback();

            console.error(error.message);
          }
          break;
        case "2":
          try {
            const faculdades = await db.faculdade.findAll({
              raw: true,
            });

            console.table(faculdades);
          } catch (error) {
            console.error(error.message);
          }
          break;
        case "3":
          try {
            const id = readline.question("Digite o id da faculdade: ");
            const siglaEdit = readline.question(
              "Digite a nova sigla da faculdade: "
            );
            const orcamentoEdit = readline.question(
              "Digite o novo orcamento da faculdade: "
            );
            const idpesEdit = readline.question(
              "Digite o novo idpes da faculdade: "
            );
            const idblocEdit = readline.question(
              "Digite o novo idbloc da faculdade: "
            );

            const faculdadeEdit = await db.faculdade.update(
              {
                sigla: siglaEdit || undefined,
                orcamento: orcamentoEdit || undefined,
                idpes: idpesEdit || undefined,
                idbloc: idblocEdit || undefined,
              },
              {
                where: {
                  idfacul: id,
                },
                returning: true,
                plain: true,
              }
            );

            console.log(
              `Faculdade ${faculdadeEdit[1].sigla} editada com sucesso!`
            );
          } catch (error) {
            console.error(error.message);
          }
          break;
        case "4":
          try {
            const idDelete = readline.question("Digite o id da faculdade: ");

            await db.faculdade.destroy({
              where: {
                idfacul: idDelete,
              },
              returning: true,
              plain: true,
            });

            console.log(`Faculdade excluída com sucesso!`);
          } catch (error) {
            console.error(error.message);
          }
          break;
        default:
          break;
      }
    } while (option !== "0");
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  await faculdade();
};

main();
