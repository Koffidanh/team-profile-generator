const { test, expect } = require("@jest/globals");
const Manager = require("../lib/manager");

test('verify the name of the manager is corrected', () => {
    const manager = new Manager();
    expect(manager.getName()).toBe(manager.name);
});

test('verify the id of the manager employee is corrected', () => {
    const manager = new Manager();
    expect(manager.getId()).toBe(manager.id);
});

test('verify the email of the manager employee is corrected', () => {
    const manager = new Manager();
    expect(manager.getEmail()).toBe(manager.email);
});

test('verify the role of the manager employee is corrected', () => {
    const manager = new Manager();
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
   
});
test('verify the role of the manager employee is corrected', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe(manager.role);
   
});
test('verify the role of the manager icon is corrected', () => {
    const manager = new Manager();
    expect(manager.getIcon()).toBe(manager.icon);
   
});