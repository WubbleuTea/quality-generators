const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// array of questions for user
const questions = [
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }

    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed decription of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter your project's description!");
                return false;
            }
        }
    },
    // table of contents
    {
        type: 'confirm',
        name: 'table',
        message: 'Do you need a table of contents?',
        default: false,
    },
    // possibly wrap this in a function to do multiple times
    //installation
    {
        type: 'input',
        name: 'installation',
        message: 'What is the first/next step to install your application?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter your project's next step!");
                return false;
            }
        }
        // is there a way to do this step a bunch to list the steps and then 
    },
    {
        type: 'confirm',
        name: 'installationSteps',
        message: 'Does your project include any more steps?',
        default: false,
        //how do I get back to installation

    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter your project's usage!");
                return false;
            }
        }
        //need a way to get screenshots
    },
    //license
    {
        // can they pick more than one with checkbox?
        type: 'list',
        name: 'license',
        message: 'Pick the liscense the application is covered under.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
        // needs to add a badge to the top of te page as well as a license
    //credits
    {
        type: 'input',
        name: 'credit',
        message: 'Provide credit for contributors:',
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log("Please enter your project's contributors!");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'creditConfirm',
        message: 'Does your project include any more contributors?',
        default: false,
        //how do I get back to credit question if true?

    },
    //contributing
    {
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Would you like to include a way to for others to contribute to your project?',
        default: false,
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please include a way for others to contribute to your project.',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please enter your project's ways to contribute!");
                return false;
            }
        },
        when: ({ contributeConfirm }) => contributeConfirm
    },
    //tests
    {
        type: 'confirm',
        name: 'testsConfirm',
        message: 'Would you like to include tests for your project?',
        default: false,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please include tests for your project.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please enter your project's tests!");
                return false;
            }
        },
        when: ({ testsConfirm }) => testsConfirm
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub name to be included in the questions section.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail address to be included in the questions section.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your e-mail address!");
                return false;
            }
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
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
        let fileName = answers.title
        let data = answers
        writeToFile(fileName, data)
    })
}

// function call to initialize program
init();


//need a table of contents

