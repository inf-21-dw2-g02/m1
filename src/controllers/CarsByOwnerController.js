'use strict';

var utils = require('../utils/writer.js');
var CarsByOwnerController = require('../service/CarsByOwnerControllerService');

module.exports.retrieveCarsOnOwner = function retrieveCarsOnOwner (req, res, next, id) {
  CarsByOwnerController.retrieveCarsOnOwner(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
