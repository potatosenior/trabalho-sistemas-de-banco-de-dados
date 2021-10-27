const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aluno', {
    idpes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pessoa',
        key: 'idpes'
      }
    },
    cra: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aluno',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "aluno_pkey",
        unique: true,
        fields: [
          { name: "idpes" },
        ]
      },
    ]
  });
};
