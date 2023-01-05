// importing the employee "super" properties
const Employee = require('./employee');

// creating an Engineer class that will extend upon the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // the following functions will be used to provide information about the intern only
    getSchool() {
        return this.school;
    }
    getRole() {
        return "intern";
    }
}
module.exports = Intern;