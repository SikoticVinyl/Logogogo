const inquirer = require('inquirer');
const index = require('index.js')

// Mock inquirer's `prompt` method to return predefined user input for testing
jest.mock('inquirer');

describe('Main Function', () => {
    it('should handle user input correctly', async () => {
      // Mock user input for inquirer.prompt
      inquirer.prompt.mockResolvedValue({
        text: 'ABC',
        textColor: 'blue',
        shape: 'circle',
        shapeColor: 'green',
      });

       // You can also spy on the console.log method to check what's being printed
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Call your main function
    await main();
    
    expect(consoleLogSpy).toHaveBeenCalledWith('Some expected output');

    // Clean up the consoleLogSpy
    consoleLogSpy.mockRestore();
  });
});