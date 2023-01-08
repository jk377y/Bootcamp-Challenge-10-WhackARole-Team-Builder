// importing the employee "super" properties
const Employee = require('./employee');

// creating a Manager class that will extend upon the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role
    }
    // the following functions will be used to provide information about the manager only
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Manager;