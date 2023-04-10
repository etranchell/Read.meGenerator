// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Installtion instructions for project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions for project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users make a contribution?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions for project.',
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: 'Licenses for project',
        choices : [
            'Apache Liscence 2.0',
            'GNU General Public License v3.0',
            'MIT LicenseBSD 2-Clause "Simplified" License',
            'MIT LicenseBSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'Not Applicable',
        ]

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('Read Me Generated.')
    })
};

// TODO: Create a function to initialize app
function init() {
console.log('Welcome to ReadMe Generator!')


inquirer.prompt(questions)
.then(readmeData => {
    console.log(readmeData);
    writeToFile('./dist/readme.md', generateMarkdown(readmeData))
})
};
// Function call to initialize app
init();
