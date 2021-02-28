//external packages declaring dependencies and variables//
const inquirer = require ("inquirer");
const fs = require ("fs");
//array of questions for the user//
inquirer.prompt{[
    {
        type:"input",
        message: "What is the title of your README",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your Project",
        name: "description"
    },
    {
        type:"input",
        message: "What are the steps required for installation",
        name: "installation"
    },

]}