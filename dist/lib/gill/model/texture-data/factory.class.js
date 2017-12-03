"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textureData = require("lib/gill/model/texture-data.class");

var _textureData2 = _interopRequireDefault(_textureData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataFactory = function () {
    function StandardTextureDataFactory() {
        _classCallCheck(this, StandardTextureDataFactory);
    }

    _createClass(StandardTextureDataFactory, [{
        key: "construct",
        value: function construct(format, pixels) {
            return new _textureData2.default(format, pixels);
        }
    }]);

    return StandardTextureDataFactory;
}();

exports.default = StandardTextureDataFactory;