class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    printList() {
        return this.head;
    }
}

LinkedList.prototype.insertAtStart = function (data) {
    const newNode = new Node(data, this.head);
    if (this.head !== null) {
        this.head.prev = newNode;
    }
    this.head = newNode;

    if (this.tail === null) {
        this.tail = newNode;
    }
};

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {
        this.tail.next = newNode;
    }

    this.tail = newNode;
    if (this.head === null) {
        this.head = newNode;
    }
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
    const newNode = new Node(data, prevNode.next, prevNode);
    if (prevNode.next !== null) {
        prevNode.next.prev = newNode;
    }

    prevNode.next = newNode;
    if (newNode.next === null) {
        this.tail = newNode;
    }
};

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        console.log("Nothing To Delete!");
        return;
    }

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        // this.head = this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
};

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        console.log("Nothing To Delete!");
        return;
    }

    if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        // this.head = this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
};

LinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = null;

    while (current) {
        // Swapping
        temp = current.prev; // null, node 2,
        console.log("1", current.prev);
        current.prev = current.next; // node 2, node 3,
        console.log("2", current.next);
        current.next = temp; // null, node 2,
        console.log("3", temp);
        // Move To Next Node
        current = current.prev; // node 2,
        console.log("4", current.prev);
    }

    if (temp !== null) {
        this.tail = this.head;
        this.head = temp.prev;
    }
};

const newLinkedList = new LinkedList();
newLinkedList.insertAtStart("A: Hello :)");
newLinkedList.insertAtStart("B: Hi :)");
newLinkedList.insertAtEnd("A: How are you?");
newLinkedList.insertAtEnd("B: I'm fine.");
console.log("List 1 ::", newLinkedList.printList());
newLinkedList.reverse();
console.log("List 2 ::", newLinkedList.printList());
