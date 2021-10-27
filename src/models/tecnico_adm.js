const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tecnico_adm', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpes'
      }
    }
  }, {
    sequelize,
    tableName: 'tecnico_adm',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "tecnico_adm_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
        ]
      },
    ]
  });
};
