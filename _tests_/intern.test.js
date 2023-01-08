const Intern = require('../lib/intern')
const intern = new Intern('kate','6','kate@gmail.com', 'ucla', 'intern')


test('Constructs a new instance of Intern class', () => {
    expect(intern).toBeInstanceOf(Intern);
})


test('Get the property values from the Intern object', () => {
    expect(intern.name).toBe('kate');
    expect(intern.id).toBe('6');
    expect(intern.email).toBe('kate@gmail.com');
    expect(intern.school).toBe('ucla');
    expect(intern.role).toBe('intern');
})


test('Check to see if the getName() works', () => {
    expect(intern.getName()).toBe('kate');
})
test('testing for the .not of the correct name value', () => {
    expect(intern.getName()).not.toBe('kim');
})


test('Check to see if the getId() works', () => {
    expect(intern.getId()).toBe('6');
})
test('testing for the .not of the correct Id value', () => {
    expect(intern.getId()).not.toBe('88');
})


test('Check to see if the getEmail() works', () => {
    expect(intern.getEmail()).toBe('kate@gmail.com');
})
test('testing for the .not of the correct email value', () => {
    expect(intern.getEmail()).not.toBe('gotMyFirstJob@gmail.com');
})


test('Check to see if the getSchool() works', () => {
    expect(intern.getSchool()).toBe('ucla');
})
test('testing for the .not of the correct school value', () => {
    expect(intern.getSchool()).not.toBe('harvard');
})


test('Check to see if the getRole() works', () => {
    expect(intern.getRole()).toBe('intern');
})
test('testing for the .not of the correct role value', () => {
    expect(intern.getRole()).not.toBe('trainee');
})