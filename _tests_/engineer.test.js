const Engineer = require('../lib/engineer')
const engineer = new Engineer('einstein','9001','eEqualsMCSquared.com', 'einstein', 'engineer')


test('Constructs a new instance of Engineer class', () => {
    expect(engineer).toBeInstanceOf(Engineer);
})


test('Get the property values from the Engineer object', () => {
    expect(engineer.name).toBe('einstein');
    expect(engineer.id).toBe('9001');
    expect(engineer.email).toBe('eEqualsMCSquared.com');
    expect(engineer.github).toBe('einstein');
    expect(engineer.role).toBe('engineer');
})


test('Check to see if the getName() works', () => {
    expect(engineer.getName()).toBe('einstein');
})
test('testing for the .not of the correct name value', () => {
    expect(engineer.getName()).not.toBe('tesla');
})


test('Check to see if the getId() works', () => {
    expect(engineer.getId()).toBe('9001');
})
test('testing for the .not of the correct Id value', () => {
    expect(engineer.getId()).not.toBe('10');
})


test('Check to see if the getEmail() works', () => {
    expect(engineer.getEmail()).toBe('eEqualsMCSquared.com');
})
test('testing for the .not of the correct email value', () => {
    expect(engineer.getEmail()).not.toBe('smartypants@gmail.com');
})


test('Check to see if the getGithub() works', () => {
    expect(engineer.getGithub()).toBe('einstein');
})
test('testing for the .not of the correct officeNumber value', () => {
    expect(engineer.getGithub()).not.toBe('edison');
})


test('Check to see if the getRole() works', () => {
    expect(engineer.getRole()).toBe('engineer');
})
test('testing for the .not of the correct role value', () => {
    expect(engineer.getRole()).not.toBe('scientist');
})