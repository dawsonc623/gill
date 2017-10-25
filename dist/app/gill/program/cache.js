"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/program/cache/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/program/context-source-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/program/source-program-map/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillProgramCache = _factory2.default.construct(_factory4.default.construct(), _factory6.default);
exports.default = gillProgramCache;