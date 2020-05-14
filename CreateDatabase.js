/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mysql = require('mysql');


//Cinnexion à mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});



 //Ccréation de la bdd mysql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb; ", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});