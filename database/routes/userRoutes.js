

module.exports = app => {

    const users = require('../controllers/userControl');

    // To create 
    app.post("/newUser", users.create);

    //allUser
    app.get("/user", users.findAll);

    // Retrieve all user
    app.get("/user/:mail", users.connect);



}