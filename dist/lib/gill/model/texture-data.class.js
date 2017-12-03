"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureData = function () {
    function StandardTextureData(format, pixels) {
        _classCallCheck(this, StandardTextureData);

        this.format = format;
        this.pixels = pixels;
        this.hasChanged = true;
    }

    _createClass(StandardTextureData, [{
        key: "getFormat",
        value: function getFormat() {
            return this.format;
        }
    }, {
        key: "getPixels",
        value: function getPixels() {
            return this.pixels;
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

    return StandardTextureData;
}();

exports.default = StandardTextureData;