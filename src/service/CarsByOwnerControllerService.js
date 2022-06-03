'use strict';
var sql = require('../utils/db.js');


/**
 * Retrieve Owners based on Car ID
 *
 * id Long 
 * returns List
 **/
exports.retrieveCarsOnOwner = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM car WHERE ownerId = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}