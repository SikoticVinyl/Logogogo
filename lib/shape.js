class Shape {
    constructor() {
        this.textColor='';
        this.shapeColor='';
        this.text='';
    }
    setTextColor(color){
        this.textColor=color;
    }
    setShapeColor(color){
        this.shapeColor=color;
    }
    setText(text){
        this.text=text;
    }

    render() {
        throw new Error('The render method must be implemented by subclasses.');
    }

    setUserInput(userInput) {
        this.setTextColor(userInput.textColor);
        this.setShapeColor(userInput.shapeColor);
        this.setText(userInput.text);
    }
}

module.exports = Shape;