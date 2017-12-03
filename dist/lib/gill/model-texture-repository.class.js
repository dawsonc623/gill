"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardModelTextureRepository = function () {
    function StandardModelTextureRepository(webglService) {
        _classCallCheck(this, StandardModelTextureRepository);

        this.webglService = webglService;
        this.modelTextures = new Map();
    }

    _createClass(StandardModelTextureRepository, [{
        key: "getTexture",
        value: function getTexture(model, name, webglRenderingContext) {
            var hasTextures = this.modelTextures.has(model);
            var textures = void 0,
                hasTexture = false;
            if (hasTextures) {
                textures = this.modelTextures.get(model);
                hasTexture = textures.has(name);
            } else {
                textures = new Map();
                this.modelTextures.set(model, textures);
            }
            var texture = void 0;
            if (hasTexture) {
                texture = textures.get(name);
            } else {
                texture = this.webglService.createWebglTexture(webglRenderingContext);
                textures.set(name, texture);
            }
            return texture;
        }
    }]);

    return StandardModelTextureRepository;
}();

exports.default = StandardModelTextureRepository;