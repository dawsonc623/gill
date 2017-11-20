"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelAttributeData = function () {
    function StandardGillModelAttributeData(data, hasChanged, normalized, offset, stride) {
        _classCallCheck(this, StandardGillModelAttributeData);

        this.data = data;
        this.hasChanged = hasChanged;
        this.normalized = normalized;
        this.offset = offset;
        this.stride = stride;
    }

    _createClass(StandardGillModelAttributeData, [{
        key: "addAttributeValue",
        value: function addAttributeValue(attributeValue) {
            attributeValue.addToAttributeData(this.data);
            this.hasChanged = true;
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.data;
        }
    }, {
        key: "getOffset",
        value: function getOffset() {
            return this.offset;
        }
    }, {
        key: "getStride",
        value: function getStride() {
            return this.stride;
        }
    }, {
        key: "isNormalized",
        value: function isNormalized() {
            return this.normalized;
        }
    }, {
        key: "needsBuffered",
        value: function needsBuffered() {
            return this.hasChanged;
        }
    }, {
        key: "setNeedsBuffered",
        value: function setNeedsBuffered(needsBuffered) {
            this.hasChanged = needsBuffered;
        }
    }]);

    return StandardGillModelAttributeData;
}();

exports.default = StandardGillModelAttributeData;