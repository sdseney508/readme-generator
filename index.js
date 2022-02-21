// npm inquirer is required to execute the Readme generator
const inquirer = require('inquirer');
//fs is already included with NPM but is required to generate the readme file.
const fs = require('fs');

// TODO: Create an array of questions for user input
const readmeInputs = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Project title?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide the Project Description?',

        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the Project?',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage restrictions (if any)?',

        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter any other developers that need to be credited / cited',

        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests have been run on the Project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'features',
            message: 'Describe the Project features.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: ["Apache", "GNU", "MIT", "Mozilla",]
        },
    ]);

};

const createReadme = ({ title, description, installation, usage, credit, license, features, contributions, tests, github, email }) =>
 `  # ${title}
 //#region # Description
    ${description}
    ## Table of Contents
    -[Installation](#installation)

    -[Usage](#usage)

    -[Credits](#credits)

    -[License](#license)

    -[Badges](#badges)

    -[Features](#features)

    -[How To Contribute](#how_to_contribute)

    -[Tests](#tests)

    -[Acknowledgements](#acknowledgements)
    # Installation
    💾
    ${installation}
    ## Usage
    💻
    ${usage}
    ## Credits
    ${credit}
    ## License
    [![badge](https://img.shields.io/badge/license-${license}-blue)](https://opensource.org/licenses/Apache-2.0)
    ## Badges

    # Features
    ${features}
    # How_to_contribute
    ${contributions}

    # Tests
    ${tests}

    # Questions
    For questions on usage or functionality i can be reached at:
    Github: [${github}](https://github.com/${github})
    E-mail: ${email}
    `;

// TODO: Create a function to write README file
const init = () => {
    readmeInputs()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('readme.md', createReadme(answers)))
        .then(() => console.log('Successfully generated the intitial readme'))
        .catch((err) => console.error(err));
};


init();