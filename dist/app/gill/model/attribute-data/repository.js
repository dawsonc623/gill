"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model/attribute-data/repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _cache = require("app/gill/model/attribute-data/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory3 = require("app/gill/model/attribute-data/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillModelAttributeDataRepository = _factory2.default.construct(_cache2.default, _factory4.default);
exports.default = gillModelAttributeDataRepository;