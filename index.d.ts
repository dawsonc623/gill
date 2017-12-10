interface GillAttributeBufferMap
{
  eachAttributeBuffer(
    action  : (
      attributeName : string,
      webglBuffer   : WebGLBuffer
    ) => void
  ): void;

  hasAttributeBuffer(
    attributeName : string,
  ): boolean;

  getAttributeBuffer(
    attributeName : string,
  ): WebGLBuffer;

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void;
}

export { GillAttributeBufferMap };


interface GillBufferCache
{
  cacheBuffer(
    gillModel             : Model,
    gillBuffer            : GillBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void;

  getBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;

  hasBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): boolean;
}

export { GillBufferCache };

interface GillBuffer
{
  hasAttributeBuffer(
    attributeName : string
  ): boolean;

  getAttributeBuffer(
    attributeName : string
  ): WebGLBuffer;

  getIndexBuffer(): WebGLBuffer;

  setAttributeBuffer(
    attributeName : string,
    webglBuffer   : WebGLBuffer
  ): void;
}

export { GillBuffer };


interface GillContextModelsMap
{
  eachModelBuffers(
    action  : (
      webglRenderingContext : WebGLRenderingContext,
      gillModelBuffers      : GillModelBufferMap
    ) => void
  ): void;

  hasModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
  ): boolean;

  getModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
  ): GillModelBufferMap;

  setModelBuffers(
    webglRenderingContext : WebGLRenderingContext,
    gillModelBuffers      : GillModelBufferMap
  ): void;
}

export { GillContextModelsMap };


interface GillModelBufferMap
{
  eachBuffer(
    action  : (
      gillModel   : Model,
      gillBuffer  : GillBuffer
    ) => void
  ): void;

  hasBuffer(
    gillModel : Model,
  ): boolean;

  getBuffer(
    gillModel : Model,
  ): GillBuffer;

  setBuffer(
    gillModel   : Model,
    gillBuffer  : GillBuffer
  ): void;
}

export { GillModelBufferMap };


interface GillModelBufferService
{
  getModelAttributeBuffer(
    gillModel             : Model,
    attributeName         : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;

  getModelIndexBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;
}

export { GillModelBufferService };


interface ModelTextureRepository
{
  getTexture(
    model                 : Model,
    name                  : string,
    webglRenderingContext : WebGLRenderingContext
  ): WebGLTexture;
}

export { ModelTextureRepository };


interface Model
{
  addVertex(
    vertex  : GillVertex
  ): this;

  getAttributeData(
    attributeName : string
  ): AttributeData;

  getIndexData(): IndexData;

  getTextureData(
    name  : string
  ): TextureData;

  getUniformData(
    uniformName : string
  ): Array<number>;

  setTexture(
    name    : string,
    texture : TextureValue
  ): this;

  setUniform(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): this;

  setVertex(
    index   : number,
    vertex  : GillVertex
  ): this;
}

export { Model };


interface GillProgram
{
  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void;

  forEachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void;

  forEachUniform(
    action  : (
      attribute : Uniform
    ) => void
  ): void;

  getWebglProgram(): WebGLProgram;

  getWebglRenderingContext(): WebGLRenderingContext;
}

export { GillProgram };


interface GillRenderer
{
  drawModel(
    model : Model
  ): void;
}

export { GillRenderer };


interface GillService
{
  clearCanvas(
    canvas  : HTMLCanvasElement
  ): void;

  createModel(): Model;

  createNumber(
    value : number
  ): GillNumber;

  createVector2(
    v1  : number,
    v2  : number
  ): GillVector2;

  createVector3(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3;

  createVertex(): GillVertex;

  drawModel(
    model             : Model,
    canvas            : HTMLCanvasElement,
    gillProgramSource : GillProgramSource
  ): void;

  getProgram(
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): GillProgramSource;
}

export { GillService };

type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export { TypedArray };


interface GillContextModelsMapFactory
{
  construct(): GillContextModelsMap;
}

export { GillContextModelsMapFactory };


interface AttributeData
{
  addAttributeValue(
    attributeValue  : AttributeValue
  ): void;

  getData(): Array<number>;

  getOffset(): GLintptr;

  getStride(): GLsizei;

  normalize(): GLboolean;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;

