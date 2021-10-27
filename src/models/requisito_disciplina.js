const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('requisito_disciplina', {
    iddisc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'disciplina',
        key: 'iddisc'
      }
    },
    iddiscreq: {
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
    tableName: 'requisito_disciplina',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "requisito_disciplina_pkey",
        unique: true,
        fields: [
          { name: "iddisc" },
          { name: "iddiscreq" },
        ]
      },
    ]
  });
};
