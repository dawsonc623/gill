"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillAttributeValueMap = function () {
    function StandardGillAttributeValueMap() {
        _classCallCheck(this, StandardGillAttributeValueMap);

        this.attributeValues = new Map();
    }

    _createClass(StandardGillAttributeValueMap, [{
        key: "hasValue",
        value: function hasValue(attributeName) {
            return this.attributeValues.has(attributeName);
        }
    }, {
        key: "getValue",
        value: function getValue(attributeName) {
            return this.attributeValues.get(attributeName);
        }
    }, {
        key: "setValue",
        value: function setValue(attributeName, attributeValue) {
            this.attributeValues.set(attributeName, attributeValue);
        }
    }]);

    return StandardGillAttributeValueMap;
}();

exports.default = StandardGillAttributeValueMap;