  setValueAt(
    index           : number,
    attributeValue  : AttributeValue
  ): void;
}

export { AttributeData };


interface GillAttributeValueMap
{
  eachValue(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void;

  hasValue(
    attributeName : string,
  ): boolean;

  getValue(
    attributeName : string,
  ): AttributeValue;

  setValue(
    attributeName : string,
    attributeValue : AttributeValue
  ): void;
}

export { GillAttributeValueMap };

interface AttributeValue
{
  addToAttributeData(
    attributeData : Array<number>
  ): void;
}

export { AttributeValue };


interface GillModelFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    indices                           : IndexData,
    textureDataRepository             : TextureDataRepository,
    uniformValues                     : GillUniformValueMap
  ): Model;
}

export { GillModelFactory };

interface IndexData
{
  addIndex(
    index : number
  ): void;

  eachIndex(
    action : (
      index : number
    ) => void
  ): void;

  getData(): Array<number>;

  indexCount(): number;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;
}

export { IndexData };


interface GillNumber extends  AttributeValue,
                              GillUniformValue
{

}

export { GillNumber };


interface TextureData
{
  getFormat(): GLenum;

  getPixels(): TextureValue;

  needsBuffered(): boolean;

  setNeedsBuffered(
    needsBuffered : boolean
  ): void;
}

export { TextureData };

type TextureValue = ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;

export { TextureValue };


interface GillUniformValueMap
{
  hasValue(
    uniformName : string,
  ): boolean;

  getValue(
    uniformName : string,
  ): GillUniformValue;

  setValue(
    uniformName   : string,
    uniformValue  : GillUniformValue
  ): void;
}

export { GillUniformValueMap };

interface GillUniformValue
{
  toUniformData(): Array<number>;
}

export { GillUniformValue };


interface GillVector2 extends AttributeValue,
                              GillUniformValue
{

}

export { GillVector2 };


interface GillVector3 extends AttributeValue,
                              GillUniformValue
{

}

export { GillVector3 };


interface GillVertex
{
  eachAttribute(
    action  : (
      attributeName   : string,
      attributeValue  : AttributeValue
    ) => void
  ): void;

  getAttribute(
    name  : string
  ): AttributeValue;

  setAttribute(
    name  : string,
    value : AttributeValue
  ): this;
}

export { GillVertex };


interface GillModelBufferMapFactory
{
  construct(): GillModelBufferMap;
}

export { GillModelBufferMapFactory };


interface GillModelBufferServiceFactory
{
  construct(
    gillBufferService : GillBufferService
  ): GillModelBufferService;
}

export { GillModelBufferServiceFactory };


interface ModelTextureRepositoryFactory
{
  construct(
    webglService  : WebglService
  ): ModelTextureRepository;
}

export { ModelTextureRepositoryFactory };


interface Attribute
{
  getLocation(): number;

  getName(): string;

  getType(): VariableType;

  getUsage(): GLenum;
}

export { Attribute };


interface GillProgramCache
{
  cacheProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
    gillProgram           : GillProgram
  ): void;

  hasProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): boolean;

  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource,
  ): GillProgram;
}

export { GillProgramCache };


interface GillContextSourceMap
{
  hasSources(
    webglRenderingContext : WebGLRenderingContext
  ): boolean;

  getSources(
    webglRenderingContext : WebGLRenderingContext
  ): GillProgramMap;

  setSources(
    webglRenderingContext : WebGLRenderingContext,
    gillPrograms          : GillProgramMap
  ): void;
}

export { GillContextSourceMap };


interface GillProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributes            : AttributeCollection,
    textures              : TextureCollection,
    uniforms              : UniformCollection
  ): GillProgram;
}

export { GillProgramFactory };


interface GillProgramService
{
  getProgram(
    webglRenderingContext : WebGLRenderingContext,
    gillProgramSource     : GillProgramSource
  ): GillProgram;
}

export { GillProgramService };


interface GillProgramMap
{
  hasProgram(
    gillProgramSource : GillProgramSource,
  ): boolean;

  getProgram(
    gillProgramSource : GillProgramSource,
  ): GillProgram;

  setProgram(
    gillProgramSource : GillProgramSource,
    gillProgram       : GillProgram
  ): void;
}

export { GillProgramMap };

interface GillProgramSource
{
  getFragmentShaderSource(): string;

  getVertexShaderSource(): string;
}

export { GillProgramSource };

interface Texture
{
  getBindTarget(): GLenum;

  getImageTarget(): GLenum;

  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): VariableType;
}

export { Texture };


interface Uniform
{
  getLocation(): WebGLUniformLocation;

  getName(): string;

  getType(): VariableType;
}

export { Uniform };


interface GillRendererFactory
{
  construct(
    gillModelBufferService  : GillModelBufferService,
    modelTextureRepository  : ModelTextureRepository,
    gillProgram             : GillProgram
  ): GillRenderer;
}

export { GillRendererFactory };


