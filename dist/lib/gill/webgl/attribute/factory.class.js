"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _attribute = require("lib/gill/webgl/attribute.class");

var _attribute2 = _interopRequireDefault(_attribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeFactory = function () {
    function StandardGillAttributeFactory() {
        _classCallCheck(this, StandardGillAttributeFactory);
    }

    _createClass(StandardGillAttributeFactory, [{
        key: "construct",
        value: function construct(name, type, location) {
            return new _attribute2.default(name, type, location);
        }
    }]);

    return StandardGillAttributeFactory;
}();

exports.default = StandardGillAttributeFactory;