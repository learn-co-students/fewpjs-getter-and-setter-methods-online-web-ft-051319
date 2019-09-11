// Add your Circle class here
const PI=3.1416

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius*2
  }
  get circumference() {
    return 2*this.radius*PI;
  }
  get area() {
    return PI*this.radius*this.radius;
  }
  set diameter(newDiameter) {
    this.radius = newDiameter/2
  }
  set circumference(newCircumference) {
    this.radius = newCircumference/(2*PI)

  }
}
