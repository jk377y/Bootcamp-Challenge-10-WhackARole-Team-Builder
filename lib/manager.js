//! the Manager will also inherit the properties of the Employee class so we need to be able to access them
const Employee = require('./employee');

//! Need to make the Manager class and it will extend the Employee class
class Manager extends Employee {
    // Manager will have 4 properties
    constructor(name, id, email, officeNumber) {
        // we inherit the Employee properties with "super" 
        super(name, id, email);
        // and extend it with the officeNumber
        this.officeNumber = officeNumber;
    }
    // this method is to get the school of "this" Manager
    getOfficeNumber() {
        return this.officeNumber;
    }
    // this method is to get the role of "this" Manager
    getRole() {
        return "Manager";
    }
};
// exports this class to be available externally
module.exports = Manager;