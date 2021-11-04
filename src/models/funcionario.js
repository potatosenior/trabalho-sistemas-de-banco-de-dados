const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const funcionario = sequelize.define(
    "funcionario",
    {
      idpes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "pessoa",
          key: "idpes",
        },
      },
    },
    {
      sequelize,
      tableName: "funcionario",
      schema: "see",
      timestamps: false,
      indexes: [
        {
          name: "funcionario_pk",
          unique: true,
          fields: [{ name: "idpes" }],
        },
      ],
    }
  );

  funcionario.associate = function (models) {
    funcionario.belongsTo(models.pessoa, {
      foreignKey: "idpes",
    });
  };

  return funcionario;
};
