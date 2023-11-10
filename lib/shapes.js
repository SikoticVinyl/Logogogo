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