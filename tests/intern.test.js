const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test('verify the name of the employee is intern', () => {
    const intern = new Intern();
    expect(intern.getName()).toBe(intern.name);
});

test('verify the id of the intern employee is corrected', () => {
    const intern = new Intern();
    expect(intern.getId()).toBe(intern.id);
});

test('verify the email of the intern employee is corrected', () => {
    const intern = new Intern();
    expect(intern.getEmail()).toBe(intern.email);
});

test('verify the role of the intern employee is corrected', () => {
    const intern = new Intern();
    expect(intern.getSchoolName()).toBe(intern.schoolName);
});
test('verify the role of the intern employee is corrected', () => {
    const intern = new Intern();
    expect(intern.getRole()).toBe(intern.role);
});
test('verify the role of the intern icon is corrected', () => {
    const intern = new Intern();
    expect(intern.getIcon()).toBe(intern.icon);
});