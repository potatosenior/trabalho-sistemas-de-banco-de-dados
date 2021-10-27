const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disciplina', {
    iddisc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sigla: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nro_cred: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'disciplina',
    schema: 'uni',
    timestamps: false,
    indexes: [
      {
        name: "disciplina_pkey",
        unique: true,
        fields: [
          { name: "iddisc" },
        ]
      },
    ]
  });
};
