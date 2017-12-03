"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelTextureRepository = require("lib/gill/model-texture-repository.class");

var _modelTextureRepository2 = _interopRequireDefault(_modelTextureRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardModelTextureRepositoryFactory = function () {
    function StandardModelTextureRepositoryFactory() {
        _classCallCheck(this, StandardModelTextureRepositoryFactory);
    }

    _createClass(StandardModelTextureRepositoryFactory, [{
        key: "construct",
        value: function construct(webglService) {
            return new _modelTextureRepository2.default(webglService);
        }
    }]);

    return StandardModelTextureRepositoryFactory;
}();

exports.default = StandardModelTextureRepositoryFactory;