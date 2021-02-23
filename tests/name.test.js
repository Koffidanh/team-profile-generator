const { test, expect } = require("@jest/globals");
const Name = require("../lib/name");

test('verify the name of the team', () => {
    const teamName = new Name();
    expect(teamName.getName()).toBe(teamName.name);
});
