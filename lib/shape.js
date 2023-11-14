class Shape {
    constructor() {
        this.textColor='';
        this.shapeColor='';
    }
    setTextColor(color){
        this.textColor=color;
    }
    setShapeColor(color){
        this.shapeColor=color;
    }

    render() {
        throw new Error('The render method must be implemented by subclasses.');
    }

    setUserInput(userInput) {
        this.setTextColor(userInput.textColor);
        this.setShapeColor(userInput.shapeColor);
    }
}

module.exports = Shape;