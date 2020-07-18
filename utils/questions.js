// array of questions for user
module.exports = [
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
        message: 'What are the steps to install your application?(use a && between each step)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter your project's steps!");
                return false;
            }
        }
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
    },
    //license
    {
        type: 'list',
        name: 'license',
        message: 'Pick the liscense the application is covered under.',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
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
        name: 'technology',
        message: 'What are the technologies used in your application?(use a && between each step)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter your project's steps!");
                return false;
            }
        }
    },
    //credits
    {
        type: 'input',
        name: 'credit',
        message: 'Provide credit for your contributors(use a && between each contributor):',
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log("Please enter your project's contributors!");
                return false;
            }
        }
    },
    //Questions section
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
//There is not a current question to ask for screenshots or video? not in the projects criteria but I want to add.
];