

const shape = new Triangle();
shape.setShapeColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const square = new Square();
square.setShapeColor("red");
expect(square.render()).toEqual('<rect width="200" height="200" fill="red" />');

const circle = new Circle();
circle.setShapeColor("green");
expect(circle.render()).toEqual('<circle cx="100" cy="100" r="100" fill="green" />');