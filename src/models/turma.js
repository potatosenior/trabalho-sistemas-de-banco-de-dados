const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('turma', {
    idturma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    identific: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iddisc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'disciplina',
        key: 'iddisc'
      }
    },
    idsal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sala',
        key: 'idsal'
      }
    }
  }, {
    sequelize,
    tableName: 'turma',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "turma_pkey",
        unique: true,
        fields: [
          { name: "idturma" },
        ]
      },
    ]
  });
};
