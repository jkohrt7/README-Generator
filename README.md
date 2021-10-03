# README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
README Generator is a node.js program for creating professional READMEs through the command line.
By providing a simple, consistent structure as well as links & badges for your license of choice, it helps reduce the amount of time you need to spend on a READMEs for your repos.
## Contents
- [Installation]("#installation")
- [Usage]("#usage")
- [Credits]("#credits")
- [License]("#license")
## Installation
You'll need the following already installed in order to use the program:

- [node.js](https://nodejs.org/)
- Any text editor. This program uses whatever is under the $VISUAL or $EDITOR environment variables of your local machine, but defaults to notepad (Windows) or vim (Linux/Mac) if none are available.

Next, you can install all the dependancies by navigating to the project's root folder in a command line environment and using ```npm install```.
## Usage
After running '''npm install''', use the command '''npm start''' to start the program.

Questions will either ask you to enter your answer manually (using the keyboard and 'enter' to submit) or to select one choice from a list of answers (using the arrow keys to change your selection and 'Enter' to make a choice).

The 'Credits' section will continually ask you to enter names until you type 'stop' and hit enter. If you want a name to link to a webpage, simply type/paste the link after the name like so:

    ```? Enter the name of a person or resource you would like to give
         credit to followed by a link to their github page or website.
         Enter 'stop' to stop adding names. 
         > John Doe http://www.johndoe.com
    ```

## Questions
If you have any questions about using or contibuting to the project, you can contact me via email or though github:
- Email: jkohrt7@gmail.com
- Github: [@jkohrt7](https://github.com/jkohrt7)
## Credits
- [inquirer ](https://www.npmjs.com/package/inquirer) 
- [@jkohrt7 ](https://github.com/jkohrt7 ) 
## License
[MIT](https://opensource.org/licenses/MIT)
