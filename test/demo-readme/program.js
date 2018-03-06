const vertexShaderSource = `
attribute vec2 aPosition;
attribute vec3 aColor;

uniform float uLayer;

varying vec3  vColor;

void main(void)
{
  gl_Position = vec4(aPosition, uLayer, 1.0);
  vColor = aColor;
}
`;

const fragmentShaderSource = `
varying highp   vec3  vColor;

uniform mediump float uOpacity;

void main(void)
{
  gl_FragColor = vec4(vColor, uOpacity);
}
`;

const program = gill.getProgram(
                vertexShaderSource,
                fragmentShaderSource
              );