function Random() {
  this.randomRange = function(min, max, flag) {
    if (flag) {
      return Math.floor(this.random(max - min) + min);
    } else {
      return this.random(max - min) + min;
    }
  };
  this.random = function(max, flag) {
    if (flag) {
      return Math.floor(Math.random() * max);
    } else {
      return Math.random() * max;
    }
  };
}