exports.getCoordinatesInsidePolygon = function(vertices) {
  let xAxes = [];
  let yAxes = [];
  const verticesLength = vertices.length;
  for (let i = 0, j = verticesLength - 1; i < verticesLength; j = i++) {
    xAxes.push(parseFloat(vertices[i].x), parseFloat(vertices[j].x));
    yAxes.push(parseFloat(vertices[i].y), parseFloat(vertices[j].y));
  }
  let minX = Math.min.apply(null, xAxes);
  let maxX = Math.max.apply(null, xAxes);
  let minY = Math.min.apply(null, yAxes);
  let maxY = Math.max.apply(null, yAxes);
  return [
    minX + Math.random() * (maxX - minX),
    minY + Math.random() * (maxY - minY)
  ];
};
