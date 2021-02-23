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
    function phone(teamManagerOffice) {
        var pass = teamManagerOffice.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
            return true;
        } else {

        return 'Please enter a valid phone number';
    }
}
});