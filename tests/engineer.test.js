const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test('verify the name of the employee is engineer', () => {
    const engineer = new Engineer();
    expect(engineer.getName()).toBe(engineer.name);
});

test('verify the id of the engineer employee is corrected', () => {
    const engineer = new Engineer();
    expect(engineer.getId()).toBe(engineer.id);
});

test('verify the email of the engineer employee is corrected', () => {
    const engineer = new Engineer();
    expect(engineer.getEmail()).toBe(engineer.email);
});


test('verify the role of the engineer github is corrected', () => {
    const engineer = new Engineer();
    expect(engineer.getGitHub()).toBe(engineer.gitHub);
});
test('verify the role of the engineer github is corrected', () => {
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe(engineer.role);
});