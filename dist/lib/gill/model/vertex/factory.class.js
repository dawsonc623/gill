"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vertex = require("lib/gill/model/vertex.class");

var _vertex2 = _interopRequireDefault(_vertex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillVertexFactory = function () {
    function StandardGillVertexFactory() {
        _classCallCheck(this, StandardGillVertexFactory);
    }

    _createClass(StandardGillVertexFactory, [{
        key: "construct",
        value: function construct(gillAttributeValues) {
            return new _vertex2.default(gillAttributeValues);
        }
    }]);

    return StandardGillVertexFactory;
}();

exports.default = StandardGillVertexFactory;