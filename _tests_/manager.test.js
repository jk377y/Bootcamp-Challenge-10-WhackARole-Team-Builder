const Manager = require('../lib/manager')
const manager = new Manager('lucifer','666','ruler@downUnder.com', '1337')


test('Constructs a new instance of Manager class', () => {
    expect(manager).toBeInstanceOf(Manager);
})


test('Get the property values from the Manager object', () => {
    expect(manager.name).toBe('lucifer');
    expect(manager.id).toBe('666');
    expect(manager.email).toBe('ruler@downUnder.com');
    expect(manager.officeNumber).toBe('1337');
})


test('Check to see if the getName() works', () => {
    expect(manager.getName()).toBe('lucifer');
})
test('testing for the .not of the correct name value', () => {
    expect(manager.getName()).not.toBe('satan');
})


test('Check to see if the getId() works', () => {
    expect(manager.getId()).toBe('666');
})
test('testing for the .not of the correct Id value', () => {
    expect(manager.getId()).not.toBe('123');
})


test('Check to see if the getEmail() works', () => {
    expect(manager.getEmail()).toBe('ruler@downUnder.com');
})
test('testing for the .not of the correct email value', () => {
    expect(manager.getEmail()).not.toBe('ruler@gmail.com');
})

test('Check to see if the getOfficeNumber() works', () => {
    expect(manager.getOfficeNumber()).toBe('1337');
})
test('testing for the .not of the correct email value', () => {
    expect(manager.getOfficeNumber()).not.toBe('305');
})