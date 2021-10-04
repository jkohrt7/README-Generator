const questions = [
    {
        type: 'input',
        message: '~~Title~~\nPlease enter the title of your project: \n',
        name: 'title'
    },
    {
        type: 'editor',
        message: '~~Description~~\nProvide a short description explaining the what, why, and how of your project. Save and close the editor to submit your text. \n',
        name: 'description'
    },
    {
        type: 'editor',
        message: '~~Installation~~\nWhat are the steps required to install your project? Provide a step-by-step \ndescription of how to get the development environment running: \n',
        name: 'installation'
    },
    {
        type: 'editor',
        message: '~~Usage~~\nProvide instructions and examples for use. Include screenshots by placing them in the src/img folder and referencing them with the md format ![alt text](src/img/screenshot.[jpg or png]): \n',
        name: 'usage'
    },
    {
        type: 'list',
        message: '~~How to Contribute~~\nWould you like to include contribution guidelines?',
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
        message: '~~Tests~~\nProvide a few test examples for your application and describe how to run them: \n',
        name: 'tests'
    },
    {
        type : "input",
        message : "~~Credits~~\nEnter the name of a person or resource you would like to give \ncredit to followed by a link to their github page or website. \nEnter 'stop' to stop adding names.\n",
        name : "credits_stop",
        validate: (value, answers) => {
            
            if (value !== 'stop' && value.indexOf('http') != -1) {
                //add it to the answers array
                if(answers.hasOwnProperty('credits')){
                    answers.credits.push(value);
                } else {
                    answers.credits = [value];
                }
                return "Name & link accepted. Remove text to add another name or type 'stop' to finish.";
            }
            else if(value !== 'stop'){
                return "Rejected. You are missing a valid url; please include 'http' at the beginning";
            }
            else{
                return true;
            }
        }
        
    },
    {
        type: 'list',
        message: '~~License~~\nSelect a license:',
        name: 'license',
        choices: ['Apache License 2.0','GNU GPLv3','ISC','MIT','The Unlicense'],
        loop: true
    },
    {
        type: 'input',
        message: "~~Questions/Contact~~\nPlease provide your Github username\n",
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please provide your email or other primary form of contact for the questions section: \n',
        name: 'email'
    }
];

module.exports = questions;