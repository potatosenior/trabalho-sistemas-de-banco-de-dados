const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefone', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aluno',
        key: 'idpes'
      }
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'telefone',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "telefone_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
          { name: "telefone" },
        ]
      },
    ]
  });
};
