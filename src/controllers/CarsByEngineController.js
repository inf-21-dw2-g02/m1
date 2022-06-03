'use strict';

var utils = require('../utils/writer.js');
var CarsByEngineController = require('../service/CarsByEngineControllerService');

module.exports.retrieveCarsOnEngine = function retrieveCarsOnEngine (req, res, next, id) {
  CarsByEngineController.retrieveCarsOnEngine(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
