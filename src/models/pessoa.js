const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoa', {
    idpes: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    data_nasc: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idfacul: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faculdade',
        key: 'idfacul'
      }
    }
  }, {
    sequelize,
    tableName: 'pessoa',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "pessoa_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
        ]
      },
    ]
  });
};
