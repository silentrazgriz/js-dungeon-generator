function Hall(point1, point2, point3 = null) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.draw = function() {
        render.drawHall(point1, point2, point3);
    }
}
