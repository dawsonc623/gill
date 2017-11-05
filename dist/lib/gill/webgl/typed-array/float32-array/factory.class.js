"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GillWebglFloat32ArrayFactory = function () {
    function GillWebglFloat32ArrayFactory() {
        _classCallCheck(this, GillWebglFloat32ArrayFactory);
    }

    _createClass(GillWebglFloat32ArrayFactory, [{
        key: "construct",
        value: function construct(arrayData) {
            return Float32Array.from(arrayData);
        }
    }]);

    return GillWebglFloat32ArrayFactory;
}();

exports.default = GillWebglFloat32ArrayFactory;