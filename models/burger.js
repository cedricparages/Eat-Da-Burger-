var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers" , function (res) {
            cb(res);
        });
    },
    create: function (val, cb) {
        orm.insertOne("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    update: function(colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;