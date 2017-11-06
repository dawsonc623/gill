"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program-webgl-adapter/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program-webgl-adapter/attribute/collection/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/program-webgl-adapter/uniform/collection/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramWebglServiceAdapter = _factory2.default.construct(_factory4.default, _factory6.default, _service2.default);
exports.default = gillProgramWebglServiceAdapter;