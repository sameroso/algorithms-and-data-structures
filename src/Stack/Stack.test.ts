import Stack from ".";

describe("Stack tests", () => {
  it("should start empty when no arguments are passed", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should start empty when empty array is passed as argument", () => {
    const stack = new Stack([]);
    expect(stack.isEmpty()).toBe(true);
  });

  it("should not start empty when a valid argument is passed", () => {
    const stack = new Stack([1]);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should not be empty when pushing an element", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should be empty when pushing one element and popping one element", () => {
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should be empty when pushing one element and popping one element", () => {
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should add more than one element when pushing more than one element", () => {
    const stack = new Stack();
    stack.push([1, 2]);

    expect(stack.size).toBe(2);
  });

  it("pop should return last element", () => {
    const stack = new Stack();
    stack.push([1, 2]);

    const lastElement = stack.pop();

    expect(lastElement).toBe(2);
  });

  it("pop should return undefined when stack is empty", () => {
    const stack = new Stack();

    const lastElement = stack.pop();

    expect(lastElement).toBe(undefined);
  });

  it("should clear all items calling clear method", () => {
    const stack = new Stack([1, 2, 3, 4]);
    expect(stack.isEmpty()).toBe(false);

    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  });
});
