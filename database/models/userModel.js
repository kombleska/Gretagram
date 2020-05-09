const sql = require('./db.js');

const User = function(user) {
    this.id = user.id,
    this.email = user.email;
    this.pw = user.pw;
    this.phone = user.phone;
    this.addr = user.addr;
};

User.getAll = result => {
  sql.query("SELECT * FROM gretaUser", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

User.connect = (userMail, result) => {
    sql.query("SELECT pw FROM gretaUser WHERE mail = ?",userMail, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
          }
      
          // not found user with the id
          result({ kind: "not_found" }, null);
        });
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO gretaUser SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
    
};

module.exports = User;

  