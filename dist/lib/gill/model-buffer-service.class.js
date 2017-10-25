"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModelBufferService = function () {
    function StandardGillModelBufferService(gillBufferService) {
        _classCallCheck(this, StandardGillModelBufferService);

        this.gillBufferService = gillBufferService;
    }

    _createClass(StandardGillModelBufferService, [{
        key: "getModelAttributeBuffer",
        value: function getModelAttributeBuffer(gillModel, attributeName, webglRenderingContext) {
            var gillBuffer = this.gillBufferService.getModelBuffer(gillModel, webglRenderingContext);
            var hasAttributeBuffer = gillBuffer.hasAttributeBuffer(attributeName);
            var attributeBuffer = void 0;
            if (hasAttributeBuffer) {
                attributeBuffer = gillBuffer.getAttributeBuffer(attributeName);
            } else {
                attributeBuffer = webglRenderingContext.createBuffer();
                gillBuffer.setAttributeBuffer(attributeName, attributeBuffer);
            }
            return attributeBuffer;
        }
    }, {
        key: "getModelIndexBuffer",
        value: function getModelIndexBuffer(gillModel, webglRenderingContext) {
            var gillBuffer = this.gillBufferService.getModelBuffer(gillModel, webglRenderingContext);
            return gillBuffer.getIndexBuffer();
        }
    }]);

    return StandardGillModelBufferService;
}();

exports.default = StandardGillModelBufferService;