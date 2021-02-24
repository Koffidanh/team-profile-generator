const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test('verify if the role of the employee is corrected', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe(employee.role);
});