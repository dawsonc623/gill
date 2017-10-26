"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeTypeMap = function () {
    function StandardGillAttributeTypeMap() {
        _classCallCheck(this, StandardGillAttributeTypeMap);

        this.attributeType = new Map();
    }

    _createClass(StandardGillAttributeTypeMap, [{
        key: "getAttributeType",
        value: function getAttributeType(webglType) {
            return this.attributeType.get(webglType);
        }
    }, {
        key: "hasAttributeType",
        value: function hasAttributeType(webglType) {
            return this.attributeType.has(webglType);
        }
    }, {
        key: "setAttributeType",
        value: function setAttributeType(webglType, gillAttributeType) {
            this.attributeType.set(webglType, gillAttributeType);
        }
    }]);

    return StandardGillAttributeTypeMap;
}();

exports.default = StandardGillAttributeTypeMap;