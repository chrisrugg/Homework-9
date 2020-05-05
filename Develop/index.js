const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);



const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      }
];
//write file to readme.md
function writeToFile(fileName, data) {
    function writeToFile(info) {
        const html = generateHTML(info);
        writeFileAsync("generateMarkdown", html);
    };

// initializes the process with questions
function init() {
    inquirer
    .prompt(questions)
    .then(function (input) {
        // console.log(answers);
        username = input.username;
        const queryUrl = `https://api.github.com/users/${username}`;
        return queryUrl;
    })


//starts the process
    init();





