const express = require("express");
const App = express();
const bodyParser = require("body-parser");
const db = require("./db/db.config");
const controller = require("./controllers/customer.controller.js");

App.use(bodyParser.json());

// If table will not be there then this function will be creating the database
db.sequelize.sync();

App.get("/", (req, res) => {
  res.send("Hello World from Server");
});

App.get("/customers/all", (req, res) => {
  controller.findAllCustomers(req, res)
})

App.post("/customers/new", (req, res) => {
  controller.createCustomer(req, res)
});

App.get("/customers/:email", (req, res) => {
  controller.findCustomerByEmail(req, res)
})

App.put("/customers/:email", (req, res) => {
  controller.updateCustomer(req, res)
})

App.post("/customers/:email", (req, res) => {
  controller.deleteCustomer(req, res)
})

App.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 21.46
