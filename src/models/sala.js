const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sala', {
    idsal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cap: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idbloc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bloco',
        key: 'idbloc'
      }
    }
  }, {
    sequelize,
    tableName: 'sala',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "sala_pkey",
        unique: true,
        fields: [
          { name: "idsal" },
        ]
      },
    ]
  });
};
