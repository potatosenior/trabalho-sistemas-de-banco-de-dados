const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloco', {
    idbloc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bloco',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "bloco_pkey",
        unique: true,
        fields: [
          { name: "idbloc" },
        ]
      },
    ]
  });
};