interface GillRendererService
{
  getRenderer(
    webglRenderingContext   : WebGLRenderingContext,
    gillModelBufferService  : GillModelBufferService,
    gillProgramSource       : GillProgramSource
  ): GillRenderer;
}

export { GillRendererService };


interface GillServiceFactory
{
  construct(
    gillModelAttributeDataRepository  : GillModelAttributeDataRepository,
    gillAttributeValueMapFactory      : GillAttributeValueMapFactory,
    indexDataFactory                  : IndexDataFactory,
    gillModelBufferService            : GillModelBufferService,
    gillModelFactory                  : GillModelFactory,
    gillNumberFactory                 : GillNumberFactory,
    gillProgramSourceFactory          : GillProgramSourceFactory,
    gillRendererService               : GillRendererService,
    textureDataRepository             : TextureDataRepository,
    gillUniformValueMapFactory        : GillUniformValueMapFactory,
    gillVector2Factory                : GillVector2Factory,
    gillVector3Factory                : GillVector3Factory,
    gillVertexFactory                 : GillVertexFactory,
    gillWebglService                  : WebglService
  ): GillService;
}

export { GillServiceFactory };


interface TypedArrayConstructor
{
  readonly prototype: TypedArray;

  new(length: number): TypedArray;

  new(arrayOrArrayBuffer: ArrayLike<number> | ArrayBufferLike): TypedArray;

  new(buffer: ArrayBufferLike, byteOffset: number, length?: number): TypedArray;

  /**
    * The size in bytes of each element in the array.
    */
  readonly BYTES_PER_ELEMENT: number;

  /**
    * Returns a new array from a set of elements.
    * @param items A set of elements to include in the new array object.
    */
  of(...items: number[]): TypedArray;

  /**
    * Creates an array from an array-like or iterable object.
    * @param arrayLike An array-like or iterable object to convert to an array.
    * @param mapfn A mapping function to call on every element of the array.
    * @param thisArg Value of 'this' used to invoke the mapfn.
    */
  from(arrayLike: ArrayLike<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): TypedArray;
}

export { TypedArrayConstructor };

interface WebglBufferRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglBuffer           : WebGLBuffer,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglBuffer : WebGLBuffer,
  ): boolean;

  getWebglRenderingContext(
    webglBuffer : WebGLBuffer,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglBuffer           : WebGLBuffer,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export { WebglBufferRenderingContextMap };

interface WebglProgramRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglProgram          : WebGLProgram,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglProgram : WebGLProgram,
  ): boolean;

  getWebglRenderingContext(
    webglProgram : WebGLProgram,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglProgram          : WebGLProgram,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export { WebglProgramRenderingContextMap };

interface WebglRenderingContextRepository
{
  getWebglRenderingContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;
}

export { WebglRenderingContextRepository };

interface WebglService
{
  createWebglBuffer(
    webglRenderingContext : WebGLRenderingContext
  ): WebGLBuffer;

  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  createWebglTexture(
    webglRenderingContext : WebGLRenderingContext
  ): WebGLTexture;

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getWebglContext(
    canvas  : HTMLCanvasElement
  ): WebGLRenderingContext;
}

export { WebglService };

interface WebglTextureRenderingContextMap
{
  eachWebglRenderingContext(
    action  : (
      webglTexture           : WebGLTexture,
      webglRenderingContext : WebGLRenderingContext
    ) => void
  ): void;

  hasWebglRenderingContext(
    webglTexture  : WebGLTexture,
  ): boolean;

  getWebglRenderingContext(
    webglTexture  : WebGLTexture,
  ): WebGLRenderingContext;

  setWebglRenderingContext(
    webglTexture          : WebGLTexture,
    webglRenderingContext : WebGLRenderingContext
  ): void;
}

export { WebglTextureRenderingContextMap };


interface GillBufferFactory
{
  construct(
    gillAttributeBuffers  : GillAttributeBufferMap,
    webglIndexBuffer      : WebGLBuffer
  ): GillBuffer;
}

export { GillBufferFactory };


interface GillBufferService
{
  getModelBuffer(
    gillModel             : Model,
    webglRenderingContext : WebGLRenderingContext
  ): GillBuffer;
}

export { GillBufferService };


interface GillBufferCacheFactory
{
  construct(
    gillContextModels         : GillContextModelsMap,
    gillModelBufferMapFactory : GillModelBufferMapFactory
  ): GillBufferCache;
}

export { GillBufferCacheFactory };


interface GillAttributeBufferMapFactory
{
  construct(): GillAttributeBufferMap;
}

export { GillAttributeBufferMapFactory };


interface GillModelAttributeDataCache
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): AttributeData;

  hasAttributeData(
    model         : Model,
    attributeName : string
  ): boolean;

  setAttributeData(
    model         : Model,
    attributeName : string,
    attributeData : AttributeData
  ): void;
}

