"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model/texture-data/repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/model/texture-data/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textureDataRepository = _factory2.default.construct(_factory4.default);
exports.default = textureDataRepository;