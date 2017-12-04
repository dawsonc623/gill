"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModel = function () {
    function StandardGillModel(attributeDataRepository, indices, textureDataRepository, uniformValues) {
        _classCallCheck(this, StandardGillModel);

        this.attributeDataRepository = attributeDataRepository;
        this.indices = indices;
        this.textureDataRepository = textureDataRepository;
        this.uniformValues = uniformValues;
        this.indicesChanged = false;
    }

    _createClass(StandardGillModel, [{
        key: "addVertex",
        value: function addVertex(vertex) {
            var _this = this;

            this.indices.addIndex(this.indices.indexCount());
            this.indicesChanged = true;
            vertex.eachAttribute(function (attributeName, attributeValue) {
                //TODO Change this to follow the pattern used by the texture repository
                var attributeData = _this.attributeDataRepository.getAttributeData(_this, attributeName);
                attributeData.addAttributeValue(attributeValue);
            });
            return this;
        }
    }, {
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            return this.attributeDataRepository.getAttributeData(this, attributeName);
        }
    }, {
        key: "getBufferIndices",
        value: function getBufferIndices() {
            return this.indicesChanged;
        }
    }, {
        key: "getIndexData",
        value: function getIndexData() {
            return this.indices.toArray();
        }
    }, {
        key: "getTextureData",
        value: function getTextureData(name) {
            return this.textureDataRepository.getData(this, name);
        }
    }, {
        key: "getUniformData",
        value: function getUniformData(uniformName) {
            return this.uniformValues.getValue(uniformName).toUniformData();
        }
    }, {
        key: "setBufferIndices",
        value: function setBufferIndices(indicesChanged) {
            this.indicesChanged = indicesChanged;
        }
    }, {
        key: "setTexture",
        value: function setTexture(name, value) {
            this.textureDataRepository.setValue(this, name, value);
            return this;
        }
    }, {
        key: "setUniform",
        value: function setUniform(uniformName, uniformValue) {
            this.uniformValues.setValue(uniformName, uniformValue);
            return this;
        }
    }, {
        key: "setVertex",
        value: function setVertex(index, vertex) {
            var _this2 = this;

            vertex.eachAttribute(function (attributeName, attributeValue) {
                _this2.attributeDataRepository.setValueAt(_this2, attributeName, index, attributeValue);
            });
            return this;
        }
    }]);

    return StandardGillModel;
}();

exports.default = StandardGillModel;