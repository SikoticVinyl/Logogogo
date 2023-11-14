//Imports parent class / inheritance from shape.js
const Shape = require('./shape');

//Set Circle as an extension of Shape
class Circle extends Shape {
    constructor() {
        // default radius of 100
        super(100);
    }

    setText(text) {
        this.text = text;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="50" y="100" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//Set Trangle as an extension of shape
class Triangle extends Shape {
    constructor(sideLength = 200) {
        super();
        this.sideLength = sideLength;
    }

    setText(text) {
        this.text = text;
    }
    setSideLength(sideLength) {
        this.sideLength = sideLength;
    }

    render() {
        const height = (Math.sqrt(3) / 2) * this.sideLength;
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="50" y="100" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//Set Square as an extension of shape
class Square extends Shape {
    constructor() {
        // Assuming a default side length of 200
        super(200);
    }

    setText(text) {
        this.text = text;
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="50" y="100" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

//Explores each class
module.exports = { Circle, Triangle, Square };