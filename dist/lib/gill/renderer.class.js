"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillRenderer = function () {
    function StandardGillRenderer(gillModelBufferService, modelTextureRepository, gillProgram) {
        _classCallCheck(this, StandardGillRenderer);

        this.gillModelBufferService = gillModelBufferService;
        this.modelTextureRepository = modelTextureRepository;
        this.gillProgram = gillProgram;
        this.webglProgram = gillProgram.getWebglProgram();
        this.webglRenderingContext = gillProgram.getWebglRenderingContext();
    }

    _createClass(StandardGillRenderer, [{
        key: "drawModel",
        value: function drawModel(model) {
            var _this = this;

            this.webglRenderingContext.useProgram(this.webglProgram);
            // Bind attributes
            this.gillProgram.forEachAttribute(function (attribute) {
                var attributeName = attribute.getName(),
                    attributeType = attribute.getType();
                _this.webglRenderingContext.bindBuffer(_this.webglRenderingContext.ARRAY_BUFFER, _this.gillModelBufferService.getModelAttributeBuffer(model, attributeName, _this.webglRenderingContext));
                var attributeData = model.getAttributeData(attributeName);
                if (attributeData.needsBuffered()) {
                    var typedArrayConstructor = attributeType.getTypedArrayConstructor();
                    _this.webglRenderingContext.bufferData(_this.webglRenderingContext.ARRAY_BUFFER, typedArrayConstructor.from(attributeData.getData()), attribute.getUsage());
                    attributeData.setNeedsBuffered(false);
                }
                _this.webglRenderingContext.vertexAttribPointer(attribute.getLocation(), attributeType.getUnitSize(), attributeType.getDataType(), attributeData.normalize(), attributeData.getStride(), attributeData.getOffset());
            });
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ARRAY_BUFFER, null);
            // Bind textures
            var currentTexture = 0;
            this.gillProgram.eachTexture(function (texture) {
                var name = texture.getName(),
                    type = texture.getType(),
                    unit = "TEXTURE" + currentTexture;
                var bindTarget = texture.getBindTarget(),
                    data = model.getTextureData(name),
                    format = data.getFormat();
                _this.webglRenderingContext.activeTexture(_this.webglRenderingContext[unit]);
                _this.webglRenderingContext.bindTexture(bindTarget, _this.modelTextureRepository.getTexture(model, name, _this.webglRenderingContext));
                if (data.needsBuffered()) {
                    _this.webglRenderingContext.texImage2D(texture.getImageTarget(), 0, format, format, type.getDataType(), data.getPixels());
                    data.setNeedsBuffered(false);
                }
                _this.webglRenderingContext.uniform1i(texture.getLocation(), currentTexture);
                currentTexture += 1;
            });
            // Bind uniforms
            this.gillProgram.forEachUniform(function (uniform) {
                var uniformType = uniform.getType();
                var size = uniformType.getUnitSize(),
                    type = uniformType.getDataType() === _this.webglRenderingContext.FLOAT ? "f" : "i";
                var uniformFunction = "uniform" + size + type + "v";
                _this.webglRenderingContext[uniformFunction](uniform.getLocation(), model.getUniformData(uniform.getName()));
            });
            var modelIndices = model.getIndexData();
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, this.gillModelBufferService.getModelIndexBuffer(model, this.webglRenderingContext));
            if (model.getBufferIndices()) {
                this.webglRenderingContext.bufferData(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, Uint16Array.from(modelIndices), this.webglRenderingContext.STATIC_DRAW);
                model.setBufferIndices(false);
            }
            // Draw Elements
            this.webglRenderingContext.drawElements(this.webglRenderingContext.TRIANGLES, modelIndices.length, this.webglRenderingContext.UNSIGNED_SHORT, 0);
            this.webglRenderingContext.bindBuffer(this.webglRenderingContext.ELEMENT_ARRAY_BUFFER, null);
            this.webglRenderingContext.useProgram(null);
        }
    }]);

    return StandardGillRenderer;
}();

exports.default = StandardGillRenderer;