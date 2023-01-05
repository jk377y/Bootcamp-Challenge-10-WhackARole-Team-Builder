// npm i jest
// npm i inquirer@8.2.4   specified in instructions
// npm i inquirer@9.1.4  is newer version but may not run with common js syntax and does not use the standard let inquirer = require('inquirer') to import

//! importing all of the files that will be needed to generate the team
const fs = require('fs');  // built into Node to handle file system
const inquirer = require('inquirer');  //  inquirer package provides the user interface and the inquiry session flow
const path = require('path');  // built into Node to handle file paths
const Employee = require('./lib/employee');  // importing data from employee.js
const Manager = require('./lib/manager'); // importing data from manager.js
const Engineer = require('./lib/engineer');  // importing data from engineer.js
const Intern = require('./lib/intern');  // importing data from intern.js
const htmlGenerator = require('./lib/htmlGenerator');  // importing data from htmlGenerator.js

// need containers to hold all of the created employees
let managers = [];
let engineers = [];
let interns = [];

// manager inputs
const managersInputs = [
    {
        name: 'managerName',
        type: 'input',
        message: 'Who is the team\'s manager?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have a name.';
            }},
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is the manager\'s ID #?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an ID #.';
            }},
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the manager\'s email address?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an email address.';
            }},
    },
    {
        name: 'managerOfficeNumber',
        type: 'input',
        message: 'What is the manager\'s office number?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every manager must have an office number.';
            }},  
    }
];
// inputs to initiate creating another employee
const addAnotherEmployee = [
    {
        name: 'addAnotherEmployee',
        type: 'list',
        message: 'Would you like to add another team member?',
        choices: ['Yes, I would like to add an Engineer', 'Yes, I would like to add an Intern', 'No, my team is complete.'],
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'You must choose one of the options.';
            }},
    }
];
// Engineer inputs
const engineerInputs = [
    {
        name: 'engineerName',
        type: 'input',
        message: 'What is the engineer\'s name?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have a name.';
            }}, 
    },
    {
        name: 'engineerId',
        type: 'input',
        message: 'What is the engineer\'s ID #?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an ID #.';
            }},
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: 'What is the engineer\'s email address?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an email address.';
            }},
    },
    {
        name: 'engineerGithub',
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every engineer must have a GitHub username.';
            }},  
    }
];
// Intern inputs
const internInputs = [
    {
        name: 'internName',
        type: 'input',
        message: 'What is the intern\'s name?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have a name.';
            }}, 
    },
    {
        name: 'internId',
        type: 'input',
        message: 'What is the intern\'s ID #?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an ID #.';
            }},
    },
    {
        name: 'internEmail',
        type: 'input',
        message: 'What is the intern\'s email address?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every employee must have an email address.';
            }},
    },
    {
        name: 'internSchool',
        type: 'input',
        message: 'What school does the Intern attend?',
        validate: (value) => {   // this will force the user to input a value
            if(value) {         // if there is an input (truthy), no problems
                return true;
            } else {            // if there is no input (falsey), get message
                return 'Every Intern must be enrolled in a school.';
            }},  
    }
];
// need to push the answers for each employee into create "Role" object
// using Manager inputs to create a new Manager instance
function createManager() {
    inquirer.prompt(managersInputs)
        .then(answers => {
            const manager = new Manager(answers.managerName,answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            managers.push(manager);
            createTeam();  // need to call this after each employee entry so that it can start the Loop or reloop if necessary on createTeam
        });
};


// using Engineer inputs to create a new Engineer instance
function createEngineer() {
    inquirer.prompt(engineerInputs)
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            engineers.push(engineer);
            createTeam();  // need to call this after each employee entry so that it can reloop if necessary
        });
};

// using Intern inputs to create a new Intern instance
function createIntern() {
    inquirer.prompt(internInputs)
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            interns.push(intern);
            createTeam();  // need to call this after each employee entry so that it can reloop if necessary
        });
};

// need to combine all created employees into my "team" container
function createTeam() {
    inquirer.prompt(addAnotherEmployee)
        .then(answers => {
        if (answers.addAnotherEmployee === 'Yes, I would like to add an Engineer') {
            createEngineer();
        } else if (answers.addAnotherEmployee === 'Yes, I would like to add an Intern') {
            createIntern();
        } else {
            fs.write('myTeam.html', htmlGenerator(managers, engineers, interns));
        }
    })
};

createManager();  // this will be the only thing called outside of the functions so that it will always run first
            // at the end of the manager function it will run createTeam and loop for each additional employee that
            // is determined to be needed