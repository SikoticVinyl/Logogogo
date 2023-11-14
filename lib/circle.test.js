const { Circle } = require('./path-to-your-shape-module');

describe('Circle Rendering', () => {
    it('should render the circle correctly', () => {
        const circle = new Circle();
        circle.setShapeColor('blue'); // Set the color
    
        const renderedOutput = circle.render();

        expect(renderedOutput).toContain('<circle');
        expect(renderedOutput).toContain('fill="blue"');
    });
});