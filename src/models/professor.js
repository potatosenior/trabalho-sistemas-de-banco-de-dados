const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professor', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpes'
      }
    },
    salario: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'professor',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "professor_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
        ]
      },
    ]
  });
};
