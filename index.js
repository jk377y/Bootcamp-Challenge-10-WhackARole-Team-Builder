// npm i jest
// npm i inquirer@8.2.4   specified in instructions
// npm i inquirer@9.1.4  is newer version but may not run with common js syntax and does not use the standard let inquirer = require('inquirer') to import

//! importing all of the files that will be needed to generate the team
const fs = require('fs')  // built into Node to handle file system
const inquirer = require('inquirer')  //  inquirer package provides the user interface and the inquiry session flow
const path = require('path')  // built into Node to handle file paths
const Employee = require('./lib/employee')  // importing data from employee.js
const Manager = require('./lib/manager')  // importing data from manager.js
const Engineer = require('./lib/engineer')  // importing data from engineer.js
const Intern = require('./lib/intern')  // importing data from intern.js
const htmlGenerator = require('./lib/htmlGenerator')  // importing data from htmlGenerator.js

const managerInputs = [
    {
        name: 'managerName',
        type: 'input',
        message: 'Who is the team\'s manager?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true
            } else {            // if there is no input (falsey), get message
                return 'Your team MUST have a manager.'
            }},
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is the manager\'s ID #?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an ID #.'
            }},
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the manager\'s email address?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an email address.'
            }},
    },
    {
        name: 'managerOfficeNumber',
        type: 'input',
        message: 'What is the manager\'s office number?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true
            } else {            // if there is no input (falsey), get message
                return 'Every manager must have an office number.'
            }},  
    }
];
