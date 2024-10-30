const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.init();
  }
  //Configura a config do banco
  init() {
    this.db = new Sequelize({
      database: "revisao",
      host: "localhost",
      username: "root",
      dialect: "mysql",
      password: "",
    });
  }
}

module.exports = new Database();
