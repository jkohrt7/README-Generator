const fs = require('fs');
const { forEach } = require('./questions');

let writeToFile = function(responses) {
    console.log(responses)
    //Add title and badges
    let fileText = '# ' + responses['title'] + '\n'

    const licenseChoice = responses['license'];
    switch (licenseChoice) {
        case 'Apache License 2.0' :
            fileText += '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n';
            break;
        case 'GNU GPLv3' :
            fileText += '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n';
            break;
        case 'ISC' :
            fileText += '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n';
            break;
        case 'MIT' :
            fileText += '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n';
            break;
        case 'The Unlicense' :
            fileText += '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)\n';
            break;
    }
    
    //Add Description
    fileText += '## Description\n'
    fileText += responses['description'] + '\n'
    
    //Table of contents
    fileText += '## Contents\n';
    fileText += '- [Installation]("#installation")\n';
    fileText += '- [Usage]("#usage")\n';
    if('contribute' in responses){
        fileText += '- [How to Contribute]("#how-to-contribute")\n';
    }
    fileText += '- [Credits]("#credits")\n';
    fileText += '- [License]("#license")\n';

    //Installation
    fileText += '## Installation\n';
    fileText += responses['installation'] + '\n';

    //Usage
    fileText += '## Usage\n';
    fileText += responses['usage'] + '\n'

    //How to Contribute
    if(!responses['contribute']) {
        fileText += "## How to Contribute\n"
        fileText += responses['contribute'] + '\n';
        if (responses['covenant'] === 'Yes'){
            fileText += 'Additionally, please adhere to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).\n'
        }
    }
    
    //Questions
    fileText += "## Questions\n";
    fileText += "If you have any questions about using or contibuting to the project, you can contact me via email or though github:\n";
    fileText += "- Email: " + responses['email'] + '\n';
    fileText += "- Github: [@" + responses['username'] + "](https://github.com/" + responses['username'] + ')\n'
    
    //Credits
    fileText += '## Credits\n';
    if(responses.hasOwnProperty('credits')){
        responses.credits.forEach(element => {
            let urlIndex = element.indexOf('http');
            if(urlIndex !== -1) {
                let name = element.slice(0,urlIndex);
                let url = element.slice(urlIndex);
                
                fileText += `- [${name}](${url}) \n`
            }
        });
    }

    //License
    fileText += '## License\n'

    switch (licenseChoice) {
        case 'Apache License 2.0' :
            fileText += '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)\n';
            break;
        case 'GNU GPLv3' :
            fileText += '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)\n';
            break;
        case 'ISC' :
            fileText += '[ISC](https://opensource.org/licenses/ISC)\n';
            break;
        case 'MIT' :
            fileText += '[MIT](https://opensource.org/licenses/MIT)\n';
            break;
        case 'The Unlicense' :
            fileText += '[The Unlicense](https://opensource.org/licenses/unlicense)\n';
            break;
    }

    fs.writeFile('README_generated.md', fileText, function(err) {
        if(err) {
            console.log("error"+ err)
        }
        console.log("Successfully Created README_generated.md");
    })
}

module.exports = writeToFile;