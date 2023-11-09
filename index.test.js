const { usersInput } = require('./index.js');
const mockInquirer = require('mock-inquirer').default;

describe('usersInput Function', () => {
  it('should handle user input correctly', async () => {
    // Mock user input for inquirer.prompt
    mockInquirer.prompt.mockResolvedValue({
      text: 'ABC',
      textColor: 'blue',
      shape: 'circle',
      shapeColor: 'green',
    });

    //spy on the console.log method to check what's being printed
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Call your main function
    const result = await usersInput();

    // Assert that the result matches the expected user input
    expect(result).toEqual({
      text: 'ABC',
      textColor: 'blue',
      shape: 'circle',
      shapeColor: 'green',
    });

    // Clean up the consoleLogSpy
    consoleLogSpy.mockRestore();
  });
});