"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = require("lib/gill/model/vector2.class");

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector2Factory = function () {
    function StandardGillVector2Factory() {
        _classCallCheck(this, StandardGillVector2Factory);
    }

    _createClass(StandardGillVector2Factory, [{
        key: "construct",
        value: function construct(v1, v2) {
            return new _vector2.default(v1, v2);
        }
    }]);

    return StandardGillVector2Factory;
}();

exports.default = StandardGillVector2Factory;