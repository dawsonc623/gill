import GillTypedArrayFactory                from "lib/gill/webgl/typed-array/factory.type";
import GillWebglAttribute                   from "lib/gill/webgl/attribute.type";
import GillWebglAttributeCollection         from "lib/gill/webgl/attribute/collection.type";
import GillWebglAttributeCollectionFactory  from "lib/gill/webgl/attribute/collection/factory.type";
import GillWebglAttributeFactory            from "lib/gill/webgl/attribute/factory.type";
import GillWebglAttributeTypeFactory        from "lib/gill/webgl/attribute/type/factory.type";
import GillWebglAttributeTypeMap            from "lib/gill/webgl/attribute/type/map.type";
import GillWebglProgramFactory              from "lib/gill/webgl/program/factory.type";
import GillWebglService                     from "lib/gill/webgl/service.type";
import GillWebglUniform                     from "lib/gill/webgl/uniform.type";
import GillWebglUniformCollection           from "lib/gill/webgl/uniform/collection.type";
import GillWebglUniformCollectionFactory    from "lib/gill/webgl/uniform/collection/factory.type";
import GillWebglUniformFactory              from "lib/gill/webgl/uniform/factory.type";
import GillWebglUniformTypeFactory          from "lib/gill/webgl/uniform/type/factory.type";
import GillWebglUniformTypeMap              from "lib/gill/webgl/uniform/type/map.type";

class StandardGillWebglService implements GillWebglService
{
  constructor(
    private webglProgramFactory             : GillWebglProgramFactory,
    private webglAttributeCollectionFactory : GillWebglAttributeCollectionFactory,
    private webglAttributeFactory           : GillWebglAttributeFactory,
    private webglAttributeTypeFactory       : GillWebglAttributeTypeFactory,
    private webglAttributeTypeMap           : GillWebglAttributeTypeMap,
    private webglUniformCollectionFactory   : GillWebglUniformCollectionFactory,
    private webglUniformFactory             : GillWebglUniformFactory,
    private webglUniformTypeFactory         : GillWebglUniformTypeFactory,
    private webglUniformTypeMap             : GillWebglUniformTypeMap
  ) {

  }

  constructAttributeCollection(): GillWebglAttributeCollection
  {
    return  this.webglAttributeCollectionFactory.construct();
  }

  constructUniformCollection(): GillWebglUniformCollection
  {
    return  this.webglUniformCollectionFactory.construct();
  }

  getAttribute(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributeIndex        : number
  ): GillWebglAttribute
  {
    const attributeInfo = webglRenderingContext.getActiveAttrib(
                            webglProgram,
                            attributeIndex
                          );

    const attributeTypeExists = this.webglAttributeTypeMap.hasAttributeType(
                                  attributeInfo.type
                                );

    if (!attributeTypeExists)
    {
      throw new Error(
              `Unknown WebGL variable type '${attributeInfo.type}' ('${attributeInfo.name}')`
            );
    }

    const attributeLocation = webglRenderingContext.getAttribLocation(
                                webglProgram,
                                attributeInfo.name
                              );

    webglRenderingContext.enableVertexAttribArray(
      attributeLocation
    );

    return  this.webglAttributeFactory.construct(
              attributeInfo.name,
              this.webglAttributeTypeMap.getAttributeType(
                attributeInfo.type
              ),
              attributeLocation,
              webglRenderingContext.STATIC_DRAW
            );
  }

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : number
  ): GillWebglUniform
  {
    const uniformInfo = webglRenderingContext.getActiveUniform(
                          webglProgram,
                          uniformIndex
                        );

    const uniformTypeExists = this.webglUniformTypeMap.hasUniformType(
      uniformInfo.type
    );

    if (!uniformTypeExists)
    {
      throw new Error(
              `Unknown WebGL variable type '${uniformInfo.type}' ('${uniformInfo.name}')`
            );
    }

    const uniformLocation = webglRenderingContext.getUniformLocation(
                              webglProgram,
                              uniformInfo.name
                            );

    return  this.webglUniformFactory.construct(
              uniformInfo.name,
              this.webglUniformTypeMap.getUniformType(
                uniformInfo.type
              ),
              uniformLocation
            );
  }

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram
  {
    return  this.webglProgramFactory.construct(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  setAttributeType(
    webglType         : number,
    dataType          : number,
    typedArrayFactory : GillTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean,
    dataStride        : GLsizei,
    dataOffset        : GLintptr
  ): void
  {
    this.webglAttributeTypeMap.setAttributeType(
      webglType,
      this.webglAttributeTypeFactory.construct(
        dataType,
        typedArrayFactory,
        dataSize,
        dataIsNormalized,
        dataStride,
        dataOffset
      )
    );
  }

  setUniformType(
    webglType : number,
    dataType  : string,
    dataSize  : number
  ): void
  {
    this.webglUniformTypeMap.setUniformType(
      webglType,
      this.webglUniformTypeFactory.construct(
        dataType,
        dataSize
      )
    );
  }
}

export default StandardGillWebglService;
