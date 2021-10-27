const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'faculdade',
    {
      idfacul: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sigla: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'faculdade_sigla_key',
      },
      orcamento: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      idpes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'professor',
          key: 'idpes',
        },
      },
      idbloc: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'bloco',
          key: 'idbloc',
        },
      },
    },
    {
      sequelize,
      tableName: 'faculdade',
      schema: 'uni',
      timestamps: false,
      indexes: [
        {
          name: 'faculdade_pkey',
          unique: true,
          fields: [{ name: 'idfacul' }],
        },
        {
          name: 'faculdade_sigla_key',
          unique: true,
          fields: [{ name: 'sigla' }],
        },
      ],
    }
  );
};
