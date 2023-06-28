const fs = require('fs');
const inquirer = require('inquirer');
const { circle, triangle, square } = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: 'input',
            //name property represent the value that was inputed by the user.
            name: 'text',
            message: 'What 3 characters do you want to enter?',
            validate: (text) =>
                text.length <= 3 || 'Please enter 3 characters',
        },

        {
            type: 'input',
            //language property prompt the user to select the the choices of language.
            name: 'color',
            message: 'What color do you want?',
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Please select one of the shape of your choice?',
            choices: ['circle', 'triangle', 'square']
        },

        {
            type: 'input',
            name: 'shapeColor',
            message: 'What is your preferred shape color?',
        },
    ])

    .then(({ text, color, shape, shapeColor }) => {

        let shapeClass;
        if (shape === 'circle') {
            shapeClass = new circle()
        }

        if (shape === 'square') {
            shapeClass = new square()
        }

        if (shape === 'triangle') {
            shapeClass = new triangle()
        }
            shapeClass.pickColor(shapeColor);









        fs.writeFile('./svg/logo.svg', shapeClass.render(), (err) => {
            if (err) throw err;
        })
    }
    )