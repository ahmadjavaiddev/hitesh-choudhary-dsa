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

    // Print LinkedList
    printLinkedList() {
        let current = this.head;
        let list = [];

        while (current) {
            list.push(current.data);
            current = current.next;
        }
        console.log("List ::", list);
    }
}

// Insert New Node At The Beginning
LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
};

// Insert New Node At The End
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let last = this.head;
    while (last.next) {
        last = last.next;
    }

    last.next = newNode;
};

// Insert New Node After Given Node
LinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
    if (!prevNode) {
        return "Previous Node is Required!";
    }
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
};

// Delete First Node
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }

    this.head = this.head.next;
};

// Delete Last Node
LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return;
    }

    if (!this.head.next) {
        this.head = null;
        return;
    }

    let secondLast = this.head;

    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }
    secondLast.next = null;
};

// Delete Node By Given Key
LinkedList.prototype.deleteByKey = function (key) {
    if (!key) {
        return "Key is required!";
    }

    if (this.head.data === key) {
        this.head = this.head.next;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
};

// Search Node By Given Key
LinkedList.prototype.search = function (key) {
    let current = this.head;
    while (current) {
        if (current.data === key) {
            return true;
        }
        current = current.next;
    }

    return false;
};

// Reverse LinkedList
LinkedList.prototype.reverse = function () {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous;
};

// Usage Example
const newLinkedList = new LinkedList();

// Insert Nodes
newLinkedList.insertAtEnd("A: Hello there");
newLinkedList.insertAtEnd("B: Hey, How Are You");
newLinkedList.insertAtEnd("A: I am fine");
newLinkedList.insertAtEnd("A: What about you?");
newLinkedList.insertAtEnd("B: Good.");

// Delete Last Node
newLinkedList.deleteLastNode();
newLinkedList.insertAtEnd("B: Where are you?");

// Delete Node By Key
newLinkedList.deleteByKey("A: What about you?");
newLinkedList.printLinkedList();

// Search Node By Key
console.log(newLinkedList.search("A: I am fine"));

// Reverse LinkedList
newLinkedList.reverse();

// Print LinkedList
newLinkedList.printLinkedList();
