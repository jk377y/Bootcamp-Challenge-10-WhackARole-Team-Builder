// npm i jest
// npm i inquirer@8.2.4   
// npm i inquirer@9.1.4  is newer version but may not run with common js syntax and does not use the standard let inquirer = require('inquirer') to import
let fs = require('fs')  // built into Node to handle file system
let inquirer = require('inquirer')  //  inquirer package provides the user interface and the inquiry session flow
let path = require('path')  // built into Node to handle file paths
let Employee = require('./lib/employee')  // importing data from employee.js
let Manager = require('./lib/manager')  // importing data from manager.js
let Engineer = require('./lib/engineer')  // importing data from engineer.js
let Intern = require('./lib/intern')  // importing data from intern.js
let htmlGenerator = require('./lib/htmlGenerator')  // importing data from htmlGenerator.js
