//! the engineer will also inherit the properties of the employee class so we need to be able to access them
const Employee = require('./employee');

//! Need to make the engineer class and it will extend the employee class
class Engineer extends Employee {
    // engineer will have 4 properties
    constructor(name, id, email, github) {
        // we inherit the Employee properties with "super" 
        super(name, id, email);
        // and extend it with the github
        this.github = github;
    }
    // this method is to get the github of "this" engineer
    getGithub() {
        return this.github;
    }
    // this method is to get the role of "this" engineer
    getRole() {
        return "Engineer";
    }
};
// exports this class to be available externally
module.exports = Engineer;