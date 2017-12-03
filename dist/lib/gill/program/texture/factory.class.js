"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _texture = require("lib/gill/program/texture.class");

var _texture2 = _interopRequireDefault(_texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureFactory = function () {
    function StandardTextureFactory() {
        _classCallCheck(this, StandardTextureFactory);
    }

    _createClass(StandardTextureFactory, [{
        key: "construct",
        value: function construct(bindTarget, imageTarget, location, name, type) {
            return new _texture2.default(bindTarget, imageTarget, location, name, type);
        }
    }]);

    return StandardTextureFactory;
}();

exports.default = StandardTextureFactory;