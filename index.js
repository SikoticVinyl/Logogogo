const inquirer = require('inquirer')

async function usersInput() {
  try {
    const userIn = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to three characters):',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (e.g., blue or #3498db):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (e.g., green or #2ecc71):',
      },
    ]);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = {
  usersInput,
};

usersInput();