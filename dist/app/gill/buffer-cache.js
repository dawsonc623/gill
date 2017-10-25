"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/buffer-cache/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/context-models-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _factory5 = require("app/gill/model-buffer-map/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GillBufferCache = _factory2.default.construct(_factory4.default.construct(), _factory6.default);
exports.default = GillBufferCache;