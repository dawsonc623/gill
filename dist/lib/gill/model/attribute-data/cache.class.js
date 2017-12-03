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
        value: function getAttributeData(model, name) {
            var hasAttributes = this.attributeData.has(model);
            var attributes = void 0,
                hasAttributeData = false;
            if (hasAttributes) {
                attributes = this.attributeData.get(model);
                hasAttributeData = attributes.has(name);
            }
            if (!hasAttributeData) {
                throw new Error("Attribute '" + name + "' not found in cache");
            }
            return attributes.get(name);
        }
    }, {
        key: "hasAttributeData",
        value: function hasAttributeData(model, name) {
            var hasAttributes = this.attributeData.has(model);
            var hasAttributeData = false;
            if (hasAttributes) {
                var attributes = this.attributeData.get(model);
                hasAttributeData = attributes.has(name);
            }
            return hasAttributeData;
        }
    }, {
        key: "setAttributeData",
        value: function setAttributeData(model, name, data) {
            var hasAttributes = this.attributeData.has(model);
            var attributes = void 0;
            if (hasAttributes) {
                attributes = this.attributeData.get(model);
            } else {
                attributes = new Map();
                this.attributeData.set(model, attributes);
            }
            attributes.set(name, data);
        }
    }]);

    return StandardGillModelAttributeDataCache;
}();

exports.default = StandardGillModelAttributeDataCache;