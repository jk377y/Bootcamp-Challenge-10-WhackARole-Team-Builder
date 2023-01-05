// importing the employee "super" properties
const Employee = require('./employee');

// creating an Engineer class that will extend upon the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // the following functions will be used to provide information about the engineer only
    getGithub() {
        return this.github;
    }
    getRole() {
        return "engineer";
    }
}
module.exports = Engineer;