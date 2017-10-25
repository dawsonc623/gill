"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillNumber = function () {
    function StandardGillNumber(value) {
        _classCallCheck(this, StandardGillNumber);

        this.value = value;
    }

    _createClass(StandardGillNumber, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.value);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.value];
        }
    }]);

    return StandardGillNumber;
}();

exports.default = StandardGillNumber;