const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facul_disciplina', {
    idfacul: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'faculdade',
        key: 'idfacul'
      }
    },
    iddisc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'disciplina',
        key: 'iddisc'
      }
    }
  }, {
    sequelize,
    tableName: 'facul_disciplina',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "facul_disciplina_pkey",
        unique: true,
        fields: [
          { name: "idfacul" },
          { name: "iddisc" },
        ]
      },
    ]
  });
};
