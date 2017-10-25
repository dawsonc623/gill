"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttribute = function () {
    function StandardGillAttribute(name, type, location) {
        _classCallCheck(this, StandardGillAttribute);

        this.name = name;
        this.type = type;
        this.location = location;
    }

    _createClass(StandardGillAttribute, [{
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getType",
        value: function getType() {
            return this.type;
        }
    }, {
        key: "toTypedArray",
        value: function toTypedArray(webglVariableData) {
            return this.type.getTypedArrayFactory().construct(webglVariableData);
        }
    }]);

    return StandardGillAttribute;
}();

exports.default = StandardGillAttribute;