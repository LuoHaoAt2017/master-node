function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

Circle.prototype.area = function() {
  return Math.PI * Math.pow(this.r, 2);
}

Circle.prototype.perimeter = function() {
  return 2 * Math.PI * this.r;
}

module.exports.Circle = Circle;

//module表示模块本身
//module.exports表示当前模块向外导出的对象
