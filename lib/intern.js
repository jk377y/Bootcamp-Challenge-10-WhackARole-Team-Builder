//! the Intern will also inherit the properties of the Employee class so we need to be able to access them
const Employee = require('./employee');

//! Need to make the Intern class and it will extend the Employee class
class Intern extends Employee {
    // intern will have 4 properties
    constructor(name, id, email, school) {
        // we inherit the Employee properties with "super" 
        super(name, id, email);
        // and extend it with the school
        this.school = school;
    }
    // this method is to get the school of "this" Intern
    getSchool() {
        return this.school;
    }
    // this method is to get the role of "this" Intern
    getRole() {
        return "Intern";
    }
};
// exports this class to be available externally
module.exports = Intern;