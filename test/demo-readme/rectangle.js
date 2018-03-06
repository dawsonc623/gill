const rectangle = gill.createModel(),
      rVertex1  = gill.createVertex(),
      rVertex2  = gill.createVertex(),
      rVertex3  = gill.createVertex(),
      rVertex4  = gill.createVertex();

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