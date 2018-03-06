function toX(number)
{
  return number / 320 - 1;
}

function toY(number)
{
  return number / -288 + 1;
}

function tex(number)
{
  return number / 512;
}

function createTile(vertexData)
{
  let i         = 0,
      vertex,
      vData,
      vertices  = [];

  for (; i < 4; i += 1)
  {
    vData   = vertexData[i];
    vertex  = gill.createVertex();

    vertex.setAttribute(
      "aPosition",
      gill.createVector2(
        vData.position[0],
        vData.position[1]
      )
    ).setAttribute(
      "aTextureCoordinate",
      gill.createVector2(
        vData.textureCoordinate[0],
        vData.textureCoordinate[1]
      )
    );

    vertices[i] = vertex;
  }

  return  vertices;
}

function addTile(model, vertexData)
{
  const vertices  = createTile(vertexData);

  // Triangle One (upper left)

  model.addVertex(
    vertices[0]
  )
  .addVertex(
    vertices[1]
  )
  .addVertex(
    vertices[3]
  );

  // Triangle Two (lower right)

  model.addVertex(
    vertices[3]
  )
  .addVertex(
    vertices[1]
  )
  .addVertex(
    vertices[2]
  );
}

function setTile(model, start, vertexData)
{
  const vertices  = createTile(vertexData);

    // Triangle One (upper left)

    model.setVertex(
      start,
      vertices[0]
    )
    .setVertex(
      start + 1,
      vertices[1]
    )
    .setVertex(
      start + 2,
      vertices[3]
    );

    // Triangle Two (lower right)

    model.setVertex(
      start + 3,
      vertices[3]
    )
    .setVertex(
      start + 4,
      vertices[1]
    )
    .setVertex(
      start + 5,
      vertices[2]
    );
}