export { GillModelAttributeDataCache };


interface GillModelAttributeDataFactory
{
  construct(
    data        : Array<number>,
    hasChanged  : boolean,
    normalized  : GLboolean,
    offset      : GLintptr,
    stride      : GLsizei
  ): AttributeData;
}

export { GillModelAttributeDataFactory };


interface GillModelAttributeDataRepository
{
  getAttributeData(
    model         : Model,
    attributeName : string
  ): AttributeData;

  setValueAt(
    model           : Model,
    attributeName   : string,
    index           : number,
    attributeValue  : AttributeValue
  ): void;
}

export { GillModelAttributeDataRepository };


interface GillAttributeValueMapFactory
{
  construct(): GillAttributeValueMap;
}

export { GillAttributeValueMapFactory };


interface IndexDataFactory
{
  construct(): IndexData;
}

export { IndexDataFactory };


interface TextureDataFactory
{
  construct(
    format  : GLenum,
    pixels  : TextureValue
  ): TextureData;
}

export { TextureDataFactory };


interface TextureDataRepository
{
  getData(
    model : Model,
    name  : string
  ): TextureData;

  setValue(
    model : Model,
    name  : string,
    value : TextureValue
  ): void;
}

export { TextureDataRepository };


interface GillNumberFactory
{
  construct(
    value : number
  ): GillNumber;
}

export { GillNumberFactory };


interface GillUniformValueMapFactory
{
  construct(): GillUniformValueMap;
}

export { GillUniformValueMapFactory };


interface GillVector2Factory
{
  construct(
    v1  : number,
    v2  : number
  ): GillVector2;
}

export { GillVector2Factory };


interface GillVector3Factory
{
  construct(
    v1  : number,
    v2  : number,
    v3  : number
  ): GillVector3;
}

export { GillVector3Factory };


interface GillVertexFactory
{
  construct(
    gillAttributeValues : GillAttributeValueMap
  ): GillVertex;
}

export { GillVertexFactory };


interface AttributeCollection
{
  addAttribute(
    attribute : Attribute
  ): void;

  eachAttribute(
    action  : (
      attribute : Attribute
    ) => void
  ): void;
}

export { AttributeCollection };


interface AttributeFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : number,
    usage     : GLenum
  ): Attribute;
}

export { AttributeFactory };


interface GillProgramCacheFactory
{
  construct(
    gillProgramSources    : GillContextSourceMap,
    gillProgramMapFactory : GillSourceProgramMapFactory
  ): GillProgramCache;
}

export { GillProgramCacheFactory };


interface GillContextSourceMapFactory
{
  construct(): GillContextSourceMap;
}

export { GillContextSourceMapFactory };


interface GillProgramServiceFactory
{
  construct(
    attributeCollectionFactory  : AttributeCollectionFactory,
    attributeFactory            : AttributeFactory,
    gillProgramCache            : GillProgramCache,
    gillProgramFactory          : GillProgramFactory,
    gillProgramWebglService     : ProgramWebglService,
    textureCollectionFactory    : TextureCollectionFactory,
    textureFactory              : TextureFactory,
    uniformCollectionFactory    : UniformCollectionFactory,
    uniformFactory              : UniformFactory,
    variableTypes               : VariableTypeMap
  ): GillProgramService;
}

export { GillProgramServiceFactory };


interface GillProgramSourceFactory
{
  construct(
    vertexShaderShaderSource    : string,
    fragmentShaderShaderSource  : string
  ): GillProgramSource;
}

export { GillProgramSourceFactory };


interface GillSourceProgramMapFactory
{
  construct(): GillProgramMap;
}

export { GillSourceProgramMapFactory };


interface TextureCollection
{
  addTexture(
    texture : Texture
  ): void;

  eachTexture(
    action  : (
      texture : Texture
    ) => void
  ): void;
}

export { TextureCollection };


interface TextureFactory
{
  construct(
    bindTarget  : GLenum,
    imageTarget : GLenum,
    location    : WebGLUniformLocation,
    name        : string,
    type        : VariableType
  ): Texture;
}

export { TextureFactory };


interface VariableTypeMap
{
  eachWebglVariableType(
    action  : (
      webglType             : GLenum,
      gillWebglVariableType : VariableType
    ) => void
  ): void;

  hasWebglVariableType(
    webglType : GLenum,
  ): boolean;

  getWebglVariableType(
    webglType : GLenum,
  ): VariableType;

