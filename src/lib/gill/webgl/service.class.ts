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
    //TODO Cache?
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

    //TODO This may need to account for webglActiveInfo.size, but I have not found a use for that yet

    return  this.webglAttributeFactory.construct(
              attributeInfo.name,
              this.webglAttributeTypeMap.getAttributeType(
                attributeInfo.type
              ),
              attributeLocation,
              webglRenderingContext.STATIC_DRAW //TODO investigate a way to not hardcode this
            );
  }

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : number
  ): GillWebglUniform
  {
    //TODO Cache?
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

    //TODO This may need to account for webglActiveInfo.size, but I have not found a use for that yet

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
    //TODO Program cache
    return  this.webglProgramFactory.construct(
              webglRenderingContext,
              vertexShaderSource,
              fragmentShaderSource
            );
  }

  setAttributeType(
    webglType         : number, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
    dataType          : number, //TODO Constrain to WebGL type constants
    typedArrayFactory : GillTypedArrayFactory,
    dataSize          : number,
    dataIsNormalized  : GLboolean
  ): void
  {
    // TODO Should this blindly overwrite like this?
    this.webglAttributeTypeMap.setAttributeType(
      webglType,
      this.webglAttributeTypeFactory.construct(
        dataType,
        typedArrayFactory,
        dataSize,
        dataIsNormalized
      )
    );
  }

  setUniformType(
    webglType : number, //TODO Constrain to WebGLActiveInfo.type values, whatever those are
    dataType  : string, //TODO Constrain to uniform strings? (e.g. "i" | "f")
    dataSize  : number
  ): void
  {
    // TODO Should this blindly overwrite like this?
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
