const { Square } = require('../lib/shapes');

describe('Square Shape', () => {
  test('Square renders correctly', () => {
    const square = new Square();
    square.setText('Square Test');
    square.setTextColor('purple');
    square.setShapeColor('pink');
    
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    
    expect(square.render()).toEqual(expectedSVG);
  });
});