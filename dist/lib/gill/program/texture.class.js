"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTexture = function () {
    function StandardTexture(bindTarget, imageTarget, location, name, type) {
        _classCallCheck(this, StandardTexture);

        this.bindTarget = bindTarget;
        this.imageTarget = imageTarget;
        this.location = location;
        this.name = name;
        this.type = type;
    }

    _createClass(StandardTexture, [{
        key: "getBindTarget",
        value: function getBindTarget() {
            return this.bindTarget;
        }
    }, {
        key: "getImageTarget",
        value: function getImageTarget() {
            return this.imageTarget;
        }
    }, {
        key: "getLocation",
        value: function getLocation() {
            return this.location;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getType",
        value: function getType() {
            return this.type;
        }
    }]);

    return StandardTexture;
}();

exports.default = StandardTexture;