// importing the employee "super" properties
const Employee = require('./employee');

// creating an Engineer class that will extend upon the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role
    }
    // the following functions will be used to provide information about the engineer only
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role
    }
}
module.exports = Engineer;