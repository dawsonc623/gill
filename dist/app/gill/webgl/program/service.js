"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/factory");

var _factory2 = _interopRequireDefault(_factory);

var _map = require("app/gill/webgl/attribute/type/map");

var _map2 = _interopRequireDefault(_map);

var _factory3 = require("app/gill/webgl/program/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/webgl/program/service/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/webgl/uniform/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _typeMap = require("app/gill/webgl/variable/type-map");

var _typeMap2 = _interopRequireDefault(_typeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglProgramService = _factory6.default.construct(_factory2.default, _map2.default, _factory4.default, _factory8.default, _typeMap2.default);
exports.default = gillWebglProgramService;