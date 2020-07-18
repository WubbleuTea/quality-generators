const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = require('./utils/questions.js')

// function to write README file
function writeToFile(data) {
    fs.writeFile(`./dist/README.md`, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
        } else {
            console.log("File Created")
        }
    })
}
// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        let data = answers
        writeToFile(data)
    })
}
// function call to initialize program
init();
