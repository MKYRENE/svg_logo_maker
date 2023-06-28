// Variables read files saves 

const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const opn = require('opn');

// Function to generate the logo based on user inputs
const generateLogo = (text, textColor, shape, shapeColor) => {
  //variable 
    let shapeClass;
  
  // Determine the shape class based on the user's selection
  if (shape === 'circle') {
    shapeClass = new Circle();
  }
  if (shape === 'square') {
    shapeClass = new Square();
  }
  if (shape === 'triangle') {
    shapeClass = new Triangle();
  }
  
  // Set the shape's color based on the user's selection
  shapeClass.pickColor(shapeColor);

  // Read the logo template file
  fs.readFile('./logo/logo_template.svg', 'utf8', (err, data) => {
    if (err) throw err;

    // Replace placeholders in the logo template with user inputs and rendered shape
    const logoCode = data
      .replace('{{text}}', text)
      .replace('{{textColor}}', textColor)
      .replace('{{shape}}', shapeClass.render());

    // Write the generated logo code to the logo.svg file
    fs.writeFile('./svg/logo.svg', logoCode, (err) => {
      if (err) throw err;
      
      // Open the logo.svg file in the default browser
      opn('./svg/logo.svg').then(() => console.log('Logo opened successfully!'));
    });
  });
};

// Prompt the user for input using Inquirer
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'What 3 characters do you want to enter?',
    validate: (text) => text.length === 3 || 'Please enter 3 characters',
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color do you want?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select one of the shapes of your choice?',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What is your preferred shape color?',
  },
]).then(({ text, color, shape, shapeColor }) => {
  // Call the generateLogo function with user inputs
  generateLogo(text, color, shape, shapeColor);
});
