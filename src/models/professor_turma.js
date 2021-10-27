const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professor_turma', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'professor',
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
    }
  }, {
    sequelize,
    tableName: 'professor_turma',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "professor_turma_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
          { name: "idturma" },
        ]
      },
    ]
  });
};
