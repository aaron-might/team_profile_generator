// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue= "GitHubUser";
    const e= new Employee("Foo",1,"test@test.com", testValue);
    expect(e.github).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {
    const testValue= "Engineer";
    const e= new Employee("Foo",1,"test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("foo",1, "test@test.com",testValue);
    expect(e.getGithub()).toBe(testValue);
});
