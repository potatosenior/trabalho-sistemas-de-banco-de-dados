const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ic', {
    idaluno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aluno',
        key: 'idpes'
      }
    },
    idprof: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'professor',
        key: 'idpes'
      }
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ic',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "ic_pkey",
        unique: true,
        fields: [
          { name: "idaluno" },
          { name: "idprof" },
        ]
      },
    ]
  });
};
