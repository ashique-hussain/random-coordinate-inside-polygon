const isCoordinateInside = require("./insidePolygon");
const getCoordinates = require("./randomCoordinate");

exports.getRandomCoordinateInsidePolygon = function(vertices) {
  let coords = {};
  do {
    coords = getCoordinates.getCoordinatesInsidePolygon(vertices);
  } while (!isCoordinateInside.isCoordinateInsidePolygon(coords, vertices));
  return {
    x: coords[0],
    y: coords[1]
  };
};
