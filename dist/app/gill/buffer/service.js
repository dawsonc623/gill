"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/buffer/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _factory3 = require("app/gill/attribute-buffer-map/factory");

var _factory4 = _interopRequireDefault(_factory3);

var _bufferCache = require("app/gill/buffer-cache");

var _bufferCache2 = _interopRequireDefault(_bufferCache);

var _factory5 = require("app/gill/buffer/factory");

var _factory6 = _interopRequireDefault(_factory5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillBufferService = _factory2.default.construct(_factory4.default, _bufferCache2.default, _factory6.default);
exports.default = gillBufferService;