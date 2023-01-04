//! Need to make the employee class
class Employee {
    // making these 3 properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // this method is to get the name of "this" employee
    getName() {
        return this.name;
    }
    // this method is to get the id of "this" employee
    getId() {
        return this.id;
    }
    // this method is to get the email of "this" employee
    getEmail() {
        return this.email;
    }
    // this method is to get the role of "this" employee
    getRole() {
        return "Employee"
    }
};
// exports this class to be available externally
module.exports = Employee;