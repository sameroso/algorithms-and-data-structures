import Stack from ".";

describe("Stack tests", () => {
  it("should start empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});
