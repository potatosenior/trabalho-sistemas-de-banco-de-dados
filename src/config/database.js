module.exports = {
  host: "200.131.206.13",
  username: "guilherme_092011",
  password: "11921bcc016",
  database: "guilherme_092011",
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
