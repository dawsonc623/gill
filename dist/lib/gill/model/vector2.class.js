"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector2 = function () {
    function StandardGillVector2(v1, v2) {
        _classCallCheck(this, StandardGillVector2);

        this.v1 = v1;
        this.v2 = v2;
    }

    _createClass(StandardGillVector2, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.v1);
            attributeData.push(this.v2);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.v1, this.v2];
        }
    }]);

    return StandardGillVector2;
}();

exports.default = StandardGillVector2;