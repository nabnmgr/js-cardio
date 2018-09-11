// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this method is not for overriding

    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    // first get the first reference
    let node = this.head;

    while (node) {
      counter++;
      // assign node to this node's next reference
      // if it's next is null, while loop will stop
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    // linkedlist only knows any nodes exist through the HEAD property
    this.head = null;
  }

  removeFirst() {
    // the head should point to the second node;
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    // even if there's only one, null will get assigned
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    // use getLast and point it's next to the new one
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    // if index is out of bounds
    // return null will also work if head is empty
    return null;
  }

  removeAt(index) {
    // find previous and point next to the following one
    // use getAt() but to get the previous one.
    if (!this.head) {
      return;
    }

    // if there is only one node;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    // if index is out of bounds
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // if index is out of bounds, previous becomes the last
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

const l = new LinkedList();
l.removeAt(0);

module.exports = { Node, LinkedList };
