"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeDataCache = function () {
    function StandardGillModelAttributeDataCache() {
        _classCallCheck(this, StandardGillModelAttributeDataCache);

        this.attributeData = new Map();
    }

    _createClass(StandardGillModelAttributeDataCache, [{
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            var hasAttributeData = this.attributeData.has(attributeName);
            if (!hasAttributeData) {
                throw new Error("Attribute '" + attributeName + "' not found in cache");
            }
            return this.attributeData.get(attributeName);
        }
    }, {
        key: "hasAttributeData",
        value: function hasAttributeData(attributeName) {
            return this.attributeData.has(attributeName);
        }
    }, {
        key: "setAttributeData",
        value: function setAttributeData(attributeName, attributeData) {
            this.attributeData.set(attributeName, attributeData);
        }
    }]);

    return StandardGillModelAttributeDataCache;
}();

exports.default = StandardGillModelAttributeDataCache;