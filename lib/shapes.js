const Shape = require('/Shape');

//Set Circle as an extension of Shape
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius=radius;
    }

    render() {
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(radius){
        super();
        this.sideLength=sideLength;
    }

    render() {
    const height = (Math.sqrt(3) / 2) * this.sideLength;
    return `<polygon points="100,0 ${this.sideLength},100 0,100" fill="${this.shapeColor}" />`;
    }
}