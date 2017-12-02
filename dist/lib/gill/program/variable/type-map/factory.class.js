"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeMap = require("lib/gill/program/variable/type-map.class");

var _typeMap2 = _interopRequireDefault(_typeMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardVariableTypeMapFactory = function () {
    function StandardVariableTypeMapFactory() {
        _classCallCheck(this, StandardVariableTypeMapFactory);
    }

    _createClass(StandardVariableTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _typeMap2.default();
        }
    }]);

    return StandardVariableTypeMapFactory;
}();

exports.default = StandardVariableTypeMapFactory;