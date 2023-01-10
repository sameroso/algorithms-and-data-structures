class Stack<TItem extends any> {
  private items: TItem[] = [];

  constructor(els?: TItem[]) {
    if (!els) return;
    this.items = els;
  }

  push(els: TItem | TItem[]) {
    if (Array.isArray(els)) {
      this.items.push(...els);
    } else {
      this.items.push(els);
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getItems() {
    return [...this.items];
  }

  pop() {
    return this.items.pop();
  }
}

export default Stack;
