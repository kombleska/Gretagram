
const User = require('../models/userModel');

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a User
    const user = new User({
      mail: req.body.mail,
      pw: req.body.pw,
      phone: req.body.phone,
      addr: req.body.adde
    });

    // Save User in the database
    User.create(User, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
        else res.send(data);
  });
};

exports.connect = (req, res) => {
    User.connect(req.params.mail, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with mail ${req.params.mail}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with mail " + req.params.mail
          });
        }
      } else res.send(data);
    });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};