// configurações de acesso ao banco de dados
module.exports = {
  host: "200.131.206.13",
  username: "heitor_ff",
  password: "11921bcc026",
  database: "heitor_ff",
  dialect: "postgres",
  storage: "./__tests__/database.sqlite",
  dialectOptions: null,
  logging: false,
  pool: {
    max: 10,
    min: 1,
    acquire: 25000,
    idle: 50000,
  },
  define: {
    timestamps: false,
    underscored: false,
    underscoredAll: false,
    freezeTableName: true,
  },
};
