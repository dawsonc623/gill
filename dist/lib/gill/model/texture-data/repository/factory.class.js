"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _repository = require("lib/gill/model/texture-data/repository.class");

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataRepositoryFactory = function () {
    function StandardTextureDataRepositoryFactory() {
        _classCallCheck(this, StandardTextureDataRepositoryFactory);
    }

    _createClass(StandardTextureDataRepositoryFactory, [{
        key: "construct",
        value: function construct(textureDataFactory) {
            return new _repository2.default(textureDataFactory);
        }
    }]);

    return StandardTextureDataRepositoryFactory;
}();

exports.default = StandardTextureDataRepositoryFactory;