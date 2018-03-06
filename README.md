# Gill

Gill is utility designed to simplify using WebGL by letting users focus on setting up and managing data, not contexts,
attributes, uniforms, etc.

## How it works

With Gill, you start with a program:

```javascript
const vertexShaderSource = `
  attribute vec2 aPosition;
  attribute vec3 aColor;

  varying vec3  vColor;

  void main(void)
  {
    gl_Position = vec4(aPosition, uLayer, 1.0);
    vColor = aColor;
  }
`;

const fragmentShaderSource = `
  varying highp   vec3  vColor;

  void main(void)
  {
    gl_FragColor = vec4(vColor, uOpacity);
  }
`;

const program = gill.getProgram(
                  vertexShaderSource,
                  fragmentShaderSource
                );
```

Gill will handle all of the program boilerplate operations, so the program is already ready to use! Next, you create a
model:

```javascript
const rectangle = gill.createModel(),
      rVertex1  = gill.createVertex(),
      rVertex2  = gill.createVertex(),
      rVertex3  = gill.createVertex(),
      rVertex4  = gill.createVertex();
```

Then, you add the data. Uniforms remain constant fer every vertex and fragment, so you set them on the model:

```javascript
rectangle.setUniform(
  "uLayer",
  gill.createNumber(
    0.5
  )
)
.setUniform(
  "uOpacity",
  gill.createNumber(
    1.0
  )
);
```

After that, since attributes are per-vertex, you add them to each vertex you need:

```javascript
// Upper-left vertex

rVertex1.setAttribute(
  "aPosition",
  gill.createVector2(
    -0.5,
      0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    0.0,
    0.0
  )
);

// Upper-right vertex

rVertex2.setAttribute(
  "aPosition",
  gill.createVector2(
    0.5,
    0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    0.0,
    1.0
  )
);

// Lower-right vertex

rVertex3.setAttribute(
  "aPosition",
  gill.createVector2(
      0.5,
    -0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    0.0,
    0.0,
    1.0
  )
);

// Lower-left vertex

rVertex4.setAttribute(
  "aPosition",
  gill.createVector2(
    -0.5,
    -0.5
  )
).setAttribute(
  "aColor",
  gill.createVector3(
    1.0,
    0.0,
    1.0
  )
);
```

With the vertex data added to each vertex, you add those vertices to the model:

```javascript
// Triangle One (upper left)

rectangle.addVertex(
  rVertex1
)
.addVertex(
  rVertex2
)
.addVertex(
  rVertex4
);

// Triangle Two (lower right)

rectangle.addVertex(
  rVertex4
)
.addVertex(
  rVertex2
)
.addVertex(
  rVertex3
);
```

And there you go, that is all you do data-wise. To render a model, you grab a canvas and use the aptly named `render`
method:

```javascript
// Example: <canvas id="my_canvas" height="344" width="684" style="background-color: black;"></canvas>
const canvas = document.getElementById("my_canvas");

gill.render(
  rectangle,
  canvas,
  program
);
```

And that is it! You have rendered a model. You can render as many as you want to a canvas:

```javascript
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

// And add it to the mix

gill.render(
  square,
  canvas,
  gillProgram
);
```


