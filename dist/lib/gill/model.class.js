"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillModel = function () {
    function StandardGillModel(changedAttributes, indices, uniformValues, vertices) {
        _classCallCheck(this, StandardGillModel);

        this.changedAttributes = changedAttributes;
        this.indices = indices;
        this.uniformValues = uniformValues;
        this.vertices = vertices;
        this.indicesChanged = false;
    }

    _createClass(StandardGillModel, [{
        key: "addVertex",
        value: function addVertex(vertex) {
            var _this = this;

            this.vertices.addVertex(vertex);
            this.indices.addIndex(this.indices.indexCount());
            this.indicesChanged = true;
            //TODO Derive changed attributes from changed vertices as well? How to handle vertex updates. Could make vertices
            //     immutable (somehow) and have a "replaceVertex" method. I do not like that, though. Another option is to
            //     create an AttributeService to interact with attributes on a model. It would handle triggering "needs changed"
            //     sort of communication as attributes are updated.
            this.changedAttributes.eachChanged(function (attributeName, attributeChanged) {
                _this.changedAttributes.setChanged(attributeName, true);
            });
            return this;
        }
    }, {
        key: "getAttributeData",
        value: function getAttributeData(attributeName) {
            //TODO Error handling
            var attributeData = new Array();
            this.vertices.eachVertex(function (vertex) {
                vertex.getAttribute(attributeName).addToAttributeData(attributeData);
            });
            return attributeData;
        }
    }, {
        key: "getBufferAttribute",
        value: function getBufferAttribute(attributeName) {
            var trackingAttribute = this.changedAttributes.hasChanged(attributeName);
            var rebufferAttribute = true;
            if (trackingAttribute) {
                rebufferAttribute = this.changedAttributes.getChanged(attributeName);
            }
            return rebufferAttribute;
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
        key: "getUniformData",
        value: function getUniformData(uniformName) {
            //TODO Error handling
            return this.uniformValues.getValue(uniformName).toUniformData();
        }
    }, {
        key: "setBufferAttribute",
        value: function setBufferAttribute(attributeName, bufferAttribute) {
            this.changedAttributes.setChanged(attributeName, bufferAttribute);
        }
    }, {
        key: "setBufferIndices",
        value: function setBufferIndices(indicesChanged) {
            this.indicesChanged = indicesChanged;
        }
    }, {
        key: "setUniform",
        value: function setUniform(uniformName, uniformValue) {
            this.uniformValues.setValue(uniformName, uniformValue);
            return this;
        }
    }]);

    return StandardGillModel;
}();

exports.default = StandardGillModel;