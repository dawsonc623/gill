"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _factory = require("app/gill/model-texture-repository/factory");

var _factory2 = _interopRequireDefault(_factory);

var _service = require("app/gill/webgl/service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modelTextureRepository = _factory2.default.construct(_service2.default);
exports.default = modelTextureRepository;