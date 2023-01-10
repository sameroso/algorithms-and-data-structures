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

  get size() {
    return this, this.items.length;
  }

  clear() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }
}

export default Stack;
