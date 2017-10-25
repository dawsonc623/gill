"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cache = require("app/gill/program/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory = require("app/gill/program/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/service/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramService = _factory4.default.construct(_cache2.default, _factory2.default, _service2.default);
exports.default = gillProgramService;