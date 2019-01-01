var shapes = require('./index03');

var circle = new shapes.Circle(4, 4, 3);
console.log('area ', circle.area());
console.log('perimeter ', circle.perimeter());