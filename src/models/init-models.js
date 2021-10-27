var DataTypes = require("sequelize").DataTypes;
var _aluno = require("./aluno");
var _bloco = require("./bloco");
var _disciplina = require("./disciplina");
var _facul_disciplina = require("./facul_disciplina");
var _faculdade = require("./faculdade");
var _ic = require("./ic");
var _matricula = require("./matricula");
var _pessoa = require("./pessoa");
var _professor = require("./professor");
var _professor_turma = require("./professor_turma");
var _requisito_disciplina = require("./requisito_disciplina");
var _sala = require("./sala");
var _tecnico_adm = require("./tecnico_adm");
var _telefone = require("./telefone");
var _turma = require("./turma");

function initModels(sequelize) {
  var aluno = _aluno(sequelize, DataTypes);
  var bloco = _bloco(sequelize, DataTypes);
  var disciplina = _disciplina(sequelize, DataTypes);
  var facul_disciplina = _facul_disciplina(sequelize, DataTypes);
  var faculdade = _faculdade(sequelize, DataTypes);
  var ic = _ic(sequelize, DataTypes);
  var matricula = _matricula(sequelize, DataTypes);
  var pessoa = _pessoa(sequelize, DataTypes);
  var professor = _professor(sequelize, DataTypes);
  var professor_turma = _professor_turma(sequelize, DataTypes);
  var requisito_disciplina = _requisito_disciplina(sequelize, DataTypes);
  var sala = _sala(sequelize, DataTypes);
  var tecnico_adm = _tecnico_adm(sequelize, DataTypes);
  var telefone = _telefone(sequelize, DataTypes);
  var turma = _turma(sequelize, DataTypes);

  aluno.belongsToMany(professor, { as: 'idprof_professors', through: ic, foreignKey: "idaluno", otherKey: "idprof" });
  aluno.belongsToMany(turma, { as: 'idturma_turmas', through: matricula, foreignKey: "idpes", otherKey: "idturma" });
  disciplina.belongsToMany(disciplina, { as: 'iddiscreq_disciplinas', through: requisito_disciplina, foreignKey: "iddisc", otherKey: "iddiscreq" });
  disciplina.belongsToMany(disciplina, { as: 'iddisc_disciplina_requisito_disciplinas', through: requisito_disciplina, foreignKey: "iddiscreq", otherKey: "iddisc" });
  disciplina.belongsToMany(faculdade, { as: 'idfacul_faculdades', through: facul_disciplina, foreignKey: "iddisc", otherKey: "idfacul" });
  faculdade.belongsToMany(disciplina, { as: 'iddisc_disciplinas', through: facul_disciplina, foreignKey: "idfacul", otherKey: "iddisc" });
  professor.belongsToMany(aluno, { as: 'idaluno_alunos', through: ic, foreignKey: "idprof", otherKey: "idaluno" });
  professor.belongsToMany(turma, { as: 'idturma_turma_professor_turmas', through: professor_turma, foreignKey: "idpes", otherKey: "idturma" });
  turma.belongsToMany(aluno, { as: 'idpes_alunos', through: matricula, foreignKey: "idturma", otherKey: "idpes" });
  turma.belongsToMany(professor, { as: 'idpes_professors', through: professor_turma, foreignKey: "idturma", otherKey: "idpes" });
  ic.belongsTo(aluno, { as: "idaluno_aluno", foreignKey: "idaluno"});
  aluno.hasMany(ic, { as: "ics", foreignKey: "idaluno"});
  matricula.belongsTo(aluno, { as: "idpes_aluno", foreignKey: "idpes"});
  aluno.hasMany(matricula, { as: "matriculas", foreignKey: "idpes"});
  telefone.belongsTo(aluno, { as: "idpes_aluno", foreignKey: "idpes"});
  aluno.hasMany(telefone, { as: "telefones", foreignKey: "idpes"});
  faculdade.belongsTo(bloco, { as: "idbloc_bloco", foreignKey: "idbloc"});
  bloco.hasMany(faculdade, { as: "faculdades", foreignKey: "idbloc"});
  sala.belongsTo(bloco, { as: "idbloc_bloco", foreignKey: "idbloc"});
  bloco.hasMany(sala, { as: "salas", foreignKey: "idbloc"});
  facul_disciplina.belongsTo(disciplina, { as: "iddisc_disciplina", foreignKey: "iddisc"});
  disciplina.hasMany(facul_disciplina, { as: "facul_disciplinas", foreignKey: "iddisc"});
  requisito_disciplina.belongsTo(disciplina, { as: "iddisc_disciplina", foreignKey: "iddisc"});
  disciplina.hasMany(requisito_disciplina, { as: "requisito_disciplinas", foreignKey: "iddisc"});
  requisito_disciplina.belongsTo(disciplina, { as: "iddiscreq_disciplina", foreignKey: "iddiscreq"});
  disciplina.hasMany(requisito_disciplina, { as: "iddiscreq_requisito_disciplinas", foreignKey: "iddiscreq"});
  turma.belongsTo(disciplina, { as: "iddisc_disciplina", foreignKey: "iddisc"});
  disciplina.hasMany(turma, { as: "turmas", foreignKey: "iddisc"});
  facul_disciplina.belongsTo(faculdade, { as: "idfacul_faculdade", foreignKey: "idfacul"});
  faculdade.hasMany(facul_disciplina, { as: "facul_disciplinas", foreignKey: "idfacul"});
  pessoa.belongsTo(faculdade, { as: "idfacul_faculdade", foreignKey: "idfacul"});
  faculdade.hasMany(pessoa, { as: "pessoas", foreignKey: "idfacul"});
  aluno.belongsTo(pessoa, { as: "idpes_pessoa", foreignKey: "idpes"});
  pessoa.hasOne(aluno, { as: "aluno", foreignKey: "idpes"});
  professor.belongsTo(pessoa, { as: "idpes_pessoa", foreignKey: "idpes"});
  pessoa.hasOne(professor, { as: "professor", foreignKey: "idpes"});
  tecnico_adm.belongsTo(pessoa, { as: "idpes_pessoa", foreignKey: "idpes"});
  pessoa.hasOne(tecnico_adm, { as: "tecnico_adm", foreignKey: "idpes"});
  faculdade.belongsTo(professor, { as: "idpes_professor", foreignKey: "idpes"});
  professor.hasMany(faculdade, { as: "faculdades", foreignKey: "idpes"});
  ic.belongsTo(professor, { as: "idprof_professor", foreignKey: "idprof"});
  professor.hasMany(ic, { as: "ics", foreignKey: "idprof"});
  professor_turma.belongsTo(professor, { as: "idpes_professor", foreignKey: "idpes"});
  professor.hasMany(professor_turma, { as: "professor_turmas", foreignKey: "idpes"});
  turma.belongsTo(sala, { as: "idsal_sala", foreignKey: "idsal"});
  sala.hasMany(turma, { as: "turmas", foreignKey: "idsal"});
  matricula.belongsTo(turma, { as: "idturma_turma", foreignKey: "idturma"});
  turma.hasMany(matricula, { as: "matriculas", foreignKey: "idturma"});
  professor_turma.belongsTo(turma, { as: "idturma_turma", foreignKey: "idturma"});
  turma.hasMany(professor_turma, { as: "professor_turmas", foreignKey: "idturma"});

  return {
    aluno,
    bloco,
    disciplina,
    facul_disciplina,
    faculdade,
    ic,
    matricula,
    pessoa,
    professor,
    professor_turma,
    requisito_disciplina,
    sala,
    tecnico_adm,
    telefone,
    turma,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