  setWebglVariableType(
    webglType             : GLenum,
    gillWebglVariableType : VariableType
  ): void;
}

export { VariableTypeMap };


interface VariableType
{
  getDataType(): GLenum;

  getTypedArrayConstructor(): TypedArrayConstructor;

  getUnitSize(): GLint;
}

export { VariableType };


interface UniformCollection
{
  addUniform(
    uniform : Uniform
  ): void;

  eachUniform(
    action  : (
      uniform : Uniform
    ) => void
  ): void;
}

export { UniformCollection };


interface UniformFactory
{
  construct(
    name      : string,
    type      : VariableType,
    location  : WebGLUniformLocation
  ): Uniform;
}

export { UniformFactory };

interface ProgramWebglService
{
  createWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;

  getAttributes(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;

  getUniforms(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
  ): Array<WebGLActiveInfo>;
}

export { ProgramWebglService };


interface GillRendererServiceFactory
{
  construct(
    modelTextureRepository  : ModelTextureRepository,
    gillProgramService      : GillProgramService,
    gillRendererFactory     : GillRendererFactory
  ): GillRendererService;
}

export { GillRendererServiceFactory };


interface GillProgramWebglServiceAdapterFactory
{
  construct(
    webglService  : WebglService
  ): ProgramWebglService;
}

export { GillProgramWebglServiceAdapterFactory };


interface WebglBufferRenderingContextMapFactory
{
  construct(): WebglBufferRenderingContextMap;
}

export { WebglBufferRenderingContextMapFactory };

interface WebglProgramFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    vertexShader          : WebGLShader,
    fragmentShader        : WebGLShader
  ): WebGLProgram;
}

export { WebglProgramFactory };


interface GillWebglServiceFactory
{
  construct(
    webglBufferRenderingContexts    : WebglBufferRenderingContextMap,
    webglProgramFactory             : WebglProgramFactory,
    webglProgramRenderingContexts   : WebglProgramRenderingContextMap,
    webglRenderingContextRepository : WebglRenderingContextRepository,
    webglShaderFactory              : WebglShaderFactory,
    webglTextureRenderingContexts   : WebglTextureRenderingContextMap
  ): WebglService;
}

export { GillWebglServiceFactory };


interface WebglRenderingContextRepositoryFactory
{
  construct(): WebglRenderingContextRepository;
}

export { WebglRenderingContextRepositoryFactory };

interface WebglShaderFactory
{
  construct(
    webglRenderingContext : WebGLRenderingContext,
    shaderSource          : string,
    shaderType            : number
  ): WebGLShader;
}

export { WebglShaderFactory };


interface WebglProgramRenderingContextMapFactory
{
  construct(): WebglProgramRenderingContextMap;
}

export { WebglProgramRenderingContextMapFactory };


interface WebglTextureRenderingContextMapFactory
{
  construct(): WebglTextureRenderingContextMap;
}

export { WebglTextureRenderingContextMapFactory };


interface GillBufferServiceFactory
{
  construct(
    gillAttributeBufferMapFactory : GillAttributeBufferMapFactory,
    gillBufferCache               : GillBufferCache,
    gillBufferFactory             : GillBufferFactory
  ): GillBufferService;
}

export { GillBufferServiceFactory };


interface GillModelAttributeDataCacheFactory
{
  construct(): GillModelAttributeDataCache;
}

export { GillModelAttributeDataCacheFactory };


interface GillModelAttributeDataRepositoryFactory
{
  construct(
    gillModelAttributeDataCache   : GillModelAttributeDataCache,
    gillModelAttributeDataFactory : GillModelAttributeDataFactory
  ): GillModelAttributeDataRepository;
}

export { GillModelAttributeDataRepositoryFactory };


interface TextureDataRepositoryFactory
{
  construct(
    textureDataFactory  : TextureDataFactory
  ): TextureDataRepository;
}

export { TextureDataRepositoryFactory };


interface AttributeCollectionFactory
{
  construct(): AttributeCollection;
}

export { AttributeCollectionFactory };


interface TextureCollectionFactory
{
  construct(): TextureCollection;
}

export { TextureCollectionFactory };


interface VariableTypeFactory
{
  construct(
    dataType              : GLenum,
    typedArrayConstructor : TypedArrayConstructor,
    unitSize              : GLint
  ): VariableType;
}

export { VariableTypeFactory };


interface UniformCollectionFactory
{
  construct(): UniformCollection;
}

export { UniformCollectionFactory };


interface VariableTypeMapFactory
{
  construct(): VariableTypeMap;
}

export { VariableTypeMapFactory };

declare let gillService : GillService;

export default gillService;
