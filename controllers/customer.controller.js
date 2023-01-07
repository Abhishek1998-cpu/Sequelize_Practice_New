const db = require("../db/db.config");
const Customer = db.customers;

function createCustomer(req, res) {
  console.log("Body = " + JSON.stringify(req.body))
  if(!req.body.name || !req.body.email || !req.body.age){
    return res.status(400).send({
      message: "Bad or Incomplete or Incorrect Data"
    })
  }
  const customerObject = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }

  // This will be saving the customerObject into the customers table 
  Customer.create(customerObject).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    res.status(500).send(error)
  })
}

function findAllCustomers(req, res) {
  Customer.findAll().then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    res.status(500).send(error)
  })
}

function findCustomerByEmail(req, res) {
  const userEmail = req.params.email
  Customer.findOne({where: {email: userEmail}}).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    res.status(500).send(error)
  })
}

function updateCustomer(req, res) {
  const updatedData = {
    name: req.body.name,
    email: req.params.email,
    age: req.body.age
  }
  Customer.update(updatedData, {where: {
    email: req.body.email
  }}).then((data) => {
    res.status(200).send("Data Updated Successfully for " + req.body.email)
  }).catch((error) => {
    res.status(500).send(error)})
}

function deleteCustomer(req, res) {
  Customer.destroy({where: {email: req.params.email}}).then((data) => {
    res.status(200).send("User deleted Successfully " + req.params.email)
  }).catch((error) => {
    res.status(500).send(error)
  })
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer,
};
