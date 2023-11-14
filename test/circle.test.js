const { Circle } = require('../lib/shapes');

describe('Circle Shape', () => {
  test('Circle renders correctly', () => {
    const circle = new Circle();
    circle.setText('Test');
    circle.setTextColor('red');
    circle.setShapeColor('blue');
    
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    
    expect(circle.render()).toEqual(expectedSVG);
  });
});