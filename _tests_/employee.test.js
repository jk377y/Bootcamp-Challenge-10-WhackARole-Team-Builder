const Employee = require('../lib/employee')
const employee = new Employee('lucifer','666','ruler@downUnder.com')


test('Constructs a new instance of Employee class', () => {
    expect(employee).toBeInstanceOf(Employee);
})


test('Get the property values from the Employee object', () => {
    expect(employee.name).toBe('lucifer');
    expect(employee.id).toBe('666');
    expect(employee.email).toBe('ruler@downUnder.com');
})


test('Check to see if the getName() works', () => {
    expect(employee.getName()).toBe('lucifer');
})
test('testing for the .not of the correct name value', () => {
    expect(employee.getName()).not.toBe('satan');
})


test('Check to see if the getId() works', () => {
    expect(employee.getId()).toBe('666');
})
test('testing for the .not of the correct Id value', () => {
    expect(employee.getId()).not.toBe('123');
})


test('Check to see if the getEmail() works', () => {
    expect(employee.getEmail()).toBe('ruler@downUnder.com');
})
test('testing for the .not of the correct email value', () => {
    expect(employee.getEmail()).not.toBe('ruler@gmail.com');
})