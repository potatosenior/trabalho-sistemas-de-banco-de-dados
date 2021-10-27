const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aluno',
        key: 'idpes'
      }
    },
    idturma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'turma',
        key: 'idturma'
      }
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    faltas: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'matricula',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "matricula_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
          { name: "idturma" },
        ]
      },
    ]
  });
};
