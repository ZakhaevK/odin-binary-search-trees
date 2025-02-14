export { LinkedList };

class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  append(nodeVal) {
    const newNode = new Node();
    newNode.setValue(nodeVal);
    if (this.size() == 0) {
      this.#tail = newNode;
      this.#head = newNode;
    } else {
      this.#tail.setNext(newNode);
      this.#tail = newNode;
    }
    this.#size++;
  }

  prepend(nodeVal) {
    const newNode = new Node();
    newNode.setValue(nodeVal);
    if (this.size() == 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.setNext(this.head());
      this.#head = newNode;
    }
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  at(index) {
    if (index == 0) {
      return this.#head.getValue();
    }

    let currentNode = this.#head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.getNext();
      i++;
    }
    return currentNode.getValue();
  }

  #atNode(index) {
    if (index == 0) {
      return this.#head;
    }

    let currentNode = this.#head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.getNext();
      i++;
    }
    return currentNode;
  }

  pop() {
    if (this.size() == 1 || this.size() == 0) {
      this.#head = null;
      this.#tail = null;
      this.#size = 1; // Prevent negative size
    } else {
      const newTail = this.#atNode(this.size() - 2);
      this.#tail = newTail;
      this.#tail.setNext(null);
    }
    this.#size--;
  }

  contains(value) {
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      if (currentNode.getValue() == value) return true;
      currentNode = currentNode.getNext();
      i++;
    }
    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      if (currentNode.getValue() == value) return i;
      currentNode = currentNode.getNext();
      i++;
    }
    return null;
  }

  insertAt(value, index) {
    const newNode = new Node();
    newNode.setValue(value);

    if (index == 0) {
      this.prepend(value); 
      return;
    }

    if (index == this.size()) {
      this.append(value);
      return
    }

    if (index > this.size() || index < 0) {
      return
    }

    const prev = this.#atNode(index - 1);
    const next = prev.getNext();

    prev.setNext(newNode);
    newNode.setNext(next);
    this.#size++;
  }

  removeAt(index) {

    if (index >= this.size() || index < 0) {
      return
    }

    const prev = this.#atNode(index - 1);
    const next = prev.getNext().getNext();

    prev.setNext(next);
    this.#size--;
  }

  toString() {
    let returnStr = "";
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      returnStr += `( ${currentNode.getValue()} ) -> `;
      currentNode = currentNode.getNext();
      i++;
    }
    returnStr += ` ${currentNode}`;
    return returnStr;
  }
}

class Node {
  #value = null;
  #nextNode = null;

  constructor() {}

  setValue(val) {
    this.#value = val;
  }

  setNext(Node) {
    this.#nextNode = Node;
  }

  getValue() {
    return this.#value;
  }

  getNext() {
    return this.#nextNode;
  }
}
