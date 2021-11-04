const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const arbitro = sequelize.define(
    "arbitro",
    {
      idpes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "funcionario",
          key: "idpes",
        },
      },
      idcoo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "arbitro",
          key: "idpes",
        },
      },
    },
    {
      sequelize,
      tableName: "arbitro",
      schema: "see",
      timestamps: false,
      indexes: [
        {
          name: "arbitro_pk",
          unique: true,
          fields: [{ name: "idpes" }],
        },
      ],
    }
  );

  arbitro.associate = function (models) {
    arbitro.belongsTo(models.funcionario, {
      foreignKey: "idpes",
    });

    arbitro.belongsTo(models.pessoa, {
      foreignKey: "idpes",
    });
  };

  return arbitro;
};
