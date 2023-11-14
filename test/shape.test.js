const Shape = require('../lib/shape');

describe('Shape Class', () => {
  test('Shape instance has default properties', () => {
    const shape = new Shape();
    
    // Ensure default properties are set correctly
    expect(shape.textColor).toEqual('');
    expect(shape.shapeColor).toEqual('');
    expect(shape.text).toEqual('');
  });

  test('Set text method sets text property', () => {
    const shape = new Shape();
    shape.setText('Test Text');
    
    // Ensure the text property is set correctly
    expect(shape.text).toEqual('Test Text');
  });

  test('Set text color method sets textColor property', () => {
    const shape = new Shape();
    shape.setTextColor('red');
    
    // Ensure the textColor property is set correctly
    expect(shape.textColor).toEqual('red');
  });

  test('Set shape color method sets shapeColor property', () => {
    const shape = new Shape();
    shape.setShapeColor('blue');
    
    // Ensure the shapeColor property is set correctly
    expect(shape.shapeColor).toEqual('blue');
  });

  test('Render method throws an error', () => {
    const shape = new Shape();
    
    // Ensure render method throws an error
    expect(() => shape.render()).toThrow('The render method must be implemented by subclasses.');
  });
});
