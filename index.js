const fs = require('fs');
const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require('./lib/shapes');

async function usersInput() {
  try {
    const userInput = await inquirer.prompt([
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

let shapeInstance;

switch (userInput.shape) {
  case 'circle':
    shapeInstance = new Circle();
    break;
  case 'triangle':
    shapeInstance = new Triangle();
    break;
  case 'square':
    shapeInstance = new Square();
    break;
  default:
    console.error('Invalid shape selected');
  return;
}

  shapeInstance.setText(userInput.text);
  shapeInstance.setTextColor(userInput.textColor);
  shapeInstance.setShapeColor(userInput.shapeColor);

  const svgContent = shapeInstance.render();
  
  //Writing SVG Content to a file.
  const fileName = userInput.text || 'defaultFileName'
  const examplesFolderPath = './examples/';

  fs.writeFile(examplesFolderPath+`${fileName}.svg`, svgContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(`Generated ${fileName}.svg`);
  });
  } catch (error) {
    console.error('An error occurred:', error);
}}

module.exports = {
  usersInput,
};

usersInput();