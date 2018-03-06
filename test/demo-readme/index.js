// Create a Square

const square    = gill.createModel(),
      sVertex1  = gill.createVertex(),
      sVertex2  = gill.createVertex(),
      sVertex3  = gill.createVertex(),
      sVertex4  = gill.createVertex();

square.setUniform(
  "uLayer",
  gill.createNumber(
    0.75
  )
)
.setUniform(
  "uOpacity",
  gill.createNumber(
    0.5
  )
);

// Upper-left vertex

sVertex1.setAttribute(
  "aPosition",
  gill.createVector2(
    -0.25,
      0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    1.0,
    1.0
  )
);

// Upper-right vertex

sVertex2.setAttribute(
  "aPosition",
  gill.createVector2(
    0.25,
    0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    1.0,
    1.0
  )
);

// Lower-right vertex

sVertex3.setAttribute(
  "aPosition",
  gill.createVector2(
      0.25,
    -0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    1.0,
    1.0
  )
);

// Lower-left vertex

sVertex4.setAttribute(
  "aPosition",
  gill.createVector2(
    -0.25,
    -0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    1.0,
    1.0
  )
);

// Triangle One (upper left)

square.addVertex(
  sVertex1
)
.addVertex(
  sVertex2
)
.addVertex(
  sVertex4
);

// Triangle Two (lower right)

square.addVertex(
  sVertex4
)
.addVertex(
  sVertex2
)
.addVertex(
  sVertex3
);

gill.render(
  square,
  canvas,
  program
);

const vertexShaderSource2 = `
  attribute vec2  aPosition;
  // attribute vec3  aColor;
  attribute float aOpacity;

  uniform float uLayer;

  varying vec4  vColor;

  void main(void)
  {
    gl_Position = vec4(aPosition, uLayer, 1.0);
    // vColor = vec4(aColor, aOpacity);
    vColor = vec4(0.3, 0.3, 0.3, aOpacity);
  }
`;

const fragmentShaderSource2 = `
  varying highp   vec4  vColor;

  void main(void)
  {
    mediump float gray = dot(vColor.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(gray, gray, gray, vColor.a);
  }
`;

const program2  = gill.getProgram(
                    vertexShaderSource2,
                    fragmentShaderSource2
                  );

rVertex1.setAttribute(
  "aOpacity",
  gill.createNumber(
    0.0
  )
);

rVertex2.setAttribute(
  "aOpacity",
  gill.createNumber(
    0.5
  )
);

rVertex3.setAttribute(
  "aOpacity",
  gill.createNumber(
    1.0
  )
);

rVertex4.setAttribute(
  "aOpacity",
  gill.createNumber(
    0.5
  )
);

gill.clearCanvas(
  canvas
);

gill.render(
  rectangle,
  canvas,
  program2
);

gill.clearCanvas(
  canvas
);

gill.render(
  rectangle,
  canvas,
  program
);

gill.render(
  rectangle,
  canvas,
  program2
);
