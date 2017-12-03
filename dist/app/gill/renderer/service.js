"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/renderer/service/factory");

var _factory2 = _interopRequireDefault(_factory);

var _modelTextureRepository = require("app/gill/model-texture-repository");

var _modelTextureRepository2 = _interopRequireDefault(_modelTextureRepository);

var _service = require("app/gill/program/service");

var _service2 = _interopRequireDefault(_service);

var _factory3 = require("app/gill/renderer/factory");

var _factory4 = _interopRequireDefault(_factory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gillRendererService = _factory2.default.construct(_modelTextureRepository2.default, _service2.default, _factory4.default);
exports.default = gillRendererService;