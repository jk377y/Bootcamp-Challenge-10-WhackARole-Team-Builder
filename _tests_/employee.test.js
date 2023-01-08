const Employee = require('../lib/employee')
const employee = new Employee('barry','223','barry@gmail.com', 'employee')


test('Constructs a new instance of Employee class', () => {
    expect(employee).toBeInstanceOf(Employee);
})


test('Get the property values from the Employee object', () => {
    expect(employee.name).toBe('barry');
    expect(employee.id).toBe('223');
    expect(employee.email).toBe('barry@gmail.com');
    expect(employee.role).toBe('employee');

})


test('Check to see if the getName() works', () => {
    expect(employee.getName()).toBe('barry');
})
test('testing for the .not of the correct name value', () => {
    expect(employee.getName()).not.toBe('bob');
})


test('Check to see if the getId() works', () => {
    expect(employee.getId()).toBe('223');
})
test('testing for the .not of the correct Id value', () => {
    expect(employee.getId()).not.toBe('123');
})


test('Check to see if the getEmail() works', () => {
    expect(employee.getEmail()).toBe('barry@gmail.com');
})
test('testing for the .not of the correct email value', () => {
    expect(employee.getEmail()).not.toBe('thatguy@gmail.com');
})


test('Check to see if the getRole() works', () => {
    expect(employee.getRole()).toBe('employee');
})
test('testing for the .not of the correct role value', () => {
    expect(employee.getRole()).not.toBe('subordinate');
})