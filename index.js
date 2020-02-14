const getRandomCoordinate = require("./polygon/getCoordinate");

exports.getCoordinateInsidePolygon = function(vertices) {
  return getRandomCoordinate.getRandomCoordinateInsidePolygon(vertices);
};
