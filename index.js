const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        (this.radius * 2) * pi
    }

    set circumference(circumference) {
        this.radius = circumference / (pi * 2)
    }

    get area() {
        (this.radius * this.radius) * pi
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }
}