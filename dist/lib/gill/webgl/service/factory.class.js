"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _service = require("lib/gill/webgl/service.class");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglServiceFactory = function () {
    function StandardGillWebglServiceFactory() {
        _classCallCheck(this, StandardGillWebglServiceFactory);
    }

    _createClass(StandardGillWebglServiceFactory, [{
        key: "construct",
        value: function construct(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap) {
            return new _service2.default(webglProgramFactory, webglAttributeCollectionFactory, webglAttributeFactory, webglAttributeTypeFactory, webglAttributeTypeMap, webglUniformCollectionFactory, webglUniformFactory, webglUniformTypeFactory, webglUniformTypeMap);
        }
    }]);

    return StandardGillWebglServiceFactory;
}();

exports.default = StandardGillWebglServiceFactory;