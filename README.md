# random-coordinate-inside-polygon

## How to install and get Random Co-ordinate

### Step: 1

Install this module using `npm i random-coordinate-inside-polygon`

### Step: 2

Require the `random-coordinate-inside-polygon` module in your file

`const getCoordinate = require("random-coordinate-inside-polygon");`

### Step: 3

Calling function `getCoordinate.getCoordinateInsidePolygon()` with vertices coordinate to get the coordinate inside polygon

Here are polygon vertices coordinate.
`const vartices = [ { x: 374.8478213058504, y: 175.75377802993057 }, { x: 373.9626902344587, y: 284.6248998111106 }, { x: 450.20335096842723, y: 281.9928324912227 }, { x: 515.0362140304096, y: 173.92724938524668 } ];`

Getting random coordinate inside polygon
`const randomCoordinateInsidePolygon = getCoordinate.getCoordinateInsidePolygon(vartices);`

### Step: 4

finally you will get random coordinate
`console.log("randomCoordinateInsidePolygon ====>", randomCoordinateInsidePolygon);`

ENJOY!!!
