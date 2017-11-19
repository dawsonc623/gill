"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/webgl/attribute/collection/factory");

var _factory2 = _interopRequireDefault(_factory);

var _service = require("app/gill/webgl/program/service");

var _service2 = _interopRequireDefault(_service);

var _factory3 = require("app/gill/webgl/service/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/webgl/uniform/collection/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webglService = _factory4.default.construct(_factory2.default, _service2.default, _factory6.default);
exports.default = webglService;