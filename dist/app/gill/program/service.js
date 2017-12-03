"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program/attribute/collection/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/attribute/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _cache = require("app/gill/program/cache");

var _cache2 = _interopRequireDefault(_cache);

var _factory5 = require("app/gill/program/factory");

var _factory6 = _interopRequireDefault(_factory5);

var _factory7 = require("app/gill/program/service/factory");

var _factory8 = _interopRequireDefault(_factory7);

var _service = require("app/gill/program/webgl/service");

var _service2 = _interopRequireDefault(_service);

var _factory9 = require("app/gill/program/texture/collection/factory");

var _factory10 = _interopRequireDefault(_factory9);

var _factory11 = require("app/gill/program/texture/factory");

var _factory12 = _interopRequireDefault(_factory11);

var _factory13 = require("app/gill/program/uniform/collection/factory");

var _factory14 = _interopRequireDefault(_factory13);

var _factory15 = require("app/gill/program/uniform/factory");

var _factory16 = _interopRequireDefault(_factory15);

var _typeMap = require("app/gill/program/variable/type-map");

var _typeMap2 = _interopRequireDefault(_typeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramService = _factory8.default.construct(_factory2.default, _factory4.default, _cache2.default, _factory6.default, _service2.default, _factory10.default, _factory12.default, _factory14.default, _factory16.default, _typeMap2.default);
exports.default = gillProgramService;