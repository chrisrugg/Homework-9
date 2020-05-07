const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([
        
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
        name: "table",
        message: "Create a table of contents"
      },  
      {
        type: "input",
        name: "badge",
        message: "Add at least one badge"
      },  
      {
        type: "input",
        name: "installation",
        message: "How do you do the install?"
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
      
    ]);
  }
  
  function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  
  async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();

//write file to readme.md
//function writeToFile(fileName, data) {
//     function writeToFile(info) {
//         const html = generateMarkdown(info);
//         writeFileAsync("generateMarkdown", html);
//     };

// // initializes the process with questions
// function init() {
//     inquirer
//     .prompt(questions)
//     .then(function (input) {
//         // console.log(answers);
//         username = input.username;
//         const queryUrl = `https://api.github.com/users/${username}`;
//         return queryUrl;
//     });


// //starts the process
//     init();



