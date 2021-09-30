const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project: \n',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Provide a short description explaining the what, why, and how of your project. Save and close the editor to submit your text. \n',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'What are the steps required to install your project? Provide a step-by-step \ndescription of how to get the development environment running: \n',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'Provide instructions and examples for use. Include screenshots with the md format ![alt text](img/screenshot.png): \n',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Would you like to include contribution guidelines?',
        name: 'contribute_choice',
        choices: ['Yes', 'No']
    },
    {
        type: 'editor',
        message: 'Outline your contribution guidelines. Close the editor to submit your text.\n',
        name: 'contribute',
        when(answers) {
            return answers.contribute_choice !== "No";
        }
    },
    {
        type: 'list',
        message: "Would you like to add a link to the Contributor Covenant Code of Conduct at the bottom of your contribution section?",
        name: 'covenant',
        choices: ['Yes', 'No Thanks'],
        when(answers) {
            return answers.contribute_choice !== "No"
        }
    },
    {
        type: 'editor',
        message: 'Provide a few test examples for your application and describe how to run them: \n',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: ['Apache License 2.0','GNU GPLv3','ISC','MIT','The Unlicense'],
        loop: true
    },
    {
        type: 'input',
        message: "Provide your Github username for the questions and badges section: \n",
        name: 'username'
    },
    {
        type: 'input',
        message: 'Provide your email for the questions section: \n',
        name: 'email'
    }
];

module.exports = questions;