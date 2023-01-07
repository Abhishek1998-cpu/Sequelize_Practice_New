const { Sequelize } = require("sequelize");

const dbName = "customer";
const dbUser = "postgres";
const dbPassword = "postgres";
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  // Default server on which Postgres Server will be running
  port: "5432",
  dialect: "postgres",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Requiring Models - This will be converted to table in Database
db.customers = require("../models/customer.model")(sequelize, Sequelize);

module.exports = db;
