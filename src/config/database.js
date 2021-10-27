module.exports = {
  host: '127.0.0.1',
  username: 'admin',
  password: 'admin',
  database: 'trab-sbd',
  dialect: 'postgres',
  storage: './__tests__/database.sqlite',
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
