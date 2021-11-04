const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const pessoa = sequelize.define(
    "pessoa",
    {
      idpes: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cpf: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        unique: "cpf_pes_sk",
      },
      nomepes: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      /*  titulopes: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      }, */
    },
    {
      sequelize,
      tableName: "pessoa",
      schema: "see",
      timestamps: false,
      indexes: [
        {
          name: "cpf_pes_sk",
          unique: true,
          fields: [{ name: "cpf" }],
        },
        {
          name: "pessoa_pk",
          unique: true,
          fields: [{ name: "idpes" }],
        },
      ],
    }
  );

  pessoa.associate = function (models) {
    pessoa.hasOne(models.funcionario, {
      foreignKey: "idpes",
    });
  };

  return pessoa;
};
