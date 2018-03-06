const vertexShaderSource  = `

attribute vec2 aPosition;
attribute vec2 aTextureCoordinate;

uniform float uLayer;

varying highp vec2 vTextureCoordinate;

void main(void)
{
  gl_Position = vec4(aPosition, uLayer, 1.0);
  vTextureCoordinate = aTextureCoordinate;
}
`;

const fragmentShaderSource  = `

varying highp vec2 vTextureCoordinate;

uniform sampler2D uTexture;

void main(void)
{
  gl_FragColor = texture2D(uTexture, vTextureCoordinate);
}
`;
