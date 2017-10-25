"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = require("lib/gill/webgl/uniform/type/map.class");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillUniformTypeMapFactory = function () {
    function StandardGillUniformTypeMapFactory() {
        _classCallCheck(this, StandardGillUniformTypeMapFactory);
    }

    _createClass(StandardGillUniformTypeMapFactory, [{
        key: "construct",
        value: function construct() {
            return new _map2.default();
        }
    }]);

    return StandardGillUniformTypeMapFactory;
}();

exports.default = StandardGillUniformTypeMapFactory;