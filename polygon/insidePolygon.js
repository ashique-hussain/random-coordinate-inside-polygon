exports.isCoordinateInsidePolygon = function(coords, Vertices) {
  let x = coords[0],
    y = coords[1];
  let inside = false;
  const polygonLength = Vertices.length;
  for (let i = 0, j = polygonLength - 1; i < polygonLength; j = i++) {
    let xi = Vertices[i].x,
      yi = Vertices[i].y;
    let xj = Vertices[j].x,
      yj = Vertices[j].y;
    let intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) {
      inside = !inside;
    }
  }
  return inside;
};
