"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardAttributeCollection = function () {
    function StandardAttributeCollection() {
        _classCallCheck(this, StandardAttributeCollection);

        this.attributes = new Array();
    }

    _createClass(StandardAttributeCollection, [{
        key: "addAttribute",
        value: function addAttribute(attribute) {
            this.attributes.push(attribute);
        }
    }, {
        key: "eachAttribute",
        value: function eachAttribute(action) {
            this.attributes.forEach(function (attribute) {
                action(attribute);
            });
        }
    }]);

    return StandardAttributeCollection;
}();

exports.default = StandardAttributeCollection;