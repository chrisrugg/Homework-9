const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },    
    {
        type: "input",
        name: "description",
        message: "Write a description of the project"
    },
    {
        type: "input",
        name: "license",
        message: "What license is requird for this project?"
    },   
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },  
    {
        type: "input",
        name: "install",
        message: "What command needs to be run to install the projects dependencies?"
    },  
    {
        type: "input",
        name: "tests",
        message: "What commands are run to perform tests?"
    }, 
    {
        type: "input",
        name: "repo",
        message: "How does the user use the repo?"
    },   
    {
        type: "input",
        name: "npm",
        message: "What is NPM?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How does a user contribute to the repo?"
    }

]);
}

function generateReadMe(answers) {
return `
# Project Title
${answers.title}

# Project description
${answers.description}

# Table of Contents

* [Installation](#install)
* [License](#license)
* [Tests](#tests)
* [Contribute](#contribute)



# Required License
${answers.license}

# eMail Address
${answers.email}

# Command that needs to be run to to install the project dependecies
${answers.install}

# Test commands
${answers.test}

# How a user uses the repo
${answers.repo}

# NPM definition

${answers.npm}

# How you can contribute to the repo
${answers.contribute}


`;
}

async function init() {
  //console.log("hi")
  try {
    const answers = await promptUser();

    const readMe = generateReadMe(answers);

    await writeFileAsync("readme.md", readMe);

    console.log("Successfully wrote to .readme.md");
  } catch(err) {
    console.log(err);
  }
}

init();