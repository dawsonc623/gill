"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/webgl/attribute/type/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _map = require("app/gill/webgl/attribute/type/map");

var _map2 = _interopRequireDefault(_map);

var _factory5 = require("app/gill/webgl/program/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/webgl/program/service/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _factory9 = require("app/gill/webgl/uniform/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/webgl/uniform/type/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _map3 = require("app/gill/webgl/uniform/type/map");

var _map4 = _interopRequireDefault(_map3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillWebglProgramService = _factory8.default.construct(_factory2.default, _factory4.default, _map2.default, _factory6.default, _factory10.default, _factory12.default, _map4.default);
exports.default = gillWebglProgramService;