"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVector3 = function () {
    function StandardGillVector3(v1, v2, v3) {
        _classCallCheck(this, StandardGillVector3);

        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    _createClass(StandardGillVector3, [{
        key: "addToAttributeData",
        value: function addToAttributeData(attributeData) {
            attributeData.push(this.v1);
            attributeData.push(this.v2);
            attributeData.push(this.v3);
        }
    }, {
        key: "toUniformData",
        value: function toUniformData() {
            return [this.v1, this.v2, this.v3];
        }
    }]);

    return StandardGillVector3;
}();

exports.default = StandardGillVector3;