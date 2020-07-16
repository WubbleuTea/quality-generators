const fs = require('fs');
const inquirer = require('inquirer');
// array of questions for user
const questions = [
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the tite of your proect?'
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed decription of the project.'
    },
    // table of contents
    {
        type: 'confirm',
        name: 'table',
        message: 'Do you need a table of contents?',
        default: false,
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?'
    },
    //license
    {
        type: 'confirm',
        name: 'licenceConfirm',
        message: 'Do you need to include a license?',
        default: 'false',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'Provide licencing info:',
        when: ({ licenceConfirm }) => licenceConfirm
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


//need a table of contents
