const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test('verify if the name of the employee is corrected', () => {
    const employee = new Employee();
    expect(employee.getName()).toBe(employee.name);
});

test('verify if the id of the employee is corrected', () => {
    const employee = new Employee();
    expect(employee.getId()).toBe(employee.id);
    
});

test('verify if the email of the employee is corrected', () => {
    const employee = new Employee();
    expect(employee.getEmail()).toBe(employee.email);
});

test('verify if the role of the employee is corrected', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe(employee.role);
});