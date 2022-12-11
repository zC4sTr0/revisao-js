var add = require("./calc.js");

describe("calculator", () => {
  it("must add two numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });
});
