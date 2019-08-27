var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
 
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";"
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    })

  },

  insertOne: function (table, col, val, cb) {
    var queryString = "INSERT INTO " + table + '(' + col + ') VALUES ("' + val + '");'
    connection.query(queryString, function (err, response) {
      if (err) throw err;

      cb(response);
    })
  },

  updateOne: function (table, colVal, condition, cb) {
    var queryString = "UPDATE " + table + " SET " + objToSql(colVal) + " WHERE " + condition + ";"
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;

      cb(response);
    })
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;