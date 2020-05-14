/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Connexion à la base de donnée mydb
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "roote",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  
  console.log("Connected!");
  
  var sql = "CREATE TABLE user (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table user created");
  });
  
  var sql = "CREATE TABLE post (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table post created");
  });
  
   var sql = "CREATE TABLE evenement (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table evenement created");
  });
  
   var sql = "CREATE TABLE aime (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table aimecreated");
  });
  
   var sql = "CREATE TABLE comment (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table comment created");
  });
  
   var sql = "CREATE TABLE share (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table share created");
  });
  
   var sql = "CREATE TABLE suivi (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table suivi created");
  });
  
  
  
  
 //Insertion des données
 var sql = "INSERT INTO user (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
   var sql = "INSERT INTO post (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
  var sql = "INSERT INTO evenement (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
  var sql = "INSERT INTO aime (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
  var sql = "INSERT INTO comment (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
  var sql = "INSERT INTO share (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  
  var sql = "INSERT INTO suivi (---, --) VALUES ?";
  var values = [
    ['John', 'Highway 71'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});