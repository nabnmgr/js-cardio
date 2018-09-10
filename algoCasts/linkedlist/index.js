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

    this.head = new Node(data, this.head);
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
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
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
}

module.exports = { Node, LinkedList };
