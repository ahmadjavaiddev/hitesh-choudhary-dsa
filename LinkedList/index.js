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
}

// Insert at the head
LinkedList.prototype.insertAtHead = function (data) {
    const newNode = new Node(data);
    this.head = newNode;
};

// Insert at the End
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

// Insert At the given Node
LinkedList.prototype.insertAtGivenNode = function (previousNode, data) {
    if (!previousNode) {
        console.log("Previous Node Is Required!");
        return;
    }

    const newNode = new Node(data, previousNode.next);
    previousNode.next = newNode;
};

// Delete the first Node
LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
};

// Delete Last Node
LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        console.log("List is empty!");
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

// Delete Node with given KEY
LinkedList.prototype.deleteByKey = function (key) {
    if (!this.head) {
        console.log("List is empty");
        return;
    }

    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next;
            return;
        }

        current = current.next;
    }

    console.log("No Node Found With Given Key:", key);
};
