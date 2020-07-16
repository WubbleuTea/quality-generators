const fs = require('fs');
const inquirer = require('inquirer');
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
        type: 'input',
        name: 'licence',
        message: 'Provide licencing info:',
        validate: licenceInput => {
            if (licenceInput) {
                return true;
            } else {
                console.log("Please enter your project's licence!");
                return false;
            }
        }
    },
    //credits
    {
        type: 'input',
        name: 'credit',
        message: 'Provide credit for contributors:',
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log("Please enter your project's licence!");
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
                console.log("Please enter your project's licence!");
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
        name: 'contribute',
        message: 'Please include tests for your project.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please enter your project's licence!");
                return false;
            }
        },
        when: ({ testsConfirm }) => testsConfirm
    },

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
inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
    })
