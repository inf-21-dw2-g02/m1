'use strict';

var utils = require('../utils/writer.js');
var CarsByManufacturerController = require('../service/CarsByManufacturerControllerService');

module.exports.retrieveCarsOnManufacturer = function retrieveCarsOnManufacturer (req, res, next, id) {
  CarsByManufacturerController.retrieveCarsOnManufacturer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
