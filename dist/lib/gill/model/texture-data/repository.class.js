"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardTextureDataRepository = function () {
    function StandardTextureDataRepository(textureDataFactory) {
        _classCallCheck(this, StandardTextureDataRepository);

        this.textureDataFactory = textureDataFactory;
        this.textureData = new Map();
    }

    _createClass(StandardTextureDataRepository, [{
        key: "getData",
        value: function getData(model, name) {
            var hasTextures = this.textureData.has(model);
            var textureData = void 0,
                hasTextureData = false;
            if (hasTextures) {
                textureData = this.textureData.get(model);
                hasTextureData = textureData.has(name);
            }
            if (!hasTextureData) {
                throw new Error("Texture " + name + " not found for model");
            }
            return textureData.get(name);
        }
    }, {
        key: "setValue",
        value: function setValue(model, name, value) {
            var hasTextures = this.textureData.has(model);
            var textureData = void 0,
                hasTextureData = false;
            if (hasTextures) {
                textureData = this.textureData.get(model);
            } else {
                textureData = new Map();
                this.textureData.set(model, textureData);
            }
            textureData.set(name, this.textureDataFactory.construct(6408, //TODO Hard-coded RGBA - not sure how to get WebGL values in here, since WebGL does not come in at this point. May need to be a part of TextureValue, since it knows what the format of its data should be, presumably
            value));
        }
    }]);

    return StandardTextureDataRepository;
}();

exports.default = StandardTextureDataRepository;