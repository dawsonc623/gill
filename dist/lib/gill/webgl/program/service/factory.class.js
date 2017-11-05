"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/webgl/program/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglProgramServiceFactory = function () {
    function StandardGillWebglProgramServiceFactory() {
        _classCallCheck(this, StandardGillWebglProgramServiceFactory);
    }

    _createClass(StandardGillWebglProgramServiceFactory, [{
        key: "construct",
        value: function construct(gillWebglAttributeFactory, gillWebglAttributeTypeFactory, gillWebglAttributeTypeMap, gillWebglProgramFactory, gillWebglUniformFactory, gillWebglUniformTypeFactory, gillWebglUniformTypeMap) {
            return new _service2.default(gillWebglAttributeFactory, gillWebglAttributeTypeFactory, gillWebglAttributeTypeMap, gillWebglProgramFactory, gillWebglUniformFactory, gillWebglUniformTypeFactory, gillWebglUniformTypeMap);
        }
    }]);

    return StandardGillWebglProgramServiceFactory;
}();

exports.default = StandardGillWebglProgramServiceFactory;