const { Triangle } = require('../lib/shapes');

describe('Triangle Shape', () => {
  test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    triangle.setText('Triangle Test');
    triangle.setTextColor('green');
    triangle.setShapeColor('yellow');
    
    const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="yellow" />
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="30" fill="green">Triangle Test</text>
        </svg>`;
    
    expect(triangle.render()).toEqual(expectedSVG);
  });
